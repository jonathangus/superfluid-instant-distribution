import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { BigNumber, Contract } from 'ethers';
import { ethers, web3 } from 'hardhat';
import { Counter, NFTSpread } from 'web3-config';
// @ts-ignore
import deployFramework from '@superfluid-finance/ethereum-contracts/scripts/deploy-framework';
// @ts-ignore
import deployTestToken from '@superfluid-finance/ethereum-contracts/scripts/deploy-test-token';
// @ts-ignore
import deploySuperToken from '@superfluid-finance/ethereum-contracts/scripts/deploy-super-token';
import {
  Framework,
  SuperToken,
  WrapperSuperToken,
} from '@superfluid-finance/sdk-core';

const errorHandler = (err: Error) => {
  if (err) {
    throw err;
  }
};

// This is only used in the set up, and these are the only functions called in this script.
const daiABI = [
  'function mint(address to,uint256 amount) returns (bool)',
  'function approve(address,uint256) returns (bool)',
];

describe('NFTSpread', function () {
  let counter: Counter;

  const provider = web3;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];
  let sf: Framework;
  let contractsFramework;
  let daix: WrapperSuperToken;
  let dai: Contract;
  let nftSpread: NFTSpread;

  before(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    //deploy the framework
    await deployFramework(errorHandler, {
      web3,
      from: owner.address,
    });

    // deploy fake token

    //deploy a fake erc20 token
    await deployTestToken(errorHandler, [':', 'fDAI'], {
      web3,
      from: owner.address,
    });

    //deploy a fake erc20 wrapper super token around the fDAI token
    await deploySuperToken(errorHandler, [':', 'fDAI'], {
      web3,
      from: owner.address,
    });

    sf = await Framework.create({
      // networkName: 'custom',
      provider,
      // dataMode: 'WEB3_ONLY',
      chainId: 1337,
      resolverAddress: process.env.RESOLVER_ADDRESS, //this is how you get the resolver address
      protocolReleaseVersion: 'test',
    });
    //use the framework to get the super toen
    daix = (await sf.loadSuperToken('fDAIx')) as any as WrapperSuperToken;

    //get the contract object for the erc20 token
    let daiAddress = daix?.underlyingToken?.address;
    if (!daiAddress) {
      throw new Error('Missing daix');
    }
    dai = new ethers.Contract(daiAddress, daiABI, owner);

    // get some cash
    await dai
      .connect(owner)
      .mint(owner.address, ethers.utils.parseEther('1000'));

    await dai
      .connect(owner)
      .approve(daix.address, ethers.utils.parseEther('1000'));

    const daixUpgradeOperation = await daix.upgrade({
      amount: ethers.utils.parseEther('1000').toString(),
    });

    await daixUpgradeOperation.exec(owner);

    const NFTSpreadContract = await ethers.getContractFactory('NFTSpread');
    nftSpread = (await NFTSpreadContract.deploy(
      sf.settings.config.hostAddress,
      daix.address
    )) as NFTSpread;
    await nftSpread.deployed();
  });

  describe('flow', () => {
    it('it should create flow', async () => {
      await nftSpread.createDropIndex(0);

      const approveSubscriptionOperation = await sf.idaV1
        .approveSubscription({
          indexId: '0',
          superToken: daix.address,
          publisher: nftSpread.address,
        })
        .exec(owner);

      await nftSpread.connect(addr1).mintNft(0, addr1.address);
      await nftSpread.connect(addr1).mintNft(0, addr1.address);

      await nftSpread.connect(addr2).mintNft(0, addr2.address);
      await daix
        .approve({
          receiver: nftSpread.address,
          amount: ethers.utils.parseEther('1000000').toString(),
        })
        .exec(owner);

      await nftSpread
        .connect(owner)
        .distribute(ethers.utils.parseEther('1'), 0);
    });
  });

  describe('deployment', async () => {
    it('should deploy', async () => {
      expect(0).to.eq(0);
    });
  });
});
