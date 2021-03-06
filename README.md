# Installation

Clone the repo with:
```
git clone https://github.com/0fatih/avalanche-hardhat-basic-quickstarter.git 
```

Install node packages:
```
npm i
// or
yarn install
```

# Usage

If you didn't change anything, you have a Greeter contract in your contracts. You can deploy it to with our deployment commands. 

But you probably want to deploy your contract. For this, go to `contracts` and write your contract. After that, rename your contract in `scripts/deploy.js`. Don't forget to change your constructor paramaters.

If you'll use fuji or mainnet, don't forget to add your private key to accounts list in `hardhat.config.js`. For example if you wan't to deploy your contract to fuji, your fuji network configs should be like:

```
fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: ["0x56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027"]
    },
```

Our deployment commands:

For avash
```
npx hardhat run scripts/deploy.js --network local
```
For fuji network
```
npx hardhat run scripts/deploy.js --network fuji
```
For main network
```
npx hardhat run scripts/deploy.js --network mainnet
```

# More

This repo not for [hardhat](https://hardhat.org/) tutorial. You can learn more about [here](https://hardhat.org/getting-started/).

But I wanted to share something for beginners at least enough to be able to run their own contracts.

You can compile your contracts with
```
npx hardhat compile
```
If you have mistakes, this commands will show them to you.

You can also test your contracts with
```
npx hardhat test
```
It will run test scripts in `scripts`.
