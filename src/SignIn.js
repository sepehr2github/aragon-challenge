import React, { useEffect } from "react";
import getFirebase from "./Firebase/Firebase";
import useInput from "./CustomHooks/useInput";
import {AuthSignIn} from './Api/Auth'
import {useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core'

const SignIn = () => {
//   const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");
  let history = useHistory();

  function RedirectToSignUp(){
    history.push('/signup')
  }

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={(e)=>AuthSignIn(e,email,password,history)}>
        <h1>Sign in</h1>
        <input placeholder="Email" {...email} />
        <input placeholder="Password" type="password" {...password} />
        <Button style={{marginTop:20}} variant="contained" color="primary" type="submit">Sign in</Button>
        <Button style={{marginTop:20}} variant="outlined" color="primary" onClick={RedirectToSignUp}>Create new Account</Button>
      </form>
    </div>
  );
};

export default SignIn;