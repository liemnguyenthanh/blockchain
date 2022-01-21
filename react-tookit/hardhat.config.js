require("@nomiclabs/hardhat-waffle");
require("hardhat-typechain");
require("@nomiclabs/hardhat-web3");
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const ALCHEMY_API_KEY = '73a153522237447bb0447566e0ca6286';
const ROPSTEN_PRIVATE_KEY = '538b185e7545503fd5b2166c2181dec6cf16a8ee3d57cf254ca5c73fea4e1cbf';
module.exports = {
  solidity: "0.8.4",
  paths:{
    artifacts :'./src',
  },
  networks :{
    hardhat : {
      chainId : 1337
    },
    ropsten : {
      url : `https://ropsten.infura.io/v3/${ALCHEMY_API_KEY}`,
      accounts :[`${ROPSTEN_PRIVATE_KEY}`],
      gasPrice: 10000000000 
    }
  }
};
