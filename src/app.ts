import fastify from "fastify";
import axios from "axios";
import bearerAuthPlugin from "@fastify/bearer-auth";
import corsPlugin from "@fastify/cors";
import { parseCsv } from "./parse-csv";
import { config } from "./config";

const API_PATH = config.apiPath();
const API_KEY = config.apiKey();
const API_KEYS = new Set(API_KEY ? [API_KEY] : []);
const GSHEET_URL = config.gsheetUrl();

export function build(config) {
  const app = fastify(config);

  app.register(corsPlugin);
  if (API_KEYS.size) {
    app.register(bearerAuthPlugin, { keys: API_KEYS });
  }

  let items: any[] = [];
  app.get(API_PATH, async () => {
    if (items.length === 0) {
      const { data } = await axios.get(GSHEET_URL);

      items = await parseCsv(data);
    }

    return items;
  });

  return app;
}
