"""Generate TypeScript declaration files for TDLib.

Reads the generated ``td_api.json`` and writes two self-contained files to ``types/``:

- ``object.d.ts``   - all object types (including updates)
- ``function.d.ts`` - function signatures as ``(args) => ReturnType``

Run from project root:

    uv run generate_schema.py
"""

import json
import re
from pathlib import Path
from typing import List

# Base URL for TDLib C++ documentation pages
DOCS_BASE = "https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1{}.html"

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def to_camel_case(
    input_str: str, delimiter: str = ".", *, is_class: bool = True
) -> str:
    """Return *input_str* converted to lower-/upper-camelCase as used in TDLib."""
    if not input_str:
        return ""

    parts = input_str.split(delimiter)
    camel_case = ""
    for i, part in enumerate(parts):
        if i > 0:
            camel_case += part[0].upper() + part[1:]
        else:
            camel_case += part

    if camel_case:
        camel_case = (
            camel_case[0].upper() if is_class else camel_case[0].lower()
        ) + camel_case[1:]

    return camel_case


def to_snake_case(input_str: str) -> str:
    """Convert *input_str* (camelCase/PascalCase) to snake_case."""
    if not input_str:
        return ""

    snake = ""
    for i, ch in enumerate(input_str):
        if ch.isupper() and i != 0:
            snake += "_" + ch.lower()
        else:
            snake += ch.lower()
    return snake


# ---------------------------------------------------------------------------
# Main entry point
# ---------------------------------------------------------------------------


