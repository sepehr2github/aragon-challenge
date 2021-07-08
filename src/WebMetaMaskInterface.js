import React, { useState, useEffect } from 'react';
import abi from "./abi.json";
// import { ethers }  from 'ethers';
import Web3 from 'web3'

const MetaMaskInterface = () => {
  let contractAddress = "0xA8fb9802fD8377FF120c6544b8DdE4a6f2EAc5EE";
  let provider = null;

  useEffect(() => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
            var accounts= await web3.eth.getAccounts();
            var option={from: accounts[0] };
            var myContract = new web3.eth.Contract(abi,contractAddress);
            myContract.methods.RegisterInstructor('11','Ali')
            .send(option,function(error,result){
                if (! error)
                    console.log(result);
                else
                    console.log(error);
            });
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  });

  return (
    <p>hi</p>
  )
};

export default MetaMaskInterface;