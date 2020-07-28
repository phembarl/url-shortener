FROM node:erbium

ARG PORT
ARG APP_DIR

WORKDIR ${APP_DIR}

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD [ "npm", "run", "dev" ]
