const initialState = {
    CryptoList:{data:[],length:0},
    TokenBalance:null,
    TotalSupply:null
};
  

const Data = (state = initialState, action) => {
  switch (action.type) {
    case 'crypto_list': {
      return{ 
        ...state,
        CryptoList: action.data
      }
    }
    case 'token_balance': {
      return{ 
        ...state,
        TokenBalance: action.data
      }
    }
    case 'total_supply': {
      return{ 
        ...state,
        TotalSupply: action.data
      }
    }
    default: {
      return state;
    }
  }
};

export default Data;
