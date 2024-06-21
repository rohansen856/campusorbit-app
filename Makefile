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
	docker run --env-file .env -p 3000:3000 campusorbit npm run dev

start-server:
	docker compose up -d

contributor:
	make start-server && make containerize && make start-container