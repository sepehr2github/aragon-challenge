import React from "react";

import getFirebase from "../Firebase/Firebase";
import ToastManager from '../Utils/ToastManager'




export const AuthSignIn = async (event,email,password,history) => {
    event.preventDefault()
    const firebaseInstance = getFirebase();
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        localStorage.setItem('Token',user.user.Aa)
        history.push('/apps/home')
      }
    } catch (error) {
        ToastManager('error',error.message)
    }
};

export const AuthSignUp = async (event,email,password,history) => {
    event.preventDefault()

    const firebaseInstance = getFirebase();
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
          
        history.push('/signin')
        ToastManager('success','registered Successfully')
      }
    } catch (error) {
        ToastManager('error',error.message)
    }
};

export const AuthSignOut = async (event,history) => {
    event.preventDefault()
    const firebaseInstance = getFirebase();
    try {
        if (firebaseInstance) {
          await firebaseInstance.auth().signOut();
          localStorage.removeItem('Token')
          history.push('/signin')
        }
      } catch (error) {
        ToastManager('error',error.message)
    }
};