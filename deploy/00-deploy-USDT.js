const { network } = require("hardhat")
// You can run this script in the shell with:
// $yarn hardhat deploy --tags all/mocks

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    log("Local network detected!")

    log("Deploying USDT......")
    await deploy("TetherToken", {
        from: deployer,
        // args:  [initial supply, name, symbol, decimals]
        args: [100, "Tether USD", "USDT", 6],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
}
module.exports.tags = ["all", "mocks"]
