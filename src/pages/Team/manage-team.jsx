import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/outline";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { cheak_auth } from "../../Redux/Actions/contact-us-action";
import { useNavigate } from "react-router-dom";
import Home from "../home";
import Error404 from "../error404-page";

const ManageOurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentMember, setCurrentMember] = useState(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState();
  const [users, setUsers] = useState([]);
  const [modalType, setModalType] = useState(""); // 'create' or 'update'
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false); // Add this line
  const [job_title, setJob_title] = useState(); // Add this line
  const [experience, setExperience] = useState(); // Add this line

  const token = Cookies.get("authToken");
  const apiUrl = process.env.REACT_APP_API_URL;
  const isAuthuntucated = useSelector((state) => state.contact.auth_status);
const dispatch = useDispatch()
  // Fetch Team Members based on the current page
  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/ourteam?page=${currentPage}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTeamMembers(response.data.data);
      setTotalPages(response.data.paginationResult.numberOfPages);
    } catch (error) {
      toast.error("Failed to fetch team members.");
    } finally {
    }
  };

  // Fetch Users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/user?page=${currentPage}`);
        setUsers(response.data.data); // Assuming results contain the user data
        setTotalPages(response.data.paginationResult.numberOfPages); // Total pages
      } catch (error) {
        toast.error("Failed to fetch users.");
      }
    };

    fetchUsers();
  }, [currentPage]); // Fetch users when currentPage changes

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before starting data fetching
      try {
        // Wait for both data fetch and dispatch to complete
        await Promise.all([fetchTeamMembers(), dispatch(cheak_auth())]);
      } catch (error) {
        toast.error("Failed to load data.");
      } finally {
        setLoading(false); // Set loading to false after data is fetched and dispatched
      }
    };
  
    fetchData();
  }, [currentPage, dispatch]);
  
  const handleUpdate = (memberId) => {
    setModalType("update");
    setCurrentMember(memberId);
    const member = teamMembers.find((member) => member._id === memberId);
    setName(member.name);
    setDescription(member.description);
    setJob_title(member.job_title);
    setExperience(member.experience);

    // setUserId(member.user ? member.user._id : ""); // Allow userId to be empty
    setImage(null);
    setShowModal(true);
  };

  const handleCreate = () => {
    setModalType("create");
    setCurrentMember(null);
    setName("");
    setDescription("");
    setUserId("");
    setJob_title("");
    setExperience("");
    setImage(null);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    if (image) {
      formData.append("image", image);
    }
    if (userId) {
      formData.append("user", userId);
    }

    formData.append("description", description);
    formData.append("experience", experience);
    formData.append("job_title", job_title);


    try {
      const response = currentMember
        ? await axios.put(`${apiUrl}/ourteam/${currentMember}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          })
        : await axios.post(`${apiUrl}/ourteam`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          });

      toast.success(
        currentMember
          ? "Team member updated successfully!"
          : "Team member created successfully!"
      );
      resetForm();
      fetchTeamMembers();
    } catch (error) {
      toast.error(
        currentMember
          ? "Failed to update team member."
          : "Failed to create team member."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (memberId) => {
    if (window.confirm("Are you sure you want to delete this team member?")) {
      try {
        await axios.delete(`${apiUrl}/ourteam/${memberId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Team member deleted successfully!");
        fetchTeamMembers();
      } catch (error) {
        toast.error("Failed to delete team member.");
      }
    }
  };

  const resetForm = () => {
    setName("");
    setImage(null);
    setDescription("");
    setUserId("");
    setJob_title("");
    setExperience("");
    setUserId("");
    setShowModal(false);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };
  if (loading) {
    return <Loader />;
  }
  
  if (isAuthuntucated !== 200) {
    return <Error404 />;
  }
  

  return (
    <div className="min-h-screen flex pt-[140px] items-center bg-background_color justify-center">
      <Toaster position="top-right" reverseOrder={false} />

      {
        loading?
        <Loader/>
        :
        <div className=" p-3 rounded-lg w-full 2xl:max-w-[1800px] md:max-w-[1270px]">
        <div className="flex justify-between flex-wrap gap-4 items-center mb-6">
          <h2 className="text-3xl font-semibold text-text_color">
            Manage Team Members
          </h2>
          <button
            onClick={handleCreate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2"
          >
            <PlusIcon className="w-5 h-5" />
            <span>Add New Member</span>
          </button>
        </div>

        {/* Team Members Table */}
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full table-auto border border-[#302f2f] border-separate border-spacing-0">
              <thead className="bg-[#302f2f] text-text_color">
                <tr>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-center">Image</th>
                  <th className="py-2 px-4 text-center">Role</th>
                  <th className="py-2 px-4 text-left">Description</th>
                  <th className="py-2 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr key={member._id} className="border-b text-text_color">
                    <td className="py-2 px-4 max-w-[200px] break-words">
                      {member.name}
                    </td>
                    <td className="py-2 px-4 max-w-[200px] break-words">
                      <img
                        src={member.image}
                        className="max-h-[100px] rounded-[10px] "
                        alt=""
                      />
                    </td>
                    <td className="py-2 px-4 max-w-[200px] break-words">
                      {member.job_title}
                    </td>

                    <td className="py-2 px-4 max-w-[200px] break-words">
                      {member.description}
                    </td>
                    <td className="py-2 px-4 whitespace-nowrap text-center space-x-2">
                      <button
                        onClick={() => handleUpdate(member._id)}
                        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(member._id)}
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

        {/* Modal for creating or updating a team member */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#1e1e1e] mx-2 p-6 rounded-lg shadow-lg w-[500px]">
              <h3 className="text-xl font-semibold text-text_color mb-4 text-center">
                {modalType === "create"
                  ? "Create Team Member"
                  : "Update Team Member"}
              </h3>
              <form onSubmit={handleSubmit}>
                {/* Two-Column Grid Layout */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text_color"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      />
                  </div>

                  {/* jobtitle */}
                  <div>
                    <label
                      htmlFor="partInTeam"
                      className="block text-sm font-medium text-text_color"
                    >
                      PartInTeam
                    </label>
                    <input
                      id="partInTeam"
                      value={job_title}
                      onChange={(e) => setJob_title(e.target.value)}
                      required
                      className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      />
                  </div>

                  {/* Image */}
                  <div>
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium text-text_color"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      />
                  </div>

                  {/* User */}
                  <div>
                    <label
                      htmlFor="user"
                      className="block text-sm font-medium text-text_color"
                    >
                      User
                    </label>
                    <select
                      id="user"
                      // value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      >
                      <option value="">Select User</option>
                      {users.map((user) => (
                        <option key={user._id} value={user._id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                    <label
                      htmlFor="partInTeam"
                      className="block text-sm font-medium text-text_color"
                    >
                      Experience
                    </label>
                    <input
                    type="number"
                      id="partInTeam"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      required
                      className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      />
                  </div>
                {/* Full-Width Description */}
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-text_color"
                    >
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows="4"
                    className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => resetForm()}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    disabled={loading}
                  >
                    {loading
                      ? "Processing..."
                      : modalType === "create"
                      ? "Create"
                      : "Update"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      }
 
    </div>
  );
};

export default ManageOurTeam;
