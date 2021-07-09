import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import getFirebase from "./Firebase/Firebase";
import Web3 from 'web3'
// import ethers from 'ethers';
import SignUp from "./SignUp";
import MetaMaskInterface from './MetaMaskInterface'
import SignIn from "./SignIn";
import {
  GetCryptoList
}from './Api/Api.js'
import {Provider} from 'react-redux'
import store from "./Redux/store";
import Loading from './Components/Loading'
import Apps from './Apps/index'

export default function App(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const SignIn = lazy(() => import('./SignIn'));
  const SignUp = lazy(() => import('./SignUp'));


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

    // GetCryptoList();


    let Token = localStorage.getItem('Token')
    if (window.location.pathname === '/') {
      console.log('ttoken',Token)
      if (Token === null) {
        window.location.replace('/signin')
      }else{
        window.location.replace('/apps/home')
      }
      // } else if (initURL === '' || initURL === '/' || initURL === '/signin' || initURL === '/signup' || initURL === '/forgetpass') {
      //   return ( <Redirect to={'/app/dashboard'}/> );
      // } else {
      //   return ( <Redirect to={initURL}/> );
      // }
    }

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

  return(
    <Provider store={store}>
        <div>
            <Router>
              <Suspense fallback={Loading}>
                <Switch>
                  <Route path="/signin" component={SignIn}/>
                  <Route path="/signup" component={SignUp}/>
                  <Route path="/apps" component={Apps}/>
                  {/* <Route path="*" component={NotFound}/> */}
                </Switch>
              </Suspense>
            </Router>
          </div>
    </Provider>
  )

}
