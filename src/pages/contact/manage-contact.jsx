import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { cheak_auth, contacts_get } from "../../Redux/Actions/contact-us-action";
import Contact_page from "./page";
import SidebarLayout from "../../components/layouts/sidebar";
import Error404 from "../error404-page";

const Manage_contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("authToken");
  const data = useSelector((state) => state.contact.Contact_data);
  const isAuthuntucated = useSelector((state) => state.contact.auth_status);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(()=>{

    setContacts(data)
    
  },[data])
const dispatch = useDispatch()
  // Fetch Contacts


    useEffect(() => {
      const fetchData = async () => {
        setLoading(true); // Set loading to true before starting data fetching
        try {
          // Wait for both data fetch and dispatch to complete
          await Promise.all([    dispatch(contacts_get())
            , dispatch(cheak_auth())]);
        } catch (error) {
          toast.error("Failed to load data.");
        } finally {
          setLoading(false); // Set loading to false after data is fetched and dispatched
          
        }
      };
    
      fetchData();
    }, [ dispatch,]);
  // Delete Contact
   // Delete Contact
   const deleteContact = async (id) => {

    try {
      await axios.delete(`${apiUrl}/contactus/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
      dispatch(contacts_get())
      toast.success("Contact deleted successfully!");


    } catch (error) {
      toast.error("Failed to delete contact.");
    }
  };
  if (loading) {
    return <Loader />;
  }
  
  if (isAuthuntucated !== 200) {
    return <Error404 />;
  }
  return (
    <div className="container bg-background_color pt-[140px] h-screen min-w-full mx-auto p-4">
    <Toaster position="top-right" reverseOrder={false} />
    <div className=" srounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
  
      {loading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-[#302f2f] border-separate border-spacing-0">
            <thead className="bg-[#302f2f] text-text_color">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Message</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts && contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact._id} className="border-b text-text_color ">
                    <td className="px-6 py-4">{contact.name}</td>
                    <td className="px-6 py-4">{contact.email}</td>
                    <td className="px-6 py-4">{contact.message}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteContact(contact._id)}
                        className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-3 py-1"
                        aria-label={`Delete contact ${contact.name}`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">No contacts found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
  
      <div className="mt-6 flex justify-center">
        <Contact_page />
      </div>
    </div>
  </div>
  
  );
};

export default Manage_contact;
