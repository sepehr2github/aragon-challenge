import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import getFirebase from "./Firebase/Firebase";
import Web3 from 'web3'
// import ethers from 'ethers';
import SignUp from "./SignUp";
import MetaMaskInterface from './MetaMaskInterface'
import SignIn from "./SignIn";
import {
  GetCryptoList
}from './Api/Api.js'
// import SignOutButton from "./SignOutButton";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }

    GetCryptoList();

  //   if (window.ethereum) {
  //     let web3 = new Web3(window.ethereum);
  //     try { 
  //        window.ethereum.enable().then(function() {
  //           web3.eth.getAccounts().then(function(response){
  //             web3.eth.getBalance(response[0])
  //             .then(console.log)
  //           });
  //            // User has allowed account access to DApp...
  //        });
  //     } catch(e) {
  //        // User has denied account access to DApp...
  //     }
  //  }
  //  // Legacy DApp Browsers
  //  else if (window.web3) {
  //     let web3 = new Web3(window.web3.currentProvider);
  //  }
  //  // Non-DApp Browsers
  //  else {
  //      alert('You have to install MetaMask !');
  //  }

  // const provider = new window.ethers.providers.Web3Provider(window.ethereum)
  // const signer = provider.getSigner()

  // const balance = provider.getBalance("ethers.eth")

  // console.log('check All',balance)
  }, []);

  return (
    <div>
      {/* <img src={backgroundImage} alt="background" /> */}
      <h1>Firebase Auth</h1>
      <h2>
        Set up authentication in your React project with Firebase Auth
      </h2>
      <h2>
        {currentUser
          ? `The current logged in user is: ${currentUser}.`
          : "No user is currently logged in."}
      </h2>
      <SignUp />
      <SignIn />
      <MetaMaskInterface/>

      {/* <SignOutButton /> */}
    </div>
  );
}

// const Wrapper = styled.div`
//   padding-top: 150px;
//   margin: 0 auto;
//   display: grid;
//   justify-items: center;
//   padding-bottom: 100px;
// `;

// const Title = styled.h1`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//     Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 40px;
//   line-height: 48px;
//   color: #ffffff;
//   text-align: center;
// `;

// const Description = styled.h2`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//     Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 20px;
//   line-height: 48px;
//   color: #000;
//   text-align: center;
// `;

// const Background = styled.img`
//   position: absolute;
//   width: 100%;
//   top: 0px;
//   z-index: -1;
// `;
