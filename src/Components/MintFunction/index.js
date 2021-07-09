import React from 'react'
import {
    Button
}from '@material-ui/core'
import useInput from '../../CustomHooks/useInput'
import {GetMint} from '../../Api/Contract'
export default function MintFunction(){
    const value = useInput("");

    return(
        <div>
            <form className="mint-form"  onSubmit={(e)=>GetMint(e,value)}>
                <input
                    style={{color:'white'}}
                    placeholder="Value"
                    variant="outlined"
                    {...value}
                />
                <Button style={{marginLeft:20}} type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    )

}