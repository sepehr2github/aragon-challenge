import React, { useEffect } from 'react'
import BalanceBox from '../../../Components/BalanceBox'
import SupplyBox from '../../../Components/SupplyBox'
import CryptoList from '../../../Components/CryptoList'
import {GetBalance, GetSupply} from '../../../Api/Contract'
import {useSelector} from 'react-redux'
export default function Home(){
    const TokenBalance = useSelector(state => state.data.TokenBalance)
    const TotalSupply = useSelector(state => state.data.TotalSupply)
    if(TokenBalance === null){
        GetBalance()
        GetSupply()
    }

    return(
        <>
        <div>
            <h1>Home</h1>
        </div>
        <div className="balance-container">
            <BalanceBox value={TokenBalance} title={'TKN balance'}/>
            <SupplyBox value={TotalSupply}/>
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