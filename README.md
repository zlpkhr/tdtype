# tdtype

Generate TypeScript declaration files for TDLib.

## Quick Start

```bash
# Install JS and Python dependencies
make install

# Generate types/object.d.ts and types/function.d.ts
make gen
```

## Optional Helpers

```bash
# Format the codebase
make fmt

# Type-check the generated declarations using tsc
make typecheck
```

## How It Works

1. **td_api.json** – A JSON dump of the TDLib TL schema. This file is sourced from:
   [https://github.com/pytdbot/client/blob/main/td_api.json](https://github.com/pytdbot/client/blob/main/td_api.json)

2. **generate_schema.py** – Generates two declaration files:
   - `types/object.d.ts` – Contains final and abstract object types, including updates.
   - `types/function.d.ts` – Contains function declarations with `(args) => ReturnType` signatures.
