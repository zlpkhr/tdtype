# tdtype

TypeScript declarations for TDLib.

## Installation

```bash
npm install --save-dev tdtype

pnpm add -D tdtype

bun add -D tdtype
```

## Development

```bash
# Install JavaScript and Python dependencies
make install

# Generate types/object.d.ts, types/function.d.ts and types/update.d.ts
make gen

# Format the codebase
make fmt

# Type-check the generated declarations using tsc
make typecheck
```

## How It Works

1. **td_api.json** – A JSON dump of the TDLib TL schema. This file is sourced from:
   [https://github.com/pytdbot/client/blob/main/td_api.json](https://github.com/pytdbot/client/blob/main/td_api.json)

2. **generate_schema.py** – Generates three declaration files:
   - `types/object.d.ts` – Contains both final and abstract object types, including updates.
   - `types/function.d.ts` – Contains function declarations with `(args) => ReturnType` signatures.
   - `types/update.d.ts` – Provides the `Up` type, which maps each update event name to its object type.

## Versioning

The `tdtype` version matches the TDLib version, with dots removed. For example, TDLib `1.8.50` becomes `1850`, so package versions starting with `1850` use TDLib `1.8.50`.
