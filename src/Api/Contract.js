import abi from "../abi.json";
import {useDispatch} from 'react-redux';
import {
    SetTokenBalance,
    SetTotalSupply
}from '../Redux/actions.js';
import ToastManager from '../Utils/ToastManager'

let contractAddress = "0xff10E56d8C3c1567E0c80677e26EC687B4f1D8D0";
let provider = null;

if(typeof window.ethereum !== 'undefined') {
    // Ethereum user detected. You can now use the provider.
    provider = window['ethereum']
    console.log('metamask found');
}else{
    ToastManager('error',`Please install MetaMask!`) 
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
    ToastManager('success',`Successful Transaction (${ from } sent ${ (amount) } to ${ to})`) 
    // The event object contains the verbatim log data, the
    // EventFragment and functions to fetch the block,
    // transaction and receipt and event functions
});

export function GetMint(event,value){
    event.preventDefault()
      provider.enable()
      .then(function (accounts) {
        contract.mint(parseInt(value.value)).catch(function(error){
            ToastManager('warn',
            `Transaction Started!`) 
        });
    }).catch(function (error) {
        // Handle error. Likely the user rejected the login
        ToastManager('error',`Transaction Failed!`) 
        console.log(error)
      })
    
}

export function TransferToken(event,destination,amount){
    event.preventDefault()
    console.log('CheckVal',destination.value,amount.value)
      provider.enable()
      .then(function (accounts) {
        contract.balanceOf(accounts[0]).then(function(value){
            let myBalance = parseInt(value, 10);
            if( myBalance >  amount.value){
                contract.transfer(destination.value, amount.value).then((event)=>{
                    contract.balanceOf(destination.value).then(function(value){
                        let DestinationBalance = parseInt(value, 10);
                        ToastManager('warn',
                        `My wallet Balance Will be: ${ myBalance - amount.value},
                        ${destination.value} Balance Will be:${ DestinationBalance + amount.value}`) 
                    });
                });     
            }else{
                ToastManager('error',`Low balance!`) 
            }
        });
        }).catch(function (error) {
            // Handle error. Likely the user rejected the login
            ToastManager('error',`Transaction Failed!`) 
        })   
}

export function GetBalance(value){
    const dispatch = useDispatch()
      provider.enable()
      .then((accounts) => {
        contract.balanceOf(accounts[0]).then(function(value){
            dispatch(SetTokenBalance(parseInt(value, 10)))
            console.log('Value',parseInt(value, 10),value,accounts[0]);
        });
    }).catch(function (error) {
        // Handle error. Likely the user rejected the login
        ToastManager('error',`Transaction Failed!`) 
      })
    
}

export function GetSupply(value){
    const dispatch = useDispatch()
      provider.enable()
      .then((accounts) => {
        contract.totalSupply().then(function(value){
            dispatch(SetTotalSupply(parseInt(value, 10)))
            console.log('Value',parseInt(value, 10),value,accounts[0]);
        });
    }).catch(function (error) {
        // Handle error. Likely the user rejected the login
        ToastManager('error',`Transaction Failed!`) 
      })
    
}

