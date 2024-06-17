default: dev

seed:
	npx prisma db push --force-reset && npx prisma db seed

dev:
	npm run dev

start:
	npm run start

containerize:
	docker build -t campusorbit .

start-container:
	docker run -p 3000:3000 campusorbit npm run dev

start-all:
	echo "make sure you have the correct env variables" && docker compose --env-file .env up -d && npm i && npm run dev