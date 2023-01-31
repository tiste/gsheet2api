# gsheet2api

[![Node.js CI](https://github.com/tiste/gsheet2api/actions/workflows/ci.yml/badge.svg)](https://github.com/tiste/gsheet2api/actions/workflows/ci.yml)

> Easily use a Google Sheet as a JSON api, self-hosted or deployed from a one-click button to Vercel.

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftiste%2Fgsheet2api&env=GSHEET_URL,API_KEY"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
</p>

## Configuration

| Name       | Description                               |
| ---------- | ----------------------------------------- |
| GSHEET_URL | Public CSV url of your Google Sheet       |
| API_KEY    | Bearer api token to protect your endpoint |
| API_PATH   | Default: `/`, path of your endpoint       |

## Quick Start

Run `npm install` and `npm start` to launch API.

### Environment

First, create the env file: `cp .env{.sample,}` (or `op inject -i .env.sample -o .env`)

You can now set the values in `.env` file.

To load them, either you export manually each environment variables of the `.env` file such as: `export API_KEY=...`.

Or you can install `direnv` (`brew install direnv`), and allow sourcing from your current directory with `direnv allow`.

## Running tests

Run `npm test`

## Development

You can launch the API in dev mode, with `npm run start:dev`
