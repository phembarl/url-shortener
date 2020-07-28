# Url Shortener

Url Shortener is a mini-application that shortens urls

## Installing / Getting started

You need to have the following tools installed on your computer before you install and run this project:

- Git
- Node
- Docker

To run:

With Docker:

```shell
git clone https://github.com/phembarl/url-shortener
cd url-shortener
docker-compose up --build
```

Without Docker:

```shell
git clone https://github.com/phembarl/url-shortener
cd url-shortener
npm install
npm run start-dev
```

The code above runs the application

### Initial Configuration (Without Docker)

Create a `.env` file in the root directory and configure like so:

```
PORT=<PORT>
APP_DIR=<APP_DIR>
mongodb_HOSTNAME=<mongodb_HOSTNAME>
mongodb_PORT=<mongodb_PORT>
mongodb_USERNAME=<mongodb_USERNAME>
mongodb_PASSWORD=<mongodb_PASSWORD>
DATABASE_URL=<DATABASE_URL>
```

Create a `.env` file in the src/client directory and configure like so:

```
VUE_APP_SERVER_URL=http://localhost:<PORT>/urls
```

## Features

- User can check for most occuring word among a collection of words

## API Endpoints

- `GET /urls` Fetch all url records
- `POST /urls/shorten` Shorten url

## Contributing

Any contribution is welcome, please fork the repository and use a feature
branch. Please follow the guide of the Pull Request Template provided.

## Links

- Repository: https://github.com/phembarl/url-shortener

## Author

This project belongs to Femi Balogun
