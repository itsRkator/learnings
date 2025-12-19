FROM node:24-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4005

CMD [ "npm", "start" ]