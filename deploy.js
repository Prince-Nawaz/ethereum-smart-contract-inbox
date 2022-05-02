// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('Web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
  'air pledge achieve enroll dad dwarf omit rail pilot above yellow return',
  'https://rinkeby.infura.io/v3/b3e812dcb6d3485bbced2a87ea4c11df'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const inbox = await new web3.eth.Contract(abi)
      .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
      .send({ gas: 1000000, from: accounts[0] });

    console.log('Contract deployed to ', inbox.options.address);
    provider.engine.stop();
}

deploy();

// Attempting to deploy from account 0x17376cb61D3Fe2298c9Dd87a50d342cCb2735fB4
// Contract deployed to  0x3b4bE28bA69157705A0241bF055A47cac5B39F68