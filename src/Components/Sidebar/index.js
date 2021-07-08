import React from 'react';
import {useHistory} from 'react-router-dom'
import {AuthSignOut} from '../../Api/Auth'
import Logo from '../../Assets/Logo.png'
export default function Sidebar(){
    let history = useHistory();
    const path = window.location.pathname
    
    function Redirect(url){
        history.push(url)
    }
    
    return(
        <div className="App-sidebar-container">
            <div className="App-sidebar-logo">
                <img src={Logo}/>
            </div>
            <div>
                <ul>
                    <li 
                        className={(path === '/apps/home')?"active":""}
                        onClick={()=>Redirect('/apps/home')}>
                            <i className="fas fa-home"/>
                    </li>
                    <li 
                        className={(path === '/apps/transaction')?"active":""}
                        onClick={()=>Redirect('/apps/transaction')}>
                            <i className="fas fa-exchange-alt"/>
                    </li>
                    <li 
                        className={(path === '/apps/logs')?"active":""}
                        onClick={()=>Redirect('/apps/logs')}>
                            <i className="fas fa-file-alt"/>
                    </li>
                    {/* <li className={(path === '/apps/home')?"active":""}>
                        <i className="fas fa-cog"/>
                    </li> */}
                </ul>
            </div>
            <div className="App-sidebar-aboutus" onClick={(e)=>AuthSignOut(e,history)}>
                <i className="fas fa-sign-out-alt"/>
            </div>
        </div>
    )
}

