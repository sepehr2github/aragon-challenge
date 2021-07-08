const initialState = {
    contactPage: false,
    splashscreen:true,
    mobileMenu:false,
    languagePage:false,
    previewPage:{status:false,data:null},
    projectPreview:{status:false,data:null},
    TeamPreview:{status:false,data:null},
    direction:'rtl',
    projects:[],
    gallery:{column1:[],column2:[],column3:[]},
    homeGallery:{data:[],length:0},
    history:[],
    language:'fa',
    menu:null,
    about:null,
    contact:null,
    Team:null,
    blog:null,
    instagram:null,
    messages:null,
    languageEnableSetting:null
};
  

const Data = (state = initialState, action) => {
  switch (action.type) {
    case 'contact_page': {
      return{ 
        ...state,
        contactPage: action.data
      }
    }
    case 'splashscreen': {
      return{ 
        ...state,
        splashscreen: action.data
      }
    }
    case 'mobilemenu': {
      return{ 
        ...state,
        mobileMenu: action.data
      }
    }
    case 'changeDirectionToRtl': {
      return{ 
        ...state,
        direction: 'rtl'
      }
    }
    case 'changeDirectionToLtr': {
      return{ 
        ...state,
        direction: 'ltr'
      }
    }
    case 'SelectLanguagePage': {
      return{ 
        ...state,
        languagePage: action.data
      }
    }
    case 'HomeGallery':{
      return{
        ...state,
        homeGallery:action.data
      }
    }
    case 'SetInstagramPageData':{
      return{
        ...state,
        instagram:action.data
      }
    }
    case 'history': {
      return{ 
        ...state,
        history: action.data
      }
    }
    case 'SetLanguage': {
      return{ 
        ...state,
        language: action.data
      }
    }
    case 'SetAboutPageData': {
      return{ 
        ...state,
        about: action.data
      }
    }
    case 'SetContactPageData': {
      return{ 
        ...state,
        contact: action.data
      }
    }
    case 'SetGalleryPageData': {
      return{ 
        ...state,
        gallery: action.data
      }
    }
    case 'SetProjectsPageData': {
      return{ 
        ...state,
        projects: action.data
      }
    }
    case 'setTeamPageDate': {
      return{ 
        ...state,
        Team: action.data
      }
    }
    case 'SetTeamPreview': {
      return{ 
        ...state,
        TeamPreview: action.data
      }
    }
    case 'SetMenu': {
      return{ 
        ...state,
        menu: action.data
      }
    }
    case 'SetPreview': {
      return{ 
        ...state,
        previewPage: action.data
      }
    }
    case 'SetMessagesData': {
      return{ 
        ...state,
        messages: action.data
      }
    }
    case 'SetProjectPreview': {
      return{ 
        ...state,
        projectPreview: action.data
      }
    }
    case 'SetBlogPageData': {
      return{ 
        ...state,
        blog: action.data
      }
    }
    case 'SetLanguageSettingData': {
      return{ 
        ...state,
        languageEnableSetting: action.data
      }
    }
    default: {
      return state;
    }
  }
};

export default Data;
