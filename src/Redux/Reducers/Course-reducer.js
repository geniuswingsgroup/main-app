import { CORSE_FILTER, CORSE_GET, CORSE_PAGE, CORSE_SEARCH, GTE_VALUE, KEYWORD_VALUE, LTE_VALUE } from "../Actions/Course-action";

  
  const enitialState = {
    Course_data: [],
    course_search: [],
    Course_page: [],
total_pages_search:[],
searchPerformed:false,

    keyWord_search_value: '',
    gte_filter_value: 0,
    lte_filter_value: 0,


    total_pages:[],
    total_data:[],

  };
  export const course_reducer = (state = enitialState, action) => {
    switch (action.type) {
      case CORSE_GET:
        return {
          ...state,
          Course_data: action.payload.data,
          total_pages: action.payload.total_pages,
          total_data: action.payload.total_data,
        };
        case CORSE_SEARCH:
            return {
              ...state,
              Course_data: action.payload.data,
              total_pages_search: action.payload.total_pages,
              searchPerformed: true
            
            };
            case CORSE_FILTER:
              return {
                ...state,
                Course_data: action.payload.data,
                total_pages_search: action.payload.total_pages,
                searchPerformed: true
              
              };
  
            case CORSE_PAGE:
              return {
                ...state,
                Course_data: action.payload.data,
                total_pages: action.payload.total_pages,
                total_data: action.payload.total_data,
              };
            
            case KEYWORD_VALUE:
              return {
                ...state,
                keyWord_search_value: action.search,
              
              };
              
            case GTE_VALUE:
              return {
                ...state,
                gte_filter_value: action.search,
              
              };
              
            case LTE_VALUE:
              return {
                ...state,
                lte_filter_value: action.search,
              
              };
      default:
        return state;
    }
  };
  