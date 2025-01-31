import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

const apiUrl = process.env.REACT_APP_API_URL;
export const CORSE_GET = "CORSE_GET";
export const course_get = (page,keyword="",price_gte="",price_lte="") => {
  return async (dispatch) => {
    try {
    //query       
    //limit=number 
    //keyword=string ----- for search
    //price[gte]=number&field[lte]=number ----- for filter
      const response = await axios.get(
        `${apiUrl}/course?limit=12`);

      const data = response.data.data;
      const total_pages = response.data.paginationResult.numberOfPages;
      // get tootal freelance data for showing paginations 
      const total_data = response.data.results;

      dispatch({ type: CORSE_GET, payload: { data, total_pages ,total_data } });
   
    } catch (error) {
toast.error('Error getting data')
    }
  };
};

export const CORSE_SEARCH = "CORSE_SEARCH";
export const course_search = (keyword="",price_gte,price_lte) => {
  return async (dispatch) => {
    try {
    //query       
    //limit=number 
    //keyword=string ----- for search
    //price[gte]=number&field[lte]=number ----- for filter
      const response = await axios.get(
        `${apiUrl}/course?limit=12&keyword=${keyword}&price[gte]=${price_gte}&price[lte]=${price_lte}`);

      const data = response.data.data;
      const total_pages = response.data.paginationResult.numberOfPages;
      // get tootal freelance data for showing paginations 
      const total_data = response.data.results;

      dispatch({ type: CORSE_SEARCH, payload: { data, total_pages ,total_data } });
   
    } catch (error) {
toast.error('Error getting data')
    }
  };
};

export const CORSE_FILTER = "CORSE_FILTER";
export const course_filter =(keyword="",price_gte,price_lte) => {
  return async (dispatch) => {
    try {
    //query       
    //limit=number 
    //keyword=string ----- for search
    //price[gte]=number&field[lte]=number ----- for filter
      const response = await axios.get(
        `${apiUrl}/course?limit=12&keyword=${keyword}&price[gte]=${price_gte}&price[lte]=${price_lte}`);

      const data = response.data.data;
      const total_pages = response.data.paginationResult.numberOfPages;
      // get tootal freelance data for showing paginations 
      const total_data = response.data.results;

      dispatch({ type: CORSE_FILTER, payload: { data, total_pages ,total_data } });
   
    } catch (error) {
toast.error('Error getting data')
    }
  };
};

export const CORSE_PAGE = "CORSE_PAGE";
export const course_page = (page,keyword="",price_gte=0,price_lte=0) => {
  return async (dispatch) => {
    try {
    //query       
    //limit=number 
    //keyword=string ----- for search
    //price[gte]=number&field[lte]=number ----- for filter
      const response = await axios.get(
        `${apiUrl}/course?page=${page}&limit=12&keyword=${keyword}&price[gte]=${price_gte}&price[lte]=${price_lte}`);

      const data = response.data.data;
      const total_pages = response.data.paginationResult.numberOfPages;
      // get tootal freelance data for showing paginations 
      const total_data = response.data.results;

      dispatch({ type: CORSE_PAGE, payload: { data, total_pages ,total_data } });
   
    } catch (error) {
toast.error('Error getting data')
    }
  };
};
//search parameter
export const KEYWORD_VALUE = "KEYWORD_VALUE";
export const keyword_value = (search) => {
  return {
    type: KEYWORD_VALUE,
    search: search,
  };
};
//filter parameter
export const GTE_VALUE = "GTE_VALUE";
export const gte_value = (search) => {
  return {
    type: GTE_VALUE,
    search: search,
  };
};
//filter parameter
export const LTE_VALUE = "LTE_VALUE";
export const lte_value = (search) => {
  return {
    type: LTE_VALUE,
    search: search,
  };
};
export const REGISTER_UPDATE = "REGISTER_UPDATE";

export const register_update = (
  id,
  name,
  email,
  phone,

) => {
  return async (dispatch) => {
    try {
      const token = Cookies.get('jwt');
     

      const response = await axios.put(
       ` ${apiUrl}/register/${id}`,
        {
          name,
          email,
          phone,
        },
        {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
          credentials: 'include', // include credentials if needed
        }
      );
      const data = response.data.data;
      dispatch({ type: REGISTER_UPDATE, payload: { data } });
      toast.success('Updated successfuly'); // Using translation function passed as parameter



    } catch (error) {
      const  isInserted=false
toast.error('Update Failed')
    }
  };
};