"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
const moduleManager_1 = require("./abis/moduleManager");
const app = (0, express_1.default)();
const port = 3001;
const transport = (0, viem_1.http)();
const client = (0, viem_1.createPublicClient)({ chain: chains_1.mainnet, transport });
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
        abi: moduleManager_1.moduleManagerABI,
        eventName: "ModuleApprovalSet",
        fromBlock: 0n,
        toBlock: blockNumber,
    });
    console.log(filter);
};
main();
//# sourceMappingURL=app.js.map