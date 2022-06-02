import { build } from "../src/app";

const app = build({ logger: true });

export default async function (req, res) {
  await app.ready();
  app.server.emit("request", req, res);
}
