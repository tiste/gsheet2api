import { build } from "./app";
import { config } from "./config";

const app = build({ logger: true });

async function start() {
  await app.ready();
  await app.listen(config.port());
}

start();
