// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import {ISuperfluid, ISuperToken, SuperAppBase, SuperAppDefinitions} from '@superfluid-finance/ethereum-contracts/contracts/apps/SuperAppBase.sol';
import {IInstantDistributionAgreementV1} from '@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/IInstantDistributionAgreementV1.sol';

import {IDAv1Library} from '@superfluid-finance/ethereum-contracts/contracts/apps/IDAv1Library.sol';

import {IERC20} from '@openzeppelin/contracts/token/ERC20/ERC20.sol';

import 'hardhat/console.sol';

contract NFTSpread {
    /// @notice Super token to be distributed.
    ISuperToken public spreaderToken;

    /// @notice IDA Library
    using IDAv1Library for IDAv1Library.InitData;
    IDAv1Library.InitData public idaV1;

    uint256 public indexCount;

    constructor(ISuperfluid _host, ISuperToken _spreaderToken) {
        spreaderToken = _spreaderToken;

        // IDA Library Initialize.
        idaV1 = IDAv1Library.InitData(
            _host,
            IInstantDistributionAgreementV1(
                address(
                    _host.getAgreementClass(
                        keccak256(
                            'org.superfluid-finance.agreements.InstantDistributionAgreement.v1'
                        )
                    )
                )
            )
        );
    }

    function mintNft(uint32 index, address subscriber) external {
        // Get current units subscriber holds
        (, , uint256 currentUnitsHeld, ) = idaV1.getSubscription(
            spreaderToken,
            address(this),
            index,
            subscriber
        );

        // Update to current amount + 1
        idaV1.updateSubscriptionUnits(
            spreaderToken,
            index,
            subscriber,
            uint128(currentUnitsHeld + 1)
        );
    }

    function createDropIndex(uint32 index) external {
        if (indexCount == 0) {
            require(index == 0, 'wrong index');
        } else {
            require(index == indexCount + 1, 'wrong index');
        }
        // Creates the IDA Index through which tokens will be distributed
        idaV1.createIndex(spreaderToken, index);
        indexCount++;
    }

    /// @notice Takes the entire balance of the designated spreaderToken in the contract and distributes it out to unit holders w/ IDA
    function distribute(uint256 amount, uint32 index) public {
        require(index <= indexCount, 'to high index');
        spreaderToken.transferFrom(msg.sender, address(this), amount);

        (uint256 actualDistributionAmount, ) = idaV1.ida.calculateDistribution(
            spreaderToken,
            address(this),
            index,
            amount
        );

        idaV1.distribute(spreaderToken, index, actualDistributionAmount);
    }
}
