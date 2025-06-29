.PHONY: fmt

fmt:
	uv run ruff format .
	bun run biome check --write .

typecheck:
	bun run tsc