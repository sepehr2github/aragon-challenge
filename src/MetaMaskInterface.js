import React, { useState, useEffect } from 'react';
import abi from "./abi.json";

const MetaMaskInterface = () => {
    let contractAddress = "0xff10E56d8C3c1567E0c80677e26EC687B4f1D8D0";
    let provider = null;
  
    useEffect(() => {
      if(typeof window.ethereum !== 'undefined') {
        // Ethereum user detected. You can now use the provider.
        provider = window['ethereum']
        console.log('metamask found');
      }
      provider.enable()
      .then(function (accounts) {
        let ethersProvider = new window.ethers.providers.Web3Provider(provider);
        const signer = (new window.ethers.providers.Web3Provider(window.ethereum)).getSigner()
        let contract = new window.ethers.Contract(contractAddress, abi.result, signer);
        contract.balanceOf("0x394d777787A4602750CA00EFdaC4d12B67F230E1").then(function(name){
            console.log('Value',name)
        });

        setInterval(()=>{
            contract.on("Transfer", (from, to, amount, event) => {
                console.log(`${ from } sent ${ (amount) } to ${ to}`);
                // The event object contains the verbatim log data, the
                // EventFragment and functions to fetch the block,
                // transaction and receipt and event functions
            });
            let myAddress = "0xb1DC5D0881EEA99A61D28be66Fc491AaE2A13D6a";
            let filter = contract.filters.Transfer(null, myAddress)

            // Receive an event when that filter occurs
            contract.on(filter, (from, to, amount, event) => {
                // The to will always be "address"
                console.log(`I got ${ (amount) } from ${ from }.`);
            });
        },1000)
        // contract.on("Transfer", (from, to, amount, event) => {
            // console.log(`${ from } sent ${ (amount) } to ${ to}`);
            // The event object contains the verbatim log data, the
            // EventFragment and functions to fetch the block,
            // transaction and receipt and event functions
        // });
        let value = window.ethers.BigNumber.from(Math.pow(10,9)).mul(window.ethers.BigNumber.from(Math.pow(10,9)));
        let transaction = contract.mint(value);
        // contract.on().then(function(list){
            // console.log('list',list);
        // })
      })
      .catch(function (error) {
        // Handle error. Likely the user rejected the login
        console.error(error)
      })
    });
  
    return (
      <p>hi</p>
    )
  };
  
  export default MetaMaskInterface;