// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExampleV8 {

    address private owner;
    uint256 private fakeSecret;
    constructor(uint256 _fakeSecrete) {
        owner = msg.sender;
        fakeSecret = _fakeSecrete;
    }

    function getOwner() external view returns (address) {
        return owner;
    }

    function getFakeSecret() external view returns (uint256) {
        return fakeSecret;
    }
}
