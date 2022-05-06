// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10; // solidity version 

contract Transactions {
    uint256 transactionCount; 
    // number variable, which hold the number of our transaction 

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
    // address-> type from-> variable name

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    // it's tracture: 
    // address-> type sendar-> name of the property

    TransferStruct[] transactions; // it will store as an array

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        // this function will do some actions 
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword); // it will transfer the amount
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256){
        return transactionCount;
    }
}



