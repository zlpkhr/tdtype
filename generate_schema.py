"""Generate TypeScript declaration files for TDLib.

This utility reads the already-generated ``td_api.json`` description and writes
two **self-contained** declaration files under ``types/``:

• ``object.ts``   – all concrete object definitions (including updates) and
  small abstract unions.
• ``function.ts`` – function signatures in the form ``(args) => ReturnType``.

The output is tailored for fast TypeScript compilation: no gigantic global
unions are produced and the special TDLib error object maps directly to the
``TdError`` type from ``tdweb``.

Run the script from the project root:

    python generate_schema.py

Only the Python standard library is used.
"""

from __future__ import annotations

import json
import shutil
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


def main() -> None:  # noqa: C901
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
            "int64": "string",  # BigInt not supported in tdweb typings
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
            return "TdError"

        ref_name = to_camel_case(raw, is_class=True)
        return f"Obj.{ref_name}" if external else ref_name

    # ------------------------------------------------------------------
    # Generate TypeScript declaration files
    # ------------------------------------------------------------------

    types_dir = Path("types")
    # Remove stale generated files to avoid leftovers from previous runs
    if types_dir.exists():
        shutil.rmtree(types_dir)
    types_dir.mkdir(exist_ok=True)

    # ------------------------------------------------------------------
    # object.ts  – concrete TDLib objects *and* update objects
    # ------------------------------------------------------------------

    obj_lines: List[str] = [
        "import type { TdObject, TdError } from 'tdweb';\n",
        "/** TDLib concrete & update objects */\n",
    ]

    def append_object(name: str, data: dict) -> None:
        ts_name = to_camel_case(name, is_class=True)
        doc_lines = [
            "/**",
            f" * {data['description']}",
            f" * @see {DOCS_BASE.format(to_snake_case(name))}",
            " */",
        ]
        obj_lines.extend(doc_lines)
        obj_lines.append(f"export type {ts_name} = TdObject & {{")
        obj_lines.append(f"  '@type': '{name}';")
        for arg_name, arg in data["args"].items():
            ts_type = tl_to_ts_type(arg["type"])
            optional = "?" if arg.get("is_optional") else ""
            obj_lines.append(f"  /** {arg['description']} */")
            obj_lines.append(f"  {arg_name}{optional}: {ts_type};")
        obj_lines.append("}\n")

    # -- regular concrete types (skip special cases)
    for name, data in td_json["types"].items():
        if name == "error":
            continue  # handled via TdError import
        append_object(name, data)

    # -- updates (exclude container 'updates')
    for name, data in td_json["updates"].items():
        append_object(name, data)

    # -- abstract class unions (excluding `update` – very large & redundant)
    for cls_name, cls_info in td_json["classes"].items():
        if cls_name == "update" or not cls_info["types"]:
            continue
        parent_ts = to_camel_case(cls_name, is_class=True)
        variants = [to_camel_case(v, is_class=True) for v in cls_info["types"]]
        obj_lines.append(f"export type {parent_ts} = {' | '.join(variants)};\n")

    (types_dir / "object.ts").write_text("\n".join(obj_lines))

    # ------------------------------------------------------------------
    # function.ts  – function signatures  (params) => return
    # ------------------------------------------------------------------

    fn_lines: List[str] = [
        "import type * as Obj from './object';\n",
        "import type { TdError } from 'tdweb';\n",
        "/** TDLib callable functions */\n",
    ]

    for name, data in td_json["functions"].items():
        ts_name = to_camel_case(name, is_class=True)

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

        doc_lines = [
            "/**",
            f" * {data['description']}",
            f" * @see {DOCS_BASE.format(to_snake_case(name))}",
            " */",
        ]
        fn_lines.extend(doc_lines)
        fn_lines.append(
            f"export type {ts_name} = (args: {params_obj}) => {return_ts};\n"
        )

    (types_dir / "function.ts").write_text("\n".join(fn_lines))

    print(
        f"TypeScript declaration files written to {types_dir}/object.ts and function.ts"
    )


if __name__ == "__main__":
    main()
