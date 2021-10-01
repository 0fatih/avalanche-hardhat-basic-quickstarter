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
