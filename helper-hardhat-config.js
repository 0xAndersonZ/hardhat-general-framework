const networkConfig = {
    /*************************************
                Main networks
     ************************************/
    1: {
        name: "mainnet",
        ethUsdPriceFeedAddress: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419", // Chainlink price feed
        usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    },
    137: {
        name: "polygon",
        ethUsdPriceFeedAddress: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
        usdt: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    },
    /*************************************
                Testnets
     ************************************/
    5: {
        name: "goerli",
        ethUsdPriceFeedAddress: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
        usdt: "0xB4FBF2711430x509Ee0d083DdF8AC028f2a56731412edD63223B9F4FBf7B91A5ded31805e42b2208d6",
    },
    31337: {
        name: "localhost",
    },
}

const constants = {
    NULL_BYTES32:
        "0000000000000000000000000000000000000000000000000000000000000000",
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    constants,
    developmentChains,
    networkConfig,
}
