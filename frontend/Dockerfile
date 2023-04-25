FROM node:16-buster-slim

ARG baseApiURL="api.camerapps.com"
ENV VITE_API_URL=$baseApiURL

WORKDIR /app

COPY . .

RUN yarn install && yarn build

FROM flashspys/nginx-static

RUN apk update && apk upgrade

COPY --from=0 /app/dist /static