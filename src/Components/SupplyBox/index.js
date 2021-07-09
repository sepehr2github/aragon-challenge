import React from 'react'
import {useSelector} from 'react-redux'

export default function SupplyBox(){
    const TotalSupply = useSelector(state => state.data.TotalSupply)
    return(
        <div className="supply-box">
            <span>
                Total Supply
            </span>
            <h1>
                {TotalSupply}
            </h1>
        </div>
    )
}