import express from "express";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { moduleManagerABI } from "./abis/moduleManager";

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

  // const unwatch = await client.watchContractEvent({
  //   address: "0x850A7c6fE2CF48eea1393554C8A3bA23f20CC401",
  //   abi: moduleManagerABI,
  //   eventName: "ModuleApprovalSet",
  //   onLogs: logs => console.log(logs),
  // });

  const filter = await client.createContractEventFilter({
    address: "0x850A7c6fE2CF48eea1393554C8A3bA23f20CC401",
    abi: moduleManagerABI,
    eventName: "ModuleApprovalSet",
    fromBlock: 0n,
    toBlock: blockNumber,
  });

  console.log(filter);
};

main();
