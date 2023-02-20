// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import './ERC721Contract.sol';

contract Factory {
    address[] public deployedContracts;

    function createERC721(string memory _name, string memory _symbol) public {
        ERC721Contract newContract = new ERC721Contract(_name, _symbol, "", msg.sender);
        deployedContracts.push(address(newContract));
    }

    function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }
}