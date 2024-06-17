FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM postgres:16

COPY --from=builder /app/build /var/www/html

EXPOSE 5432

# ENV POSTGRES_PASSWORD=your_postgres_password
# ENV POSTGRES_USER=your_postgres_user
# ENV POSTGRES_DB=campusorbit

# RUN psql -h localhost -U postgres -f /docker-entrypoint-initdb.d/init-db.sql

CMD ["postgres", "-D", "/var/lib/postgresql/data"]
