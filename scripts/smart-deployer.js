const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { network } = require("hardhat")
const { verify } = require("../utils/verify")
/**
 * @description a general js file to deploy contracts on EVM-compatible networks
 * @param {*} contractName - the name of the contract stored under the `contracts` folder
 * @param {*} constructorArgs - any arguments that should be passed to the contracts' constructor, format in []
 * @dev the general process of deploying a contract is as follows:
 *         - define a provider (e.g. ethers.providers.JsonRpcProvider) to connect to a full node of the EVM network
 *         - specify the address of the deployer account (e.g. ethers.Wallet)
 *         - deploy the contract (e.g. deploy(contractName, { from: deployer, args: constructorArgs }))
 *         - and override any necessary parameters in defining a "transaction" object
 */

const smartDeployer = async (contractName, constructorArgs) => {
    console.log(`Deploying ${contractName} in progress...`)
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    // const chainId = network.config.chainId

    const targetContract = await deploy(contractName, {
        from: deployer,
        args: constructorArgs,
        log: true,
        waitConfirmations: 1
    })
    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        // await verify(targetContract.address, args)
        log("The verification is forbidden now.")
    }
    log(
        "--------------------------------------------------------------------------------"
    )
    return targetContract.address
}

module.exports = { smartDeployer }
