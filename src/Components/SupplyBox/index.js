import React from 'react'

export default function SupplyBox({value}){
    return(
        <div className="supply-box">
            <span>
                Total Supply
            </span>
            <h1>
                {value}
            </h1>
        </div>
    )
}