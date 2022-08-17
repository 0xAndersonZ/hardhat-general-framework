const { smartDeployer } = require("./smart-deployer")

async function main(name, args) {
    const contractAddress = await smartDeployer(name, args)
    console.log(contractAddress)
}

main("ExampleV8", [129])
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
