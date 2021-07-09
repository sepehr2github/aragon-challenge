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

contract.on("Transfer", (from, to, amount, event) => {
    console.log(`${ from } sent ${ (amount) } to ${ to}`);
    let logs = JSON.parse(localStorage.getItem("Logs"))
    if(logs){
        logs.push(`${ from } sent ${ (amount) } to ${ to}`)
    }
    else{
        logs = [`${ from } sent ${ (amount) } to ${ to}`]
    }
    localStorage.setItem("Logs", JSON.stringify(logs)); 
    // The event object contains the verbatim log data, the
    // EventFragment and functions to fetch the block,
    // transaction and receipt and event functions
});

export function GetMint(event,value){
    event.preventDefault()
    if(typeof window.ethereum !== 'undefined') {
        // Ethereum user detected. You can now use the provider.
        provider = window['ethereum']
        console.log('metamask found');
    }
      provider.enable()
      .then(function (accounts) {
          console.log('see value',value)
        // let ethersProvider = new window.ethers.providers.Web3Provider(provider);
        // const signer = (new window.ethers.providers.Web3Provider(window.ethereum)).getSigner()
        // let contract = new window.ethers.Contract(contractAddress, abi.result, signer);
        contract.mint(parseInt(value.value));
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

