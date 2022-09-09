const { smartDeployer } = require("./smart-deployer")

async function main(name, args) {
    const contractAddress = await smartDeployer(name, args)
    console.log(contractAddress)
}

main("USDT", ["Tether USD", "USDT", 6, "1000000000000000"])
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
