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
  
  export const EnableSplashScreen = () => ({
    type: 'splashscreen',
    data: true
  });
  
  export const DisableSplashScreen = () => ({
    type: 'splashscreen',
    data: false
  });
  
  export const SetCryptoList = (data) => ({
    type: 'crypto_list',
    data: data
  })
  
  
  
  