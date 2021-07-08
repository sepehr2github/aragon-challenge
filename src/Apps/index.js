import React,{lazy,useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Sidebar from '../Components/Sidebar'

export default function Apps({match}){
    const Home = lazy(() => import('./routes/Home/index'));
    const Logs = lazy(() => import('./routes/Logs/index'));
    const Transaction = lazy(() => import('./routes/Transaction/index'));
    console.log('match',match)
    let history = useHistory();
    useEffect(()=>{
      let Token = localStorage.getItem('Token')
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