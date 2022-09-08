const { ethers, network } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")
// You can run this script in the shell with:
// $yarn hardhat deploy --tags all/mocks

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    // Assuming that you need USDTAddress
    let usdtAddress
    if (developmentChains.includes(network.name)) {
        log("Local network detected!")

        log("Deploying USDT......")
        await deploy("TetherToken", {
            from: deployer,
            // args:  [initial supply, name, symbol, decimals]
            args: [100, "Tether USD", "USDT", 6],
            log: true,
            waitConfirmations: network.config.blockConfirmations || 1,
        })

        log("Deploying ERC20Sample......")
        await deploy("ERC20Sample", {
            from: deployer,
            // args: [name, symbol, decimasl, organization]
            args: ["BoolSwapToken", "BST", 18, "BoolSwap"],
            log: true,
            waitConfirmations: network.config.blockConfirmations || 1,
        })

        // log("Mocks Deployed!")
        // log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        // log(
        //     "You are deploying to a local network, you'll need a local network running to interact"
        // )
        // log(
        //     "Please run `yarn hardhat console --network localhost` to interact with the deployed smart contracts!"
        // )
        // log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        usdtAddress = await ethers.getContract("TetherToken", deployer)
    } else {
        usdtAddress = networkConfig[chainId].usdt
    }

    console.log(`USDT Address of chain ${chainId} is ${usdtAddress}`)

    // Verify contract if necessary
    // SHOULD be strictly forbidden for main environment to avoid publish your "achievements"
    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        if (process.env.VERIFICATION == "true") {
            console.log("----------Contract verifying----------")
            await verify(positionNFTManagerAddress, args)
            console.log("----------Contract verified----------")
        } else {
            console.log("----------Contract verification skipped----------")
        }
    }
}
module.exports.tags = ["all", "mocks"]
