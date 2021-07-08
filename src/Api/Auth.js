import React from "react";

import getFirebase from "../Firebase/Firebase";
import ToastManager from '../Utils/ToastManager'

export const AuthSignIn = async (event,email,password) => {
    event.preventDefault()
    const firebaseInstance = getFirebase();
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        console.log("user", user);
        alert("Welcome back!");
      }
    } catch (error) {
        ToastManager('error',error.message)
    }
};

export const AuthSignUp = async (event,email,password) => {
    event.preventDefault()
    const firebaseInstance = getFirebase();
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        console.log("user", user);
        alert("Welcome back!");
      }
    } catch (error) {
        ToastManager('error',error.message)
    }
};

export const AuthSignOut = async (event,email,password) => {
    event.preventDefault()
    const firebaseInstance = getFirebase();
    try {
        if (firebaseInstance) {
          await firebaseInstance.auth().signOut();
          alert("Successfully signed out!");
        }
      } catch (error) {
        ToastManager('error',error.message)
    }
};