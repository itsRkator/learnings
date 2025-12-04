FROM node:24-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV VITE_API_URL=http://localhost:3000

EXPOSE 5173

CMD [ "npm", "run", "dev" ]