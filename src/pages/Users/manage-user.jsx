import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/outline";
import Loader from "../Loader"; // Assuming you have a Loader component
import { cheak_auth } from "../../Redux/Actions/contact-us-action";
import { useDispatch, useSelector } from "react-redux";
import Error404 from "../error404-page";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPhone, setUpdatedPhone] = useState('');
  const [updatedRole, setUpdatedRole] = useState('');
  const [showModal, setShowModal] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const token = Cookies.get("authToken");
  const apiUrl = process.env.REACT_APP_API_URL;
  const isAuthuntucated = useSelector((state) => state.contact.auth_status);
const dispatch = useDispatch()
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/user?limit=10&page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data.data);
      setTotalPages(response.data.paginationResult.numberOfPages);

    } catch (error) {
      toast.error("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  const fetchData = async () => {
    setLoading(true); // Set loading to true before starting data fetching
    try {
      // Wait for both data fetch and dispatch to complete
      await Promise.all([fetchUsers(), dispatch(cheak_auth())]);
    } catch (error) {
      toast.error("Failed to load data.");
    } finally {
      setLoading(false); // Set loading to false after data is fetched and dispatched
    }
  };

  fetchData();
}, [currentPage, dispatch]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };
  

  const handleUpdate = (userId) => {
    setSelectedUser(userId);
    const user = users.find((user) => user._id === userId);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
    setUpdatedPhone(user.phon_number);
    setUpdatedRole(user.role);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put(
        `${apiUrl}/user/${selectedUser}`,
        {
          name: updatedName,
          email: updatedEmail,
          phon_number: updatedPhone,
          role: updatedRole,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("User updated successfully!");
      setShowModal(false);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === selectedUser ? { ...user, name: updatedName, email: updatedEmail, phon_number: updatedPhone, role: updatedRole } : user
        )
      );
    } catch (error) {
      toast.error("Failed to update user.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    if (!isConfirmed) return;

    setLoading(true);
    try {
      await axios.delete(`${apiUrl}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(users.filter((user) => user._id !== userId));
      toast.success("User deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete user.");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loader />;
  }
  
  if (isAuthuntucated !== 200) {
    return <Error404 />;
  }
  return (
    <div className="min-h-screen bg-background_color flex pt-[140px] items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />
      {loading ? (
        <Loader />
      ) : (
        <div className=" p-3 rounded-lg w-full 2xl:max-w-[1800px] md:max-w-[1270px]">
          <div className="flex justify-between flex-wrap gap-4 items-center mb-6">
            <h2 className="text-3xl font-semibold text-text_color">User Management</h2>
            {/* <button
              onClick={() => setShowModal(true)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center space-x-2"
            >
              <PlusIcon className="w-5 h-5" />
              <span>Add New User</span>
            </button> */}
          </div>

          <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full table-auto border border-[#302f2f] border-separate border-spacing-0">
          <thead className="bg-[#302f2f] text-text_color">
          <tr>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Phone</th>
                  <th className="py-2 px-4 text-left">Role</th>
                  <th className="py-2 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                    <tr key={user._id} className="border-b text-text_color ">
                    <td className="py-2 px-4">{user.name}</td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4">{user.phon_number}</td>
                    <td className="py-2 px-4">{user.role}</td>
                    <td className="py-2 text-center space-x-2">
                      <button
                        onClick={() => handleUpdate(user._id)}
                        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(user._id)}
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
        <div className="flex justify-center mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 bg-gray-300 rounded-l-lg hover:bg-gray-400"
          >
            Prev
          </button>
          <button className="px-4 py-2 bg-gray-300">{currentPage}</button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 bg-gray-300 rounded-r-lg hover:bg-gray-400"
          >
            Next
          </button>
        </div>

          {/* Update User Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-background_color mx-2 p-6 rounded-lg shadow-lg w-[500px]">
              <h3 className="text-xl font-semibold text-text_color mb-4 text-center">
                  Update User
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text_color">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                        required
                        className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text_color">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={updatedEmail}
                        onChange={(e) => setUpdatedEmail(e.target.value)}
                        required
                        className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text_color">
                        Phone
                      </label>
                      <input
                        type="text"
                        id="phone"
                        value={updatedPhone}
                        onChange={(e) => setUpdatedPhone(e.target.value)}
                        required
                        className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-text_color">
                        Role
                      </label>
                      <select
                        id="role"
                        value={updatedRole}
                        onChange={(e) => setUpdatedRole(e.target.value)}
                        required
                        className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      >
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        <option value="Manager">Manager</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserManagement;
