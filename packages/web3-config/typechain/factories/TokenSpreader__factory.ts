/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenSpreader, TokenSpreaderInterface } from "../TokenSpreader";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISuperfluid",
        name: "_host",
        type: "address",
      },
      {
        internalType: "contract ISuperToken",
        name: "_spreaderToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
    ],
    name: "createDropIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "idaV1",
    outputs: [
      {
        internalType: "contract ISuperfluid",
        name: "host",
        type: "address",
      },
      {
        internalType: "contract IInstantDistributionAgreementV1",
        name: "ida",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "spreaderToken",
    outputs: [
      {
        internalType: "contract ISuperToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000b9038038062000b908339818101604052810190620000379190620002b4565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060405180604001604052808373ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1663b6d200de7f8aedc3b5d4bf031e11a7e2940f7251c005698405d58e02e1c247fed3b1b3a6746040518263ffffffff1660e01b8152600401620000f9919062000316565b602060405180830381865afa15801562000117573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013d919062000378565b73ffffffffffffffffffffffffffffffffffffffff16815250600160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050505050620003aa565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022382620001f6565b9050919050565b6000620002378262000216565b9050919050565b62000249816200022a565b81146200025557600080fd5b50565b60008151905062000269816200023e565b92915050565b60006200027c8262000216565b9050919050565b6200028e816200026f565b81146200029a57600080fd5b50565b600081519050620002ae8162000283565b92915050565b60008060408385031215620002ce57620002cd620001f1565b5b6000620002de8582860162000258565b9250506020620002f1858286016200029d565b9150509250929050565b6000819050919050565b6200031081620002fb565b82525050565b60006020820190506200032d600083018462000305565b92915050565b6000620003408262000216565b9050919050565b620003528162000333565b81146200035e57600080fd5b50565b600081519050620003728162000347565b92915050565b600060208284031215620003915762000390620001f1565b5b6000620003a18482850162000361565b91505092915050565b6107d680620003ba6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631cc8ca991461004657806325f3f27514610065578063844a5f5f14610081575b600080fd5b61004e61009f565b60405161005c929190610403565b60405180910390f35b61007f600480360381019061007a919061047c565b6100f1565b005b61008961012a565b60405161009691906104ca565b60405180910390f35b60018060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b61012760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682600161014e9092919063ffffffff16565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101a7838383600067ffffffffffffffff81111561016f5761016e6104e5565b5b6040519080825280601f01601f1916602001820160405280156101a15781602001600182028036833780820191505090505b506101ac565b505050565b8360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166339255d5b8560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d787840a8787600067ffffffffffffffff81111561026e5761026d6104e5565b5b6040519080825280601f01601f1916602001820160405280156102a05781602001600182028036833780820191505090505b506040516024016102b3939291906105dd565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050846040518463ffffffff1660e01b81526004016103149392919061061b565b6000604051808303816000875af1158015610333573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061035c9190610757565b5050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006103a86103a361039e84610363565b610383565b610363565b9050919050565b60006103ba8261038d565b9050919050565b60006103cc826103af565b9050919050565b6103dc816103c1565b82525050565b60006103ed826103af565b9050919050565b6103fd816103e2565b82525050565b600060408201905061041860008301856103d3565b61042560208301846103f4565b9392505050565b6000604051905090565b600080fd5b600080fd5b600063ffffffff82169050919050565b61045981610440565b811461046457600080fd5b50565b60008135905061047681610450565b92915050565b60006020828403121561049257610491610436565b5b60006104a084828501610467565b91505092915050565b60006104b4826103af565b9050919050565b6104c4816104a9565b82525050565b60006020820190506104df60008301846104bb565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600061051f826103af565b9050919050565b61052f81610514565b82525050565b61053e81610440565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561057e578082015181840152602081019050610563565b8381111561058d576000848401525b50505050565b6000601f19601f8301169050919050565b60006105af82610544565b6105b9818561054f565b93506105c9818560208601610560565b6105d281610593565b840191505092915050565b60006060820190506105f26000830186610526565b6105ff6020830185610535565b818103604083015261061181846105a4565b9050949350505050565b600060608201905061063060008301866103f4565b818103602083015261064281856105a4565b9050818103604083015261065681846105a4565b9050949350505050565b600080fd5b600080fd5b61067382610593565b810181811067ffffffffffffffff82111715610692576106916104e5565b5b80604052505050565b60006106a561042c565b90506106b1828261066a565b919050565b600067ffffffffffffffff8211156106d1576106d06104e5565b5b6106da82610593565b9050602081019050919050565b60006106fa6106f5846106b6565b61069b565b90508281526020810184848401111561071657610715610665565b5b610721848285610560565b509392505050565b600082601f83011261073e5761073d610660565b5b815161074e8482602086016106e7565b91505092915050565b60006020828403121561076d5761076c610436565b5b600082015167ffffffffffffffff81111561078b5761078a61043b565b5b61079784828501610729565b9150509291505056fea2646970667358221220464894e83933beb99d800ffb6ff2fc0714312501bec3dfb5949d970a106c00d364736f6c634300080e0033";

type TokenSpreaderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenSpreaderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenSpreader__factory extends ContractFactory {
  constructor(...args: TokenSpreaderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TokenSpreader";
  }

  deploy(
    _host: string,
    _spreaderToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenSpreader> {
    return super.deploy(
      _host,
      _spreaderToken,
      overrides || {}
    ) as Promise<TokenSpreader>;
  }
  getDeployTransaction(
    _host: string,
    _spreaderToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_host, _spreaderToken, overrides || {});
  }
  attach(address: string): TokenSpreader {
    return super.attach(address) as TokenSpreader;
  }
  connect(signer: Signer): TokenSpreader__factory {
    return super.connect(signer) as TokenSpreader__factory;
  }
  static readonly contractName: "TokenSpreader";
  public readonly contractName: "TokenSpreader";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenSpreaderInterface {
    return new utils.Interface(_abi) as TokenSpreaderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenSpreader {
    return new Contract(address, _abi, signerOrProvider) as TokenSpreader;
  }
}
