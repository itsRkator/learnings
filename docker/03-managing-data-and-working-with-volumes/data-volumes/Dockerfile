FROM node:24-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

# VOLUME [ "/app/feedback" ] # Unnamed Volume, get removed on container removal

CMD [ "npm", "run", "start:dev" ]