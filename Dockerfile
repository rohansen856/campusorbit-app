# Stage 1: Install dependencies (cached)
FROM node:latest AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --only=prod

# Stage 2: Copy application code and generate Prisma client
FROM node:latest
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN echo "Generating Prisma client..." && npx prisma generate

# Stage 3: Production build (replace with npm run build for development)
FROM node:latest AS prod
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN echo "Building the application..." && npm run build

# Stage 4: Run the application
FROM prod
CMD [ "npm", "run", "start" ]
