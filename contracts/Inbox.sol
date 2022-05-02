// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// contract code will go here

// contract Inbox {
//     string public message;

//     function Inbox(string initialMessage) public {
//         message = initialMessage;
//     }

//     function setMessage(string newMessage) public {
//         message = newMessage;
//     }
// }

contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}