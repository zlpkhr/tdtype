.PHONY: fmt typecheck gen

gen:
	uv run generate_schema.py

fmt:
	uv run ruff format .
	bun run biome check --write .

typecheck:
	bun run tsc
