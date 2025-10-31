# Stage 1: Build
FROM node:20.17-alpine AS builder

RUN npm install -g pnpm
WORKDIR /app

COPY package.json /app/package.json

RUN pnpm install

COPY . /app

RUN pnpm run build

# Stage 2: Runtime
FROM node:20.17-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.env ./

RUN pnpm install --production

EXPOSE 3000

CMD ["pnpm", "start"]
