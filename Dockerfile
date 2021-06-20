FROM node:16-alpine

RUN apk add libwebp

ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm i -g husky
RUN npm install
RUN npm run webp
COPY . /usr/src/app

RUN npm run build
EXPOSE 3000

CMD [ "npm", "start" ]