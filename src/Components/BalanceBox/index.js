import React from 'react'
import {useSelector} from 'react-redux'

export default function BalanceBox({title}){

    const TokenBalance = useSelector(state => state.data.TokenBalance)
    return(
        <div className="balance-box">
            <span>
                {title}
            </span>
            <h1>
                {TokenBalance}
            </h1>
        </div>
    )
}