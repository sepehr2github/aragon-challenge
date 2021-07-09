import React from 'react'
import MintFunction from '../../../Components/MintFunction'
import TransferFunction from '../../../Components/TransferFunction'
export default function Transaction(){
    return(
        <>
            <h1>Transaction</h1>
            <TransferFunction/>
            <h1>
                Mint
            </h1>
            <MintFunction/>
        </>
    )
}