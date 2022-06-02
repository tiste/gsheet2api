import csv from "csvtojson";

export async function parseCsv(data: any) {
  return csv({
    checkType: true,
  }).fromString(data);
}
