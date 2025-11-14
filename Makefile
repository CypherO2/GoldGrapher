install: frontend-install backend-install

frontend-install:
	@cd frontend && npm install

backend-install:
	@poetry install --no-root

windows-backend-dev:
	@cd backend && poetry run uvicorn main:app --reload --host 127.0.0.1 --port 8000

dev:
	@npx concurrently -n "backend,frontend" -c "blue,green" "${MAKE} windows-backend-dev" "${MAKE} frontend-dev"

frontend-dev:
	@cd frontend && npm run dev

backend-dev:
	@cd backend && PYTHONPATH=. poetry run fastapi dev app.py --reload