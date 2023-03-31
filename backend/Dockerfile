FROM node:16-slim as builder

RUN apt-get update && apt-get install -y openssl

WORKDIR /backend

COPY src ./src
COPY prisma ./prisma
COPY *.json yarn.lock ./
RUN yarn install && yarn build
COPY src/views ./build/views

# Can't use node alpine because there is an issue with open SSL and Prisma
FROM node:16-slim AS camerapps

RUN apt-get update && apt-get install -y openssl

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /backend/package.json /backend/yarn.lock ./
COPY --from=builder /backend/prisma ./prisma
COPY --from=builder /backend/node_modules ./node_modules

RUN mkdir -p public/images && chown node:node -R public

COPY --chown=node:node --from=builder /backend/build ./src

EXPOSE 8100

CMD ["yarn", "migrate:start:prod"]