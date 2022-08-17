const { run } = require("hardhat")

/**
 * @syntax run(config) is equivalent to `yarn hardhat verify: verify + positional arguments`
 * @param {*} contractAddress: the address of the contract to verify
 * @param {*} args: constructor parameters if any
 */
const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify: verify", {
            address: contractAddress,
            constructorArgsParams: args
        })
    } catch (error) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.error(e.message)
        }
    }
}

// export verify function as a module for use in other files
module.exports = { verify }
