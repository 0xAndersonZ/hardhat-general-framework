const { task } = require("hardhat/config")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/hardhat-runner/docs/advanced/create-task#creating-a-task

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//     const accounts = await hre.ethers.getSigners()

//     for (const account of accounts) {
//         console.log(account.address)
//     }
// })
task("accounts")
  .setDescription("Prints the list of accounts")
  .setAction(async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
      console.log(account.address)
    }
  })

task("balance")
  .setDescription("Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async taskArgs => {
    const balance = await ethers.provider.getBalance(taskArgs.account)

    console.log(ethers.utils.formatEther(balance), "ETH")
  })

task("blocknumber")
  .setDescription("Prints the current block number")
  .setAction(async (taskArgs, hre) => {
    await hre.ethers.provider.getBlockNumber().then(blockNumber => {
      console.log("The current block number is:" + blockNumber)
    })
  })

module.exports = {}
