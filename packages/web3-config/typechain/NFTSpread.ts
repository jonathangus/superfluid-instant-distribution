/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface NFTSpreadInterface extends utils.Interface {
  contractName: "NFTSpread";
  functions: {
    "createDropIndex(uint32)": FunctionFragment;
    "distribute(uint256,uint32)": FunctionFragment;
    "idaV1()": FunctionFragment;
    "indexCount()": FunctionFragment;
    "mintNft(uint32,address)": FunctionFragment;
    "spreaderToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createDropIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "idaV1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "indexCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintNft",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "spreaderToken",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createDropIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "idaV1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "indexCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintNft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "spreaderToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface NFTSpread extends BaseContract {
  contractName: "NFTSpread";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTSpreadInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createDropIndex(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createDropIndex(uint32)"(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distribute(
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "distribute(uint256,uint32)"(
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    idaV1(
      overrides?: CallOverrides
    ): Promise<[string, string] & { host: string; ida: string }>;

    "idaV1()"(
      overrides?: CallOverrides
    ): Promise<[string, string] & { host: string; ida: string }>;

    indexCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "indexCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    mintNft(
      index: BigNumberish,
      subscriber: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "mintNft(uint32,address)"(
      index: BigNumberish,
      subscriber: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    spreaderToken(overrides?: CallOverrides): Promise<[string]>;

    "spreaderToken()"(overrides?: CallOverrides): Promise<[string]>;
  };

  createDropIndex(
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createDropIndex(uint32)"(
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distribute(
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "distribute(uint256,uint32)"(
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  idaV1(
    overrides?: CallOverrides
  ): Promise<[string, string] & { host: string; ida: string }>;

  "idaV1()"(
    overrides?: CallOverrides
  ): Promise<[string, string] & { host: string; ida: string }>;

  indexCount(overrides?: CallOverrides): Promise<BigNumber>;

  "indexCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  mintNft(
    index: BigNumberish,
    subscriber: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "mintNft(uint32,address)"(
    index: BigNumberish,
    subscriber: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  spreaderToken(overrides?: CallOverrides): Promise<string>;

  "spreaderToken()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createDropIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createDropIndex(uint32)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    distribute(
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "distribute(uint256,uint32)"(
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    idaV1(
      overrides?: CallOverrides
    ): Promise<[string, string] & { host: string; ida: string }>;

    "idaV1()"(
      overrides?: CallOverrides
    ): Promise<[string, string] & { host: string; ida: string }>;

    indexCount(overrides?: CallOverrides): Promise<BigNumber>;

    "indexCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintNft(
      index: BigNumberish,
      subscriber: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "mintNft(uint32,address)"(
      index: BigNumberish,
      subscriber: string,
      overrides?: CallOverrides
    ): Promise<void>;

    spreaderToken(overrides?: CallOverrides): Promise<string>;

    "spreaderToken()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    createDropIndex(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createDropIndex(uint32)"(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distribute(
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "distribute(uint256,uint32)"(
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    idaV1(overrides?: CallOverrides): Promise<BigNumber>;

    "idaV1()"(overrides?: CallOverrides): Promise<BigNumber>;

    indexCount(overrides?: CallOverrides): Promise<BigNumber>;

    "indexCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintNft(
      index: BigNumberish,
      subscriber: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "mintNft(uint32,address)"(
      index: BigNumberish,
      subscriber: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    spreaderToken(overrides?: CallOverrides): Promise<BigNumber>;

    "spreaderToken()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createDropIndex(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createDropIndex(uint32)"(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distribute(
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "distribute(uint256,uint32)"(
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    idaV1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "idaV1()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    indexCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "indexCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintNft(
      index: BigNumberish,
      subscriber: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "mintNft(uint32,address)"(
      index: BigNumberish,
      subscriber: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    spreaderToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "spreaderToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
