import React from "react";

import getFirebase from "./Firebase/Firebase";
import useInput from "./CustomHooks/useInput";
import {AuthSignUp} from './Api/Auth'
import {useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core'

const SignUp = () => {
  const email = useInput("");
  const password = useInput("");
  let history = useHistory();

  
  function RedirectToSignIn(){
    history.push('/signin')
  }

  return (
    <div className="auth-container">
    <form className="auth-box" onSubmit={(e)=>AuthSignUp(e,email,password,history)}>
      <h1>Sign up</h1>
      <input placeholder="Email" {...email} />
      <input placeholder="Password" type="password" {...password} />
      <Button style={{marginTop:20}} variant="contained" color="primary" type="submit">Sign up</Button>
      <Button style={{marginTop:20}}  variant="outlined" color="primary" onClick={RedirectToSignIn}>Already have account</Button>
    </form>
    </div>
  );
};

export default SignUp;

