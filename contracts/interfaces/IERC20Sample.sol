// SPDX-License-Identifer: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IERC20Sample is IERC20 {
    function organization() external view returns (string memory);
}
