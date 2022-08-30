import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'NFTSpread';
const host = '0x22ff293e14F1EC3A09B137e9e06084AFd63adDF9';
const fDAIx = '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const deployment = await deploy(name, {
    from: deployer,
    args: [host, fDAIx],
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

export default func;

func.tags = [name];
