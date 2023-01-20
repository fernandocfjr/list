const { version } = require("../package.json");
const { sortTokens } = require("builder");

module.exports = function () {
  const parsed = version.split(".");

  return {
    name: "Chainlink Token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://gateway.ipfscdn.io/ipfs/QmPcT7mSzdZ4aeDKwwukQUP3zjf2m5zpuzXZbaf6Hw2CJc",
    keywords: ["nevellus", "chainlink", "tokenlist"],
    tokens: sortTokens([...require("../tokens/ethereum.json")]),
  };
};
