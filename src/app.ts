import fastify, { FastifyServerOptions } from "fastify";
import axios from "axios";
import bearerAuthPlugin from "@fastify/bearer-auth";
import corsPlugin from "@fastify/cors";
import { parseCsv } from "./parse-csv";
import { config } from "./config";

const API_PATH = config.apiPath();
const API_KEY = config.apiKey();
const API_KEYS = new Set(API_KEY ? [API_KEY] : []);
const GSHEET_URL = config.gsheetUrl();

export function build(config: FastifyServerOptions) {
  const app = fastify(config);

  app.register(corsPlugin);

  app.get("/health", async () => {
    return { status: "ok" };
  });

  app.register((appWithAuth, opts, next) => {
    let items: any[] = [];

    if (API_KEYS.size) {
      appWithAuth.register(bearerAuthPlugin, { keys: API_KEYS });
    }

    appWithAuth.get("/_refresh", () => {
      items = [];
      return null;
    });

    appWithAuth.get(API_PATH, async () => {
      if (items.length === 0) {
        const { data } = await axios.get(GSHEET_URL);

        items = await parseCsv(data);
      }

      return items;
    });

    next();
  });

  return app;
}
