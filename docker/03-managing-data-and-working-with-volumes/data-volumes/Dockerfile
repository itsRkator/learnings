FROM node:24-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG DEFAULT_PORT=3000

ENV PORT=${DEFAULT_PORT}

EXPOSE ${PORT}

# VOLUME [ "/app/feedback" ] # Unnamed Volume, get removed on container removal

CMD [ "npm", "run", "start:dev" ]