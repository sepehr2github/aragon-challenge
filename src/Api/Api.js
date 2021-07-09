import axios from 'axios'
import {useDispatch} from 'react-redux'
import {
    SetCryptoList
}from '../Redux/actions.js'
import ToastManager from '../Utils/ToastManager.js';

export const GetCryptoList = () => {
    const dispatch = useDispatch()
    axios.get(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD&CMC_PRO_API_KEY=93350bf6-01ce-4596-8c6f-f81c19c19285`,{
    })
    .then(function ({data}) {
        console.log('check response',data.data.slice(0,5))
        let TempList = data.data.slice(0,5)
        data.data.map((coin)=>{ // with this method we send less request to https://cors-anywhere.herokuapp.com/
            if(coin.name === 'Aragon'){
                TempList.push(coin)
            }
        })
        dispatch(SetCryptoList({data:TempList,length:5}))
    })
    .catch(function (error) {
        ToastManager('error',`https://cors-anywhere.herokuapp.com ${error.message}`)
        console.log("Error****}{}", error.message);
    })
};