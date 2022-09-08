<!-- GETTING STARTED -->
# Overview

This is a modified development framework for Web3 smart contract engineers. The framework is built on the initial `JavaScript project` provided by [Hardhat](https://hardhat.org/).

### Dependencies
A list of dependencies that the author used to develop this framework.
* npm
  ```sh
  npm@8.16.0
  ```
* yarn
  ```sh
  yarn@1.22.15
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation
* Clone this repository 
  ```sh
  git clone https://github.com/CrazyFinger29/hardhat-general-framework.git
  ```
* Add dependencies
  ```sh
  yarn
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Setting up .env parameters

_Below is an example of how you can configure the necessary
`.env` parameters._

1. Get a free Ethereum Alchemy API Key at [Alchemy](https://dashboard.alchemy.com/)

2. Enter your API in `.env`
   
   ```txt
   ETHEREUM_MAINNET_RPC_URl = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Usage
_Below are examples of using powerful `Hardhat` functionalities in the shell where examples are based on the default scripts in this framework._

You can always check all the valid `hardhat` commands(tasks) by

```sh
yarn hardhat 
```

0. Run any `hardhat` commands in a specific network (the default network is" hardhat" but you can modify it in `hardhat.config.js`).
   
   ```sh
   yarn hardhat <your command> --network <your network>
   ```

1. Compile all the smart contracts in `solidity`
   
   ```sh
   yarn hardhat compile
   ```

2. Quick deployment enabled by `@hardhat-deploy`
   
   ```sh
   yarn hardhat deploy 
   ```

   or running a subset of deploying scripts

   ```sh
   yarn hardhat deploy --tags <your tag>
   ```

3. Testing
   
    Run all the tests
  
    ```sh
    yarn hardhat test
    ```

    Run a specific subset of tests
  
    ```sh
    yarn hardhat test --grep "<your keyword>"
    ```
- A `gas-report.txt` file will automatically generated under `reports` folder given that the environment parameter `REPORT_GAS` in `.env` is set as `true`. 
- The gas report covered all the contract functions which have been executed in testing sripts.
- When `COINMARKETCAP_API_KEY` is configed, `gas-report.txt` will automatically convert transcaction fees into a configured fiat value such as 'USD'.

4. Check contracts coverage
   ```sh
   yarn hardhat coverage
   ```
    and check coverage results on your localhost server.

5. Run a script on the `Goerli` testnet
   ```sh
   yarn hardhat run scripts/<your script>.js --network goerli
   ```

6. Clean caches
   ```sh
   yarn hardhat clean
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Yusong ZHANG - [@SafeMatrix/Yusong Zhang](https://twitter.com/Safematrix_io) - azblockchain29@gmail.com

Project Link: [https://github.com/CrazyFinger29/hardhat-general-framework](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>