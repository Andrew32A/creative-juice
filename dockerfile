FROM amd64/node:lts-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package*.json /app/

RUN npm install

EXPOSE 3000

COPY . /app

CMD [ "node", "./src/backend/server.js" ]