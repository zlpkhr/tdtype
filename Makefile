.PHONY: fmt typecheck gen

install:
	bun install
	uv sync

gen:
	uv run generate_schema.py

fmt:
	uv run ruff format .
	bun run prettier --write .

typecheck:
	bun run tsc
