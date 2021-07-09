export const EnableContactModal = () => {
    document.getElementById('app-container').classList.add("active-contact");
    return {
    type: 'contact_page',
    data: true
    }
  }
  
  export const DisableContactModal = () => {
    document.getElementById('app-container').classList.remove("active-contact");
    return {
      type: 'contact_page',
      data: false
    }
  };

  
  export const SetCryptoList = (data) => ({
    type: 'crypto_list',
    data: data
  })

  export const SetTokenBalance = (data) => ({
    type: 'token_balance',
    data: data
  })
  
  export const SetTotalSupply = (data) => ({
    type: 'total_supply',
    data: data
  })
  
  
  
  