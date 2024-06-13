default: dev

dev:
	npm run dev

container:
	docker build -t campusorbit . && docker run -p 3000:3000 campusorbit npm run ddev