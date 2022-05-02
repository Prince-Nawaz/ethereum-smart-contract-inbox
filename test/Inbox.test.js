// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());
const { abi, evm } = require('../compile');

const INITIAL_STRING = 'Hi there!';
let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of accounts
  accounts = await web3.eth.getAccounts();
  // Use one of the accounts to deploy a contract
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [INITIAL_STRING] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('Deploys a contract', () => {
    // console.log(accounts, interface, bytecode, inbox);
    // console.log(inbox);
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING);
  });

  it('can change the message', async () => {
    const hash = await inbox.methods
      .setMessage('bye')
      .send({ from: accounts[0], gas: '1000000' });
    console.log(hash.transactionHash);
    const updatedMessage = await inbox.methods.message().call();
    assert.equal(updatedMessage, 'bye');
  });
});
