import { parseCsv } from "./parse-csv";

it("returns parsed csv with types", async () => {
  const csv = `title,type,distance,url,backgroundColor
Ch'ti Bike Tour 2022,bike,145,https://image.jpg/,#07AED7
Le Trail des Hobbits,run,21,https://secondimage.png,#F7941C`;

  expect(await parseCsv(csv)).toEqual([
    {
      backgroundColor: "#07AED7",
      distance: 145,
      title: "Ch'ti Bike Tour 2022",
      type: "bike",
      url: "https://image.jpg/",
    },
    {
      backgroundColor: "#F7941C",
      distance: 21,
      title: "Le Trail des Hobbits",
      type: "run",
      url: "https://secondimage.png",
    },
  ]);
});

it("returns parsed csv with types", async () => {
  const csv = `title,Background color.[0].hex,Background color.[0].name
First,#FFFFFF,white
Second,#000000,black`;

  expect(await parseCsv(csv)).toEqual([
    {
      "Background color": [{ hex: "#FFFFFF", name: "white" }],
      title: "First",
    },
    {
      "Background color": [{ hex: "#000000", name: "black" }],
      title: "Second",
    },
  ]);
});
