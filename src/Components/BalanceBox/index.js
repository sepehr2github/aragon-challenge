import React from 'react'

export default function BalanceBox({title,value}){
    return(
        <div className="balance-box">
            <span>
                {title}
            </span>
            <h1>
                {value}
            </h1>
        </div>
    )
}