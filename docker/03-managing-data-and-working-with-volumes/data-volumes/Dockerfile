FROM node:24-alpine

ARG DEFAULT_PORT=3000

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT=${DEFAULT_PORT}

EXPOSE ${PORT}

# VOLUME [ "/app/feedback" ] # Unnamed Volume, get removed on container removal

CMD [ "npm", "run", "start:dev" ]