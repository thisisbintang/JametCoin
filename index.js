const CryptoBlockchain = require("./lib/CryptoBlockchain");
const CryptoBlock = require("./lib/CryptoBlock");

let simpleCoin = new CryptoBlockchain();
simpleCoin.addNewBlock(new CryptoBlock(1, "01/06/2021", {sender: "Bintang", recipient: "Fadjrul", quantity: 50}));
simpleCoin.addNewBlock(new CryptoBlock(2, "01/07/2021", {sender: "Fallah", recipient: "Ilmu Komputer", quantity: 100}));
console.log(JSON.stringify(simpleCoin, null, 4));
