import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import getFirebase from "./Firebase/Firebase";
import {Provider} from 'react-redux'
import store from "./Redux/store";
import Loading from './Components/Loading'
import Apps from './Apps/index'

export default function App(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const SignIn = lazy(() => import('./SignIn'));
  const SignUp = lazy(() => import('./SignUp'));
  const NotFound = lazy(() => import('./NotFound'));


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

    let Token = localStorage.getItem('Token')
    if (window.location.pathname === '/') {
      console.log('ttoken',Token)
      if (Token === null) {
        window.location.replace('/signin')
      }else{
        window.location.replace('/apps/home')
      }
    }
  }, []);

  return(
    <Provider store={store}>
        <div>
            <Router>
              <Suspense fallback={Loading}>
                <Switch>
                  <Route exact path="/" component={Apps}/>
                  <Route path="/signin" component={SignIn}/>
                  <Route path="/signup" component={SignUp}/>
                  <Route path="/apps" component={Apps}/>
                  <Route path="*" component={NotFound}/>
                </Switch>
              </Suspense>
            </Router>
          </div>
    </Provider>
  )

}
