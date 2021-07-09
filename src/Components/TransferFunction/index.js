import React from 'react'
import {
    Button
}from '@material-ui/core'
import useInput from '../../CustomHooks/useInput'
import {TransferToken} from '../../Api/Contract'

export default function TransferFunction(){
    const destination = useInput("");
    const value = useInput("");

    return(
        <div>
            <form className="transfer-form"  onSubmit={(e)=>TransferToken(e,destination,value)}>
                <span>
                    Send 
                </span>
                <input
                    style={{color:'white',width:100}}
                    placeholder="Amount"
                    variant="outlined"
                    {...value}
                />
                <span>
                    To
                </span>
                <input
                    style={{color:'white'}}
                    placeholder="Address"
                    variant="outlined"
                    {...destination}
                />
                <Button style={{marginLeft:20,height:'100%'}} type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    )

}