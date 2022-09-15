require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("dotenv").config()
require("./utils/extra-tasks")
const { constants } = require("./helper-hardhat-config")

// Input the private key of your deployer here
let PRIVATE_KEY_DEPLOYER

const ETHEREUM_MAINNET_RPC_URl =
    process.env.ETHEREUM_MAINNET_RPC_URL ||
    "https://eth-mainnet.g.alchemy.com/v2/your-api-key"

const ETHEREUM_GOERLI_RPC_URL =
    process.env.ETHEREUM_GOERLI_RPC_URL ||
    "https://eth-goerli.g.alchemy.com/v2/your-api-key"

const POLYGON_MAINNET_RPC_URL =
    process.env.POLYGON_MAINNET_RPC_URL ||
    "https://polygon-mainnet.g.alchemy.com/v2/your-api-key"

const POLYGON_MUMBAI_RPC_URL =
    process.env.POLYGON_MUMBAI_RPC_URL ||
    "https://polygon-mumbai.g.alchemy.com/v2/your-api-key"

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

const PRIVATE_KEY_TESTING_DEPLOYER =
    process.env.PRIVATE_KEY_TESTING_DEPLOYER || constants.NULL_BYTES32
const PRIVATE_KEY_TESTING_RECEIVER =
    process.env.PRIVATE_KEY_TESTING_RECEIVER || constants.NULL_BYTES32
const PRIVATE_KEY_TESTING_USER =
    process.env.PRIVATE_KEY_TESTING_USER || constants.NULL_BYTES32

const REPORT_GAS = process.env.REPORT_GAS || false

const DEPLOYER = PRIVATE_KEY_DEPLOYER || constants.NULL_BYTES32

module.exports = {
    // Mutiple solidity versions are supported (newer versions first)
    solidity: {
        compilers: [
            { version: "0.8.14" },
            { version: "0.7.6" },
            { version: "0.6.6" },
            { version: "0.4.18" }, // For deploying USDT
        ],
    },

    defaultNetwork: "hardhat", // You can modifiy this to use a different network as default

    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },

    networks: {
        mainnet: {
            url: ETHEREUM_MAINNET_RPC_URl,
            // accounts: [DEPLOYER],
            chainId: 1,
            blockConfirmations: 6,
        },
        goerli: {
            url: ETHEREUM_GOERLI_RPC_URL,
            accounts: [
                PRIVATE_KEY_TESTING_DEPLOYER,
                PRIVATE_KEY_TESTING_RECEIVER,
                PRIVATE_KEY_TESTING_USER,
            ],
            chainId: 5,
            blockConfirmations: 6,
        },
        polygon: {
            url: POLYGON_MAINNET_RPC_URL,
            // accounts: [DEPLOYER],
            chainId: 137,
            blockConfirmations: 6,
        },
        mumbai: {
            url: POLYGON_MUMBAI_RPC_URL,
            accounts: [
                PRIVATE_KEY_TESTING_DEPLOYER,
                PRIVATE_KEY_TESTING_RECEIVER,
                PRIVATE_KEY_TESTING_USER,
            ],
            chainId: 80001,
            blockConfirmations: 6,
        },
        hardhat: {},
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
            blockConfirmations: 1,
        },
    },
    gasReporter: {
        enabled: REPORT_GAS || false,
        outputFile: "./reports/gas-report.txt",
        noColors: true,
        currency: "USD",
        token: "ETH",
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // First position in an accounts list
            1: 0,
            5: 0,
            137: 0,
            31337: 0,
            80001: 0,
        },
        receiver: {
            default: 1,
            5: 1,
            31337: 1,
            80001: 1,
        },
        user: {
            default: 2,
            5: 2,
            31337: 2,
            80001: 2,
        },
    },
    mocha: {
        timeout: 100000000,
    },
}
