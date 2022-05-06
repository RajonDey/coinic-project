// https://eth-ropsten.alchemyapi.io/v2/zTbs-ng7RJ3ryk6zGqTSkHvlbJPnk72S

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/zTbs-ng7RJ3ryk6zGqTSkHvlbJPnk72S",
      accounts: [
        "9b426f3e14647cab4c2675ba7519c32d4e44e548de9ab6f6cc50258e36459ce6",
      ],
    },
  },
};
