import React,{lazy,useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Sidebar from '../Components/Sidebar'
import { GetBalance } from '../Api/Contract';


export default function Apps({match}){
    let Token = localStorage.getItem('Token')
    const Home = lazy(() => import('./routes/Home/index'));
    const Logs = lazy(() => import('./routes/Logs/index'));
    const Transaction = lazy(() => import('./routes/Transaction/index'));
    let history = useHistory();
    if (Token !== null) {
        GetBalance();
        // setInterval(()=>{
        // },1000)
    }
    
    useEffect(()=>{
      if (Token === null) {
        history.push('/signin')
      }
    },[])
    
    return(
        <div>
            <Sidebar/>
            <div className="apps-container">
                <Switch>
                    <Route path={`${match.url}/home`} component={Home}/>
                    <Route path={`${match.url}/logs`} component={Logs}/>
                    <Route path={`${match.url}/transaction`} component={Transaction}/>
                    {/* <Route path="/log" component={About}/> */}
                    {/* <Route path="/transaction" component={Project}/> */}
                </Switch>
            </div>
        </div>
    )
}