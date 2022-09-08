// SPDX-License-Identifer: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "./libraries/Strings.sol";

import "./interfaces/IERC20Sample.sol";

contract ERC20Sample is IERC20Sample, ERC20 {
    using Strings for string;

    uint8 private immutable _decimals;
    string private _orgnization;

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 _decimals_,
        string memory _organization_
    ) ERC20(name_, symbol_) {
        _decimals = _decimals_;
        _orgnization = _organization_;
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }

    function organization() public view override returns (string memory) {
        return _orgnization;
    }
}
