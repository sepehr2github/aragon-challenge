import abi from "../abi.json";
import {useDispatch} from 'react-redux';
import {
    SetTokenBalance,
    SetTotalSupply
}from '../Redux/actions.js';
let contractAddress = "0xff10E56d8C3c1567E0c80677e26EC687B4f1D8D0";
let provider = null;

if(typeof window.ethereum !== 'undefined') {
    // Ethereum user detected. You can now use the provider.
    provider = window['ethereum']
    console.log('metamask found');
}


let ethersProvider = new window.ethers.providers.Web3Provider(provider);
const signer = (new window.ethers.providers.Web3Provider(window.ethereum)).getSigner()
let contract = new window.ethers.Contract(contractAddress, abi.result, signer);

export function mint(value){
    // if(typeof window.ethereum !== 'undefined') {
    //     // Ethereum user detected. You can now use the provider.
    //     provider = window['ethereum']
    //     console.log('metamask found');
    // }
      provider.enable()
      .then(function (accounts) {
        // let ethersProvider = new window.ethers.providers.Web3Provider(provider);
        // const signer = (new window.ethers.providers.Web3Provider(window.ethereum)).getSigner()
        // let contract = new window.ethers.Contract(contractAddress, abi.result, signer);
        let transaction = contract.mint(value);
    })
    
}

export function transaction(value){
    // if(typeof window.ethereum !== 'undefined') {
    //     // Ethereum user detected. You can now use the provider.
    //     provider = window['ethereum']
    //     console.log('metamask found');
    // }
      provider.enable()
      .then(function (accounts) {
        // let ethersProvider = new window.ethers.providers.Web3Provider(provider);
        // const signer = (new window.ethers.providers.Web3Provider(window.ethereum)).getSigner()
        // let contract = new window.ethers.Contract(contractAddress, abi.result, signer);
        let transaction = contract.mint(value);
    })   
}

export function GetBalance(value){
    const dispatch = useDispatch()
    // if(typeof window.ethereum !== 'undefined') {
    //     // Ethereum user detected. You can now use the provider.
    //     provider = window['ethereum']
    //     console.log('metamask found');
    // }
      provider.enable()
      .then((accounts) => {
        // let ethersProvider = new window.ethers.providers.Web3Provider(provider);
        // const signer = (new window.ethers.providers.Web3Provider(window.ethereum)).getSigner()
        // let contract = new window.ethers.Contract(contractAddress, abi.result, signer);
        contract.balanceOf(accounts[0]).then(function(value){
            dispatch(SetTokenBalance(parseInt(value, 10)))
            console.log('Value',parseInt(value, 10),value,accounts[0]);
        });
    })
    
}

export function GetSupply(value){
    const dispatch = useDispatch()
    // if(typeof window.ethereum !== 'undefined') {
    //     // Ethereum user detected. You can now use the provider.
    //     provider = window['ethereum']
    //     console.log('metamask found');
    // }
      provider.enable()
      .then((accounts) => {
        contract.totalSupply().then(function(value){
            dispatch(SetTotalSupply(parseInt(value, 10)))
            console.log('Value',parseInt(value, 10),value,accounts[0]);
        });
    })
    
}

