"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
const app = (0, express_1.default)();
const port = 3001;
const transport = (0, viem_1.http)();
// "https://eth-mainnet.g.alchemy.com/v2/tmFA488vlFz0gakXsb14Zj_54Uayc41s"
const client = (0, viem_1.createPublicClient)({ chain: chains_1.mainnet, transport });
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("main started");
    const blockNumber = yield client.getBlockNumber();
    console.log(blockNumber);
});
main();
//# sourceMappingURL=app.js.map