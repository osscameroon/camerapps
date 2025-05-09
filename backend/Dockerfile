FROM node:24.0-slim

RUN apt-get update && apt-get install -y openssl apt-utils

WORKDIR /app

COPY backend/prisma/schema.prisma backend/*.json backend/*.lock ./
RUN yarn install

COPY backend/* ./
COPY backend/src/views ./build/views

RUN yarn build

RUN mkdir -p public/images && chown node:node -R public

EXPOSE 8100

CMD ["yarn", "migrate:start:prod"]