def main():
    td_json_path = Path("td_api.json")
    if not td_json_path.exists():
        raise SystemExit("td_api.json not found. Run generate_json.py first.")

    td_json = json.loads(td_json_path.read_text())

    # ------------------------------------------------------------------
    # Helper: translate TL type → TypeScript type
    # ------------------------------------------------------------------

    def tl_to_ts_type(raw: str, *, external: bool = False) -> str:
        raw = raw.strip()

        # Optional marker
        if raw.startswith("?"):
            raw = raw[1:]

        prim_map = {
            "int32": "number",
            "int53": "number",
            "int64": "string",  # BigInt not supported in tdlib typings
            "int256": "number",
            "double": "number",
            "bytes": "string",
            "string": "string",
            "Bool": "boolean",
        }

        if raw in prim_map:
            return prim_map[raw]

        # Vector<…> / (vector …) forms
        if raw.startswith("vector<") and raw.endswith(">"):
            inner = raw[len("vector<") : -1]
            return f"{tl_to_ts_type(inner, external=external)}[]"
        if raw.startswith("(") and raw.endswith(")"):
            parts = raw[1:-1].split()
            if len(parts) == 2 and parts[0] == "vector":
                return f"{tl_to_ts_type(parts[1], external=external)}[]"

        # Fallbacks
        if raw.lower() == "error":
            # Map the special "error" object to the generated Error/Obj.Error type
            return "Obj.Error" if external else "Error"

        ref_name = to_camel_case(raw, is_class=True)
        return f"Obj.{ref_name}" if external else ref_name

    # ------------------------------------------------------------------
    # Generate TypeScript declaration files
    # ------------------------------------------------------------------

    types_dir = Path("types")
    types_dir.mkdir(exist_ok=True)

    # ------------------------------------------------------------------
    # object.ts  – concrete TDLib objects *and* update objects
    # ------------------------------------------------------------------

    obj_lines: List[str] = []

    def append_object(name: str, data: dict) -> None:
        ts_name = to_camel_case(name, is_class=True)
        doc_lines = [
            "/**",
            f" * {data['description']}",
            f" * @see {DOCS_BASE.format(to_snake_case(name))}",
            " */",
        ]
        obj_lines.extend(doc_lines)
        obj_lines.append(f"export type {ts_name} = {{")
        obj_lines.append(f"  '@type': '{name}';")
        for arg_name, arg in data["args"].items():
            ts_type = tl_to_ts_type(arg["type"])
            optional = "?" if arg.get("is_optional") else ""
            obj_lines.append(f"  /** {arg['description']} */")
            obj_lines.append(f"  {arg_name}{optional}: {ts_type};")
        obj_lines.append("}\n")

    # -- regular concrete types (skip special cases)
    for name, data in td_json["types"].items():
        append_object(name, data)

    # -- updates (include container 'updates' as a normal object)
    for name, data in td_json["updates"].items():
        append_object(name, data)

    # -- abstract class unions (excluding `update` – very large & redundant)
    for cls_name, cls_info in td_json["classes"].items():
        if cls_name == "update" or not cls_info["types"]:
            continue
        parent_ts = to_camel_case(cls_name, is_class=True)
        variants = [to_camel_case(v, is_class=True) for v in cls_info["types"]]
        obj_lines.append(f"export type {parent_ts} = {' | '.join(variants)};\n")

    (types_dir / "object.d.ts").write_text("\n".join(obj_lines))

    # ------------------------------------------------------------------
    # function.ts  – function signatures  (params) => return
    # ------------------------------------------------------------------

    # Begin output for function declarations; each TDLib function signature will be inlined
    # directly in the `Fn` map instead of having separate type aliases.
    fn_lines: List[str] = [
        "import type * as Obj from './object';\n",
        "export type Fn = {\n",
    ]

    for name, data in td_json["functions"].items():
        # No separate alias names are generated; everything will be inlined in the Fn map.

        # Build param object type inline
        param_lines: List[str] = []
        param_lines.append("{")
        # mandatory TDLib discriminator
        param_lines.append(f"    '@type': '{name}';")
        for arg_name, arg in data["args"].items():
            ts_type = tl_to_ts_type(arg["type"], external=True)
            optional = "?" if arg.get("is_optional") else ""
            param_lines.append(f"    /** {arg['description']} */")
            param_lines.append(f"    {arg_name}{optional}: {ts_type};")
        param_lines.append("}")
        params_obj = "\n".join(param_lines)

        return_ts = tl_to_ts_type(data["type"], external=True)

        # Prepare documentation and property for the Fn map.
        doc_lines = [
            "/**",
            f" * {data['description']}",
            f" * @see {DOCS_BASE.format(to_snake_case(name))}",
            " */",
        ]

        # Indent documentation lines inside the map (two spaces)
        fn_lines.extend([f"  {line}" for line in doc_lines])

        # Prepare parameter object with proper indentation (4 spaces within the map)
        indented_params_obj = "\n".join(["    " + pl for pl in param_lines])

        # Determine a valid TS key (quote if needed)
        key = name if re.match(r"^[A-Za-z_][A-Za-z0-9_]*$", name) else f"'{name}'"

        # Append the property with the full signature
        fn_lines.append(f"  {key}: (args: {indented_params_obj}) => {return_ts};\n")

    # Close the Fn map definition.
    fn_lines.append("};\n")

    (types_dir / "function.d.ts").write_text("\n".join(fn_lines))

    # ------------------------------------------------------------------
    # update.ts  – mapping of update object names to their types (Up map)
    # ------------------------------------------------------------------

    up_lines: List[str] = [
        "import type * as Obj from './object';\n",
        "export type Up = {\n",
    ]

    for name, data in td_json["updates"].items():
        # Skip the special container object "updates"; we want only individual update events
        if name == "updates":
            continue
        # Documentation for each update type
        doc_lines = [
            "/**",
            f" * {data['description']}",
            f" * @see {DOCS_BASE.format(to_snake_case(name))}",
            " */",
        ]
        up_lines.extend([f"  {line}" for line in doc_lines])

        # Determine the key and mapped TypeScript type
        key = name if re.match(r"^[A-Za-z_][A-Za-z0-9_]*$", name) else f"'{name}'"
        ts_type = f"Obj.{to_camel_case(name, is_class=True)}"
        up_lines.append(f"  {key}: {ts_type};\n")

    # Close the Up map definition.
    up_lines.append("};\n")

    (types_dir / "update.d.ts").write_text("\n".join(up_lines))

    print(
        f"Declaration files written to {types_dir}/object.d.ts, function.d.ts and update.d.ts"
    )


if __name__ == "__main__":
    main()
