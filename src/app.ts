import fastify from "fastify";
import axios from "axios";
import bearerAuthPlugin from "@fastify/bearer-auth";
import { parseCsv } from "./parse-csv";

const keys = new Set(["a-super-secret-key"]);

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQI58ZDIpnCbKHhEVS0g82dEZapnacapjHVlQYuu0s9sOp9cZUuNDEqLIoIVUenS8oYtcZEGTqAYqgG/pub?output=csv";

export function build(config) {
  const app = fastify(config);

  app.register(bearerAuthPlugin, { keys });

  let items: any[] = [];
  app.get("/", async () => {
    if (items.length === 0) {
      const { data } = await axios.get(SHEET_URL);

      items = await parseCsv(data);
    }

    return items;
  });

  return app;
}
