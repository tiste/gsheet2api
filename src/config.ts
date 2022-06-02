import * as env from "env-var";

export class Config {
  port(): number {
    return env.get("PORT").default("3000").asInt();
  }

  gsheetUrl(): string {
    return env.get("GSHEET_URL").required().asString();
  }

  apiPath(): string {
    return env.get("API_PATH").default("/").required().asString();
  }

  apiKey(): string | undefined {
    return env.get("API_KEY").asString();
  }
}

export const config = new Config();
