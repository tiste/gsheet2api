# gsheet2api

[![Node.js CI](https://github.com/tiste/gsheet2api/actions/workflows/ci.yml/badge.svg)](https://github.com/tiste/gsheet2api/actions/workflows/ci.yml)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftiste%2Fgsheet2api&env=GSHEET_URL,API_KEY)

## Quick Start

Run `npm install` and `npm start` to launch API.

### Environment

First, create the env file: `cp .env{.sample,}`

You can now set the values in `.env` file.

To load them, either you export manually each environment variables of the `.env` file such as: `export API_NAME=...`.

Or you can install `direnv` (`brew install direnv`), and allow sourcing from your current directory with `direnv allow`.

## Running tests

Run `npm test`

## Development

You can launch the API in dev mode, with `npm run start:dev`
