import { build } from "./app";

const app = build({ logger: true });

async function start() {
  await app.ready();
  await app.listen(process.env.PORT || 3000);
}

start();
