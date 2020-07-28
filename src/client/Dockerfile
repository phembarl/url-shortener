FROM node:erbium

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${CLIENT_PORT}

CMD [ "npm", "run", "serve" ]
