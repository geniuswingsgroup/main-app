import { CHEAK_AUTH, CONTACTS_GET } from "../Actions/contact-us-action";

  
  const enitialState = {
    Contact_data: [],
    total_pages: [],
    auth_status:"hamaka"
  };
  export const contact_reducer = (state = enitialState, action) => {
    switch (action.type) {
      case CONTACTS_GET:
        return {
          ...state,
          Contact_data: action.payload.data,
          total_pages: action.payload.total_pages,
          total_data: action.payload.total_data,
        };
        case CHEAK_AUTH:
          return {
            ...state,
            auth_status: action.payload.data,
        
          };
      default:
        return state;
    }
  };
  