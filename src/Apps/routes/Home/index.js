import React from 'react'
import BalanceBox from '../../../Components/BalanceBox'
import CryptoList from '../../../Components/CryptoList'

export default function Home(){
    return(
        <>
        <div>
            <h1>Home</h1>
        </div>
        <div className="balance-container">
            <BalanceBox value={20} title={'Eth balance'}/>
            <BalanceBox value={20} title={'TKN balance'}/>
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