// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BitcoinToken is ERC20 {
    address public owner;

    constructor(uint256 initialSupply) ERC20("Bitcoin", "BTC") {
        owner = msg.sender;
        _mint(msg.sender, initialSupply);
    }

    function transferOwnership(address newOwner) external {
        require(msg.sender == owner, "only owner");
        owner = newOwner;
    }

    function burn(address _owner, uint256 amount) external {
        require(msg.sender == owner, "only admin");
        _burn(_owner, amount);
    }
}
