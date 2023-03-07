import express from "express";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const app = express();
const port = 3001;

const transport = http();

const client = createPublicClient({ chain: mainnet, transport });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

const main = async () => {
  console.log("main started");
  const blockNumber = await client.getBlockNumber();
  console.log(blockNumber);
};

main();
