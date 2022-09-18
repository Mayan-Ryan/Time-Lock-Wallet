const Token = artifacts.require("Token");
const TimeLockWalletFactory = artifacts.require("TimeLockWalletFactory");
const TimeLockWallet = artifacts.require("TimeLockWallet");

module.exports = function (deployer) {
  deployer.deploy(Token);
  deployer
    .deploy(TimeLockWallet)
    .then((timeLockWallet) =>
      deployer.deploy(TimeLockWalletFactory, timeLockWallet.address)
    );
};
