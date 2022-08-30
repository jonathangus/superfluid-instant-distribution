/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTSpread, NFTSpreadInterface } from "../NFTSpread";

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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
    ],
    name: "distribute",
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
    name: "indexCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
    ],
    name: "mintNft",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b5060405162001a1c38038062001a1c8339818101604052810190620000379190620002b4565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060405180604001604052808373ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1663b6d200de7f8aedc3b5d4bf031e11a7e2940f7251c005698405d58e02e1c247fed3b1b3a6746040518263ffffffff1660e01b8152600401620000f9919062000316565b602060405180830381865afa15801562000117573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013d919062000378565b73ffffffffffffffffffffffffffffffffffffffff16815250600160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050505050620003aa565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022382620001f6565b9050919050565b6000620002378262000216565b9050919050565b62000249816200022a565b81146200025557600080fd5b50565b60008151905062000269816200023e565b92915050565b60006200027c8262000216565b9050919050565b6200028e816200026f565b81146200029a57600080fd5b50565b600081519050620002ae8162000283565b92915050565b60008060408385031215620002ce57620002cd620001f1565b5b6000620002de8582860162000258565b9250506020620002f1858286016200029d565b9150509250929050565b6000819050919050565b6200031081620002fb565b82525050565b60006020820190506200032d600083018462000305565b92915050565b6000620003408262000216565b9050919050565b620003528162000333565b81146200035e57600080fd5b50565b600081519050620003728162000347565b92915050565b600060208284031215620003915762000390620001f1565b5b6000620003a18482850162000361565b91505092915050565b61166280620003ba6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631253d6cf1461006757806319a0bc4a146100835780631cc8ca99146100a157806325f3f275146100c0578063844a5f5f146100dc578063be5e32e9146100fa575b600080fd5b610081600480360381019061007c9190610cb3565b610116565b005b61008b610307565b6040516100989190610d02565b60405180910390f35b6100a961030d565b6040516100b7929190610dbd565b60405180910390f35b6100da60048036038101906100d59190610de6565b61035f565b005b6100e461045f565b6040516100f19190610e34565b60405180910390f35b610114600480360381019061010f9190610e8d565b610483565b005b6003548163ffffffff161115610161576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015890610f2a565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016101be93929190610f59565b6020604051808303816000875af11580156101dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102019190610fc8565b5060006001800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663899baaec60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff163085876040518563ffffffff1660e01b81526004016102879493929190611004565b6040805180830381865afa1580156102a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c791906110a6565b50905061030260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683836001610521909392919063ffffffff16565b505050565b60035481565b60018060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b6000600354036103b75760008163ffffffff16146103b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a990611132565b60405180910390fd5b61040e565b60016003546103c69190611181565b8163ffffffff161461040d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040490611132565b60405180910390fd5b5b61044460008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260016105819092919063ffffffff16565b60036000815480929190610457906111d7565b919050555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006104bf60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1630858560016105df90949392919063ffffffff16565b506fffffffffffffffffffffffffffffffff169250505061051c60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684846001856105099190611181565b600161069d90949392919063ffffffff16565b505050565b61057b84848484600067ffffffffffffffff8111156105435761054261121f565b5b6040519080825280601f01601f1916602001820160405280156105755781602001600182028036833780820191505090505b506106ff565b50505050565b6105da838383600067ffffffffffffffff8111156105a2576105a161121f565b5b6040519080825280601f01601f1916602001820160405280156105d45781602001600182028036833780820191505090505b506108b9565b505050565b6000806000808860010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b534051898989896040518563ffffffff1660e01b8152600401610648949392919061126f565b608060405180830381865afa158015610665573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068991906112b4565b935093509350935095509550955095915050565b6106f88585858585600067ffffffffffffffff8111156106c0576106bf61121f565b5b6040519080825280601f01601f1916602001820160405280156106f25781602001600182028036833780820191505090505b50610a70565b5050505050565b8460000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166339255d5b8660010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168760010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b96731c2888888600067ffffffffffffffff8111156107c2576107c161121f565b5b6040519080825280601f01601f1916602001820160405280156107f45781602001600182028036833780820191505090505b5060405160240161080894939291906113b4565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050846040518463ffffffff1660e01b815260040161086993929190611400565b6000604051808303816000875af1158015610888573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906108b1919061153c565b505050505050565b8360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166339255d5b8560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d787840a8787600067ffffffffffffffff81111561097b5761097a61121f565b5b6040519080825280601f01601f1916602001820160405280156109ad5781602001600182028036833780820191505090505b506040516024016109c093929190611585565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050846040518463ffffffff1660e01b8152600401610a2193929190611400565b6000604051808303816000875af1158015610a40573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610a69919061153c565b5050505050565b8560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166339255d5b8760010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168860010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663232d2b5889898989600067ffffffffffffffff811115610b3457610b3361121f565b5b6040519080825280601f01601f191660200182016040528015610b665781602001600182028036833780820191505090505b50604051602401610b7b9594939291906115d2565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050846040518463ffffffff1660e01b8152600401610bdc93929190611400565b6000604051808303816000875af1158015610bfb573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610c24919061153c565b50505050505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610c5481610c41565b8114610c5f57600080fd5b50565b600081359050610c7181610c4b565b92915050565b600063ffffffff82169050919050565b610c9081610c77565b8114610c9b57600080fd5b50565b600081359050610cad81610c87565b92915050565b60008060408385031215610cca57610cc9610c37565b5b6000610cd885828601610c62565b9250506020610ce985828601610c9e565b9150509250929050565b610cfc81610c41565b82525050565b6000602082019050610d176000830184610cf3565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610d62610d5d610d5884610d1d565b610d3d565b610d1d565b9050919050565b6000610d7482610d47565b9050919050565b6000610d8682610d69565b9050919050565b610d9681610d7b565b82525050565b6000610da782610d69565b9050919050565b610db781610d9c565b82525050565b6000604082019050610dd26000830185610d8d565b610ddf6020830184610dae565b9392505050565b600060208284031215610dfc57610dfb610c37565b5b6000610e0a84828501610c9e565b91505092915050565b6000610e1e82610d69565b9050919050565b610e2e81610e13565b82525050565b6000602082019050610e496000830184610e25565b92915050565b6000610e5a82610d1d565b9050919050565b610e6a81610e4f565b8114610e7557600080fd5b50565b600081359050610e8781610e61565b92915050565b60008060408385031215610ea457610ea3610c37565b5b6000610eb285828601610c9e565b9250506020610ec385828601610e78565b9150509250929050565b600082825260208201905092915050565b7f746f206869676820696e64657800000000000000000000000000000000000000600082015250565b6000610f14600d83610ecd565b9150610f1f82610ede565b602082019050919050565b60006020820190508181036000830152610f4381610f07565b9050919050565b610f5381610e4f565b82525050565b6000606082019050610f6e6000830186610f4a565b610f7b6020830185610f4a565b610f886040830184610cf3565b949350505050565b60008115159050919050565b610fa581610f90565b8114610fb057600080fd5b50565b600081519050610fc281610f9c565b92915050565b600060208284031215610fde57610fdd610c37565b5b6000610fec84828501610fb3565b91505092915050565b610ffe81610c77565b82525050565b60006080820190506110196000830187610e25565b6110266020830186610f4a565b6110336040830185610ff5565b6110406060830184610cf3565b95945050505050565b60008151905061105881610c4b565b92915050565b60006fffffffffffffffffffffffffffffffff82169050919050565b6110838161105e565b811461108e57600080fd5b50565b6000815190506110a08161107a565b92915050565b600080604083850312156110bd576110bc610c37565b5b60006110cb85828601611049565b92505060206110dc85828601611091565b9150509250929050565b7f77726f6e6720696e646578000000000000000000000000000000000000000000600082015250565b600061111c600b83610ecd565b9150611127826110e6565b602082019050919050565b6000602082019050818103600083015261114b8161110f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061118c82610c41565b915061119783610c41565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156111cc576111cb611152565b5b828201905092915050565b60006111e282610c41565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361121457611213611152565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600061125982610d69565b9050919050565b6112698161124e565b82525050565b60006080820190506112846000830187611260565b6112916020830186610f4a565b61129e6040830185610ff5565b6112ab6060830184610f4a565b95945050505050565b600080600080608085870312156112ce576112cd610c37565b5b60006112dc87828801610fb3565b94505060206112ed87828801610fb3565b93505060406112fe87828801611091565b925050606061130f87828801611049565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b60005b8381101561135557808201518184015260208101905061133a565b83811115611364576000848401525b50505050565b6000601f19601f8301169050919050565b60006113868261131b565b6113908185611326565b93506113a0818560208601611337565b6113a98161136a565b840191505092915050565b60006080820190506113c96000830187611260565b6113d66020830186610ff5565b6113e36040830185610cf3565b81810360608301526113f5818461137b565b905095945050505050565b60006060820190506114156000830186610dae565b8181036020830152611427818561137b565b9050818103604083015261143b818461137b565b9050949350505050565b600080fd5b600080fd5b6114588261136a565b810181811067ffffffffffffffff821117156114775761147661121f565b5b80604052505050565b600061148a610c2d565b9050611496828261144f565b919050565b600067ffffffffffffffff8211156114b6576114b561121f565b5b6114bf8261136a565b9050602081019050919050565b60006114df6114da8461149b565b611480565b9050828152602081018484840111156114fb576114fa61144a565b5b611506848285611337565b509392505050565b600082601f83011261152357611522611445565b5b81516115338482602086016114cc565b91505092915050565b60006020828403121561155257611551610c37565b5b600082015167ffffffffffffffff8111156115705761156f610c3c565b5b61157c8482850161150e565b91505092915050565b600060608201905061159a6000830186611260565b6115a76020830185610ff5565b81810360408301526115b9818461137b565b9050949350505050565b6115cc8161105e565b82525050565b600060a0820190506115e76000830188611260565b6115f46020830187610ff5565b6116016040830186610f4a565b61160e60608301856115c3565b8181036080830152611620818461137b565b9050969550505050505056fea2646970667358221220faeb7e55c0e67746072b4a68c957e1766a73ee7e43adc1301f8d7559dc7544f164736f6c634300080e0033";

type NFTSpreadConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTSpreadConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTSpread__factory extends ContractFactory {
  constructor(...args: NFTSpreadConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "NFTSpread";
  }

  deploy(
    _host: string,
    _spreaderToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTSpread> {
    return super.deploy(
      _host,
      _spreaderToken,
      overrides || {}
    ) as Promise<NFTSpread>;
  }
  getDeployTransaction(
    _host: string,
    _spreaderToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_host, _spreaderToken, overrides || {});
  }
  attach(address: string): NFTSpread {
    return super.attach(address) as NFTSpread;
  }
  connect(signer: Signer): NFTSpread__factory {
    return super.connect(signer) as NFTSpread__factory;
  }
  static readonly contractName: "NFTSpread";
  public readonly contractName: "NFTSpread";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTSpreadInterface {
    return new utils.Interface(_abi) as NFTSpreadInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTSpread {
    return new Contract(address, _abi, signerOrProvider) as NFTSpread;
  }
}