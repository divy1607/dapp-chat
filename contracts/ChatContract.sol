// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChatContract {
    struct Message {
        address sender;
        string content;
        uint256 timestamp;
    }

    mapping(address => Message[]) public userMessages;

    event MessageSent(address indexed sender, string content, uint256 timestamp);

    function sendMessage(string memory _content) public {
        Message memory newMessage = Message({
            sender: msg.sender,
            content: _content,
            timestamp: block.timestamp
        });

        userMessages[msg.sender].push(newMessage);
        emit MessageSent(msg.sender, _content, block.timestamp);
    }

    function getUserMessages() public view returns (Message[] memory) {
        return userMessages[msg.sender];
    }
}