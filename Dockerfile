# Stage 1: Install dependencies (cached)
FROM node:latest

COPY . .

RUN npm install
