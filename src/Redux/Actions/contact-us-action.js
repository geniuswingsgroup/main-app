
import axios from "axios";
import toast from "react-hot-toast";
  import Cookies from "js-cookie";

  const token = Cookies.get("authToken");
const apiUrl = process.env.REACT_APP_API_URL;

export const CONTACT_FORM = "CONTACT_FORM";
export const contact_form = (name, email, message, resetInputs) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${apiUrl}/contactus`,
        { name, email, message },
        { credentials: "include" }
      );

      const status = response.data.data;

      dispatch({ type: CONTACT_FORM, payload: { response, status } });
      toast.success("Message sent successfully");
      
      // Reset inputs if provided
      if (resetInputs) resetInputs();
    } catch (error) {
      toast.error("Error occurred while sending the message");
    }
  };
};
export const CONTACTS_GET = "CONTACTS_GET";
export const contacts_get = (page) => {
  return async (dispatch) => {
    try {
   
      const response = await axios.get(
        `${apiUrl}/contactus?limit=12&page=${page}`);

      const data = response.data.data;
      const total_pages = response.data.paginationResult.numberOfPages;
      // get tootal freelance data for showing paginations 
      const total_data = response.data.results;

      dispatch({ type: CONTACTS_GET, payload: { data, total_pages ,total_data } });
   
    } catch (error) {
toast.error('Error getting data')
    }
  };
};


export const CHEAK_AUTH = "CHEAK_AUTH";

export const cheak_auth = (

) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${apiUrl}/auth/check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Add the token here
        },
        body: JSON.stringify({}), // Add any body content if required
      });
      const data = response.status;
      dispatch({ type: CHEAK_AUTH, payload: { data } });

    } catch (error) {

    }
  };
};

