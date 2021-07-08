import axios from 'axios'

export const GetCryptoList = () => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD&CMC_PRO_API_KEY=93350bf6-01ce-4596-8c6f-f81c19c19285`,{
    //     headers: {
    //     'X-CMC_PRO_API_KEY': '93350bf6-01ce-4596-8c6f-f81c19c19285'
    //    },
    })
    .then(function ({data}) {
        console.log('check response',data.data.slice(0,5))
    })
    .catch(function (error) {
       console.log("Error****}{}", error.message);
    })
};