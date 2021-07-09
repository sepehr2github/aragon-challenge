import React from 'react'
import {
    Button
}from '@material-ui/core'


export default function TransferFunction(){

    return(
        <div>
            <form className="transfer-form">
                <input
                    style={{color:'white'}}
                    placeholder="Address"
                    variant="outlined"
                />
                <span>
                    To
                </span>
                <input
                    style={{color:'white'}}
                    placeholder="Address"
                    variant="outlined"
                />
                <Button style={{marginLeft:20,height:'100%'}} variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    )

}