import React from "react";

import getFirebase from "./Firebase/Firebase";
import useInput from "./CustomHooks/useInput";
import {AuthSignUp} from './Api/Auth'
import {useHistory} from 'react-router-dom';

const SignUp = () => {
//   const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");
  let history = useHistory();

  
  function RedirectToSignIn(){
    history.push('/signin')
  }

//   const signUp = async (event) => {
//     event.preventDefault();

//     try {
//       if (firebaseInstance) {
//         const user = await firebaseInstance
//           .auth()
//           .createUserWithEmailAndPassword(email.value, password.value);
//         console.log("user", user);
//         alert(`Welcome ${email.value}!`);
//       }
//     } catch (error) {
//       console.log("error", error);
//       alert(error.message);
//     }
//   };

  return (
    <div className="auth-container">
    <form className="auth-box" onSubmit={(e)=>AuthSignUp(e,email,password,history)}>
      <h1>Sign up</h1>
      <input style={{marginTop:20}} placeholder="Email" {...email} />
      <input style={{marginTop:20}} placeholder="Password" type="password" {...password} />
      <button style={{marginTop:20}} type="submit">Sign up</button>
      <button style={{marginTop:20}} onClick={RedirectToSignIn}>Already have account</button>
    </form>
    </div>
  );
};

export default SignUp;

// const FormWrapper = styled.form`
//   display: grid;
//   justify-content: center;
//   gap: 20px;
//   padding-bottom: 50px;
// `;

// const Title = styled.h1`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//     Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 40px;
//   line-height: 48px;
//   color: #000;
//   text-align: center;
// `;

// const Input = styled.input`
//   background: rgba(255, 255, 255, 0.2);
//   border-radius: 30px;
//   padding: 10px 20px;
//   background-blend-mode: overlay;
//   background: rgba(255, 255, 255, 0.2);
//   box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
//     0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
//   border: 1px solid rgba(250, 250, 250, 0.4);

//   :focus {
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
//   padding: 12px 0;
//   width: 200px;
//   border: none;
//   border-radius: 30px;
//   color: white;
//   font-weight: bold;
//   font-family: Segoe UI, sans-serif;
//   cursor: pointer;

//   :focus {
//     outline: none;
//   }
// `;
