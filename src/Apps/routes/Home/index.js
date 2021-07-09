import React, { useEffect } from 'react'
import BalanceBox from '../../../Components/BalanceBox'
import SupplyBox from '../../../Components/SupplyBox'
import CryptoList from '../../../Components/CryptoList'
import {GetBalance, GetSupply} from '../../../Api/Contract'
import {GetCryptoList} from '../../../Api/Api'
import {useSelector} from 'react-redux'
export default function Home(){

    GetBalance();
    GetSupply();
    // setInterval(()=>{
        GetCryptoList();
    // },30000)

    return(
        <>
        <div>
            <h1>Home</h1>
        </div>
        <div className="balance-container">
            <BalanceBox title={'TKN balance'}/>
            <SupplyBox/>
        </div>
        <div>
            <h2>
                List
            </h2>
            <div>
                <CryptoList/>
            </div>
        </div>
        </>
    )
}