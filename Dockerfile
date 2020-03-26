FROM node:13.10-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

CMD ["node", "app.js"]
