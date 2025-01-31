import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/outline";
import Loader from "../Loader";
import { cheak_auth } from "../../Redux/Actions/contact-us-action";
import { useDispatch, useSelector } from "react-redux";
import Error404 from "../error404-page";

const RegisterCourse = () => {
  const [loading, setLoading] = useState(true);
  const [register, setRegister] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiUrl = process.env.REACT_APP_API_URL;
  const isAuthuntucated = useSelector((state) => state.contact.auth_status);

  const dispatch = useDispatch();

  // Fetch Registers based on the current page
  const fetchReisters = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiUrl}/register?page=${currentPage}&limit=10`,
        {}
      );
      setRegister(response.data.data);
      setTotalPages(response.data.paginationResult.numberOfPages);
    } catch (error) {
      toast.error("Failed to fetch Registers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before starting data fetching
      try {
        // Wait for both data fetch and dispatch to complete
        await Promise.all([fetchReisters(), dispatch(cheak_auth())]);
      } catch (error) {
        toast.error("Failed to load data.");
      } finally {
        setLoading(false); // Set loading to false after data is fetched and dispatched
      }
    };

    fetchData();
  }, [currentPage, dispatch]);

  const token = Cookies.get("authToken");

  const handleDelete = async (registerId) => {
    try {
      // Confirm deletion action with the user
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this register?"
      );
      if (!isConfirmed) return;

      // Call the API to delete the Registers
      await axios.delete(`${apiUrl}/register/${registerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove the register from the local state if the delete is successful
      setRegister(register.filter((register) => register._id !== registerId));
      toast.success("register deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete Registers.");
    }
  };

  const handlePageChange = (event) => {
    setCurrentPage(Number(event.target.value));
  };
  if (loading) {
    return <Loader />;
  }

  if (isAuthuntucated !== 200) {
    return <Error404 />;
  }
  return (
    <div className="min-h-screen flex bg-background_color pt-[140px] items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=" p-3 rounded-lg w-full 2xl:max-w-[1800px] md:max-w-[1270px]">
            <div className="flex justify-between flex-wrap gap-4 items-center mb-6">
              <h2 className="text-3xl font-semibold text-text_color">
                Manage Registers
              </h2>
            </div>

            {/* Registers Table */}
            <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full table-auto border border-[#302f2f] border-separate border-spacing-0">
            <thead className="bg-[#302f2f] text-text_color">
                  <tr>
                    <th className="py-2 px-4 text-left"> Name</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="py-2 px-4 text-left">Phone</th>
                    <th className="py-2 px-4 text-left">Course Name</th>
                    <th className="py-2 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {register.map((register) => (
                    <tr
                      key={register._id}
                      className="border-b  text-text_color"
                    >
                      <td className="py-2 px-4 max-w-[200px] break-words">
                        {register.name}
                      </td>

                      <td className="py-2 px-4 max-w-[200px] break-words">
                        {register.email}
                      </td>
                      <td className="py-2 px-4 max-w-[200px] break-words">
                        {register.phone_number}
                      </td>
                      <td className="py-2 px-4 max-w-[200px] break-words">
                        {register.course && register.course.name
                          ? register.course.name
                          : "No Course Name"}
                      </td>

                      <td className="py-2  px-4 text-center ">
                        <button
                          onClick={() => handleDelete(register._id)}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

  {/* Pagination */}
<div className="flex justify-center items-center mt-6">
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
    className="px-4 py-2 bg-gray-300 rounded-lg disabled:bg-gray-500"
  >
    Previous
  </button>
  <span className="mx-4 text-text_color">{currentPage}</span>
  <button
    disabled={currentPage === totalPages}
    onClick={() =>
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
    }
    className="px-4 py-2 bg-gray-300 rounded-lg disabled:bg-gray-500"
  >
    Next
  </button>
</div>

          </div>

        </>
      )}
    </div>
  );
};

export default RegisterCourse;
