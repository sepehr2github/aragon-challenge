import React, { useEffect } from "react";

import getFirebase from "./Firebase/Firebase";
import useInput from "./CustomHooks/useInput";
import {AuthSignIn} from './Api/Auth'
import {useHistory} from 'react-router-dom';

const SignIn = () => {
//   const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");
  let history = useHistory();

  function RedirectToSignUp(){
    history.push('/signup')
  }
  // let history = useHistory();
  // useEffect(()=>{
  //   let Token = localStorage.getItem('Token')
  //   if (Token !== null) {
  //     history.push('/app/home')
  //   }
  // },[])
    // } else if (initURL === '' || initURL === '/' || initURL === '/signin' || initURL === '/signup' || initURL === '/forgetpass') {
    //   return ( <Redirect to={'/app/dashboard'}/> );
    // } else {
    //   return ( <Redirect to={initURL}/> );
    // }

//   const signIn = async (event) => {
//     event.preventDefault();

//     try {
//       if (firebaseInstance) {
//         const user = await firebaseInstance
//           .auth()
//           .signInWithEmailAndPassword(email.value, password.value);
//         console.log("user", user);
//         alert("Welcome back!");
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={(e)=>AuthSignIn(e,email,password,history)}>
        <h1>Sign in</h1>
        <input style={{marginTop:20}} placeholder="Email" {...email} />
        <input style={{marginTop:20}} placeholder="Password" type="password" {...password} />
        <button style={{marginTop:20}} type="submit">Sign in</button>
        <button style={{marginTop:20}} onClick={RedirectToSignUp}>Create new Account</button>
      </form>
    </div>
  );
};

export default SignIn;