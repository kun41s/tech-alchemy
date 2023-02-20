// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ERC721Contract is ERC721 {
    string public tokenURI;

    uint256 private id;

    address public owner;

    mapping(address => bool) public minter;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _tokenURI,
        address _owner
    ) ERC721(_name, _symbol) {
        tokenURI = _tokenURI;
        owner = _owner;
    }

    function mint() external returns (bool) {
        require(minter[msg.sender] || msg.sender == owner, "only minter");
        _safeMint(msg.sender, id);
        id++;
        return true;
    }

    function setTokenURI(string memory _newTokenURI) public {
        // require(msg.sender == ownerOf(1), "Only the owner of the token can update the token URI");
        tokenURI = _newTokenURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return tokenURI;
    }

    function changeOwner(address newOwner) external returns (bool) {
        require(msg.sender == owner, "Only owner can change ");

        owner = newOwner;

        return true;
    }

    function addMinter(address minterAddress) public returns (bool) {
        require(msg.sender == owner, "only owner can add minter");
        require(!minter[minterAddress], "already a minter");

        minter[minterAddress] = true;

        return true;
    }
}
