const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const RestakingFarm = artifacts.require("RestakingFarm");
// const PurseTokenUpgradable = artifacts.require("PurseTokenUpgradable");
// const PurseTokenUpgradableV2 = artifacts.require("PurseTokenUpgradableV2");

function tokens(n) {
  return web3.utils.toWei(n, 'ether');
}

module.exports = async function (deployer, network, accounts) {

  // const purseTokenUpgradable = await deployProxy(PurseTokenUpgradable,["0x1323e0de5c81f5429e3be9d23ab46b1612c10a43", "0xb59c7c1e2ec8eb460d12093ad1f21d7f7e8e2fef", 10, 5, 5],{deployer, kind: 'uups' });
  // const purseTokenUpgradableV2 = await upgradeProxy(purseTokenUpgradable.address, PurseTokenUpgradableV2, { deployer });
  const restakingFarm = await deployProxy(RestakingFarm, ["0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C", tokens("1000000000")], { deployer, kind: 'uups' })
  console.log(restakingFarm.address)

  await restakingFarm.add("0x081F4B87F223621B4B31cB7A727BB583586eAD98", tokens("1"), 1, 200)

  // await purseTokenUpgradable.addAdmin(restakingFarm.address)
  // await purseTokenUpgradable.setWhitelistedFrom(restakingFarm.address)

  // Pancake LP token Pair factory: https://testnet.bscscan.com/address/0xd9a601f3a434008b921f21185b814b55534eb243#readContract
};
