const initialState = {
    CryptoList:{data:[],length:0}
};
  

const Data = (state = initialState, action) => {
  switch (action.type) {
    case 'crypto_list': {
      return{ 
        ...state,
        CryptoList: action.data
      }
    }
    default: {
      return state;
    }
  }
};

export default Data;
