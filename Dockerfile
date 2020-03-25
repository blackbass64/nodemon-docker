FROM node:13.10-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install nodemon -g
