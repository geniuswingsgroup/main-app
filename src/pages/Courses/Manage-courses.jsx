import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/outline";
import Loader from "../Loader";
import { cheak_auth } from "../../Redux/Actions/contact-us-action";
import { useDispatch, useSelector } from "react-redux";
import Error404 from "../error404-page";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [userId, setUserId] = useState(""); // User ID can be null or empty
  const [users, setUsers] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false); // Modal for Create
  const [showUpdateModal, setShowUpdateModal] = useState(false); // Modal for Update
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [Avalable, setAvalable] = useState("");
  const [TimeStart, setTimeStart] = useState("");

  const token = Cookies.get("authToken");
  const apiUrl = process.env.REACT_APP_API_URL;
  const isAuthuntucated = useSelector((state) => state.contact.auth_status);
  const dispatch = useDispatch();
  // Fetch Courses based on the current page
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiUrl}/course/dashbord?page=${currentPage}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCourses(response.data.data);
      setTotalPages(response.data.paginationResult.numberOfPages);
    } catch (error) {
      toast.error("Failed to fetch courses.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch Users with pagination
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/user?page=${currentPage}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data.data);
        setTotalPages(response.data.paginationResult.numberOfPages);
      } catch (error) {
        toast.error("Failed to fetch users.");
      }
    };
    fetchUsers();
  }, [currentPage, token]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before starting data fetching
      try {
        // Wait for both data fetch and dispatch to complete
        await Promise.all([fetchCourses(), dispatch(cheak_auth())]);
      } catch (error) {
        toast.error("Failed to load data.");
      } finally {
        setLoading(false); // Set loading to false after data is fetched and dispatched
      }
    };

    fetchData();
  }, [currentPage, dispatch]);

  const handleUpdate = async (courseId) => {
    setCurrentCourse(courseId);
    const course = courses.find((course) => course._id === courseId);
    setName(course.name);
    setDescription(course.description);
    setPrice(course.price);
    setAvalable(course.Available);
    setTimeStart(course.TimeStart);
    setUserId(course.user?._id || ""); // If no user, set to empty or null
    setImage(null); // Reset the image to null when updating
    setShowUpdateModal(true); // Show update modal
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    if (image) {
      formData.append("image", image);
    }
    formData.append("description", description);
    formData.append("price", price);
    formData.append("Available", Avalable);
    formData.append("TimeStart", TimeStart);

    if (userId) formData.append("user", userId); // Only append userId if it's not empty

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = currentCourse
        ? await axios.put(`${apiUrl}/course/${currentCourse}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          })
        : await axios.post(`${apiUrl}/course`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

      toast.success(
        currentCourse
          ? "Course updated successfully!"
          : "Course created successfully!"
      );
      setName("");
      setImage(null); // Reset image input
      setDescription("");
      setPrice("");
      setUserId("");
      setTimeStart("");
      setShowCreateModal(false); // Close the create modal
      setShowUpdateModal(false); // Close the update modal
      fetchCourses();
    } catch (error) {
      toast.error("Failed to create or update course.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (courseId) => {
    try {
      // Confirm deletion action with the user
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this course?"
      );
      if (!isConfirmed) return;

      // Call the API to delete the course
      await axios.delete(`${apiUrl}/course/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove the course from the local state if the delete is successful
      setCourses(courses.filter((course) => course._id !== courseId));
      toast.success("Course deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete course.");
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
    <div className="min-h-screen bg-background_color flex pt-[140px] items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=" p-3 rounded-lg w-full 2xl:max-w-[1800px] md:max-w-[1270px]">
            <div className="flex justify-between flex-wrap gap-4 items-center mb-6">
              <h2 className="text-3xl font-semibold text-text_color">
                Manage Courses
              </h2>
              <button
                onClick={() => {
                  setShowCreateModal(true);
                  setShowUpdateModal(false); // Ensure the Update modal is closed
                  setCurrentCourse(null); // Reset current course
                  setName("");
                  setDescription("");
                  setPrice("");
                  setTimeStart("");
                  setUserId("");
                  setImage(null);
                }}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center space-x-2"
              >
                <PlusIcon className="w-5 h-5" />
                <span>Add New Course</span>
              </button>
            </div>

            {/* Courses Table */}
            <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full table-auto border border-[#302f2f] border-separate border-spacing-0">
            <thead className="bg-[#302f2f] text-text_color">
            <tr>
                    <th className="py-2 px-4 text-left">Course Name</th>
                    <th className="py-2 px-4 text-left">Image</th>
                    <th className="py-2 px-4 text-left">Description</th>
                    <th className="py-2 px-4 text-left">Price</th>
                    <th className="py-2 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course._id} className="border-b text-text_color ">
                      <td className="py-2 px-4 max-w-[200px]  break-words">
                        {course.name}
                      </td>
                      <td className="py-2 px-4 max-w-[200px] break-words">
                        <img
                          src={course.image}
                          className="max-h-[100px] rounded-[10px] "
                          alt=""
                        />
                      </td>
                      <td className="py-2 px-4 max-w-[200px] break-words">
                        {course.description}
                      </td>
                      <td className="py-2 px-4 max-w-[200px] break-words">
                        {course.price}
                      </td>
                      <td className="py-2 whitespace-nowrap px-4 text-center space-x-2">
                        <button
                          onClick={() => handleUpdate(course._id)}
                          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(course._id)}
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
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-4 py-2 mx-2  rounded-md disabled:opacity-50 bg-primary  text-text_color  hover:text-white"
                >
                Previous
              </button>
              <span className="mx-4 text-text_color">{currentPage}</span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 mx-2  rounded-md disabled:opacity-50 bg-primary  text-text_color  hover:text-white"
                >
                Next
              </button>
            </div>
          </div>

          {/* Create/Update Modal */}
          {/* Create/Update Modal */}
          {(showCreateModal || showUpdateModal) && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-background_color mx-2 p-6 rounded-lg shadow-lg w-[500px]">
                <h3 className="text-xl font-semibold text-text_color mb-4 text-center">
                  {showUpdateModal ? "Update Course" : "Create New Course"}
                </h3>
                <form onSubmit={handleSubmit}>
                  {/* Two-Column Grid Layout */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Course Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text_color"
                      >
                        Course Name
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

                    {/* Course Image */}
                    <div>
                      <label
                        htmlFor="image"
                        className="block text-sm font-medium text-text_color"
                      >
                        Course Image
                      </label>
                      <input
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full p-2 border  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  rounded-md"
                      />
                    </div>

                    {/* Price */}
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-text_color"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="w-full p-2 border  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  rounded-md"
                      />
                    </div>

                    {/* User */}
                    <div>
                      <label
                        htmlFor="userId"
                        className="block text-sm font-medium text-text_color"
                      >
Select Lecturer                      </label>
                      <select
                        id="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="w-full p-2 border  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  rounded-md"
                      >
                        <option value="">Select Lecturer</option>
                        {users.map((user) => (
                          <option key={user._id} value={user._id}>
                            {user.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Available */}
                    {showUpdateModal && (
                      <div>
                        <label
                          htmlFor="available"
                          className="block text-sm font-medium text-text_color"
                        >
                          Available
                        </label>
                        <select
                          id="available"
                          value={Avalable}
                          onChange={(e) => setAvalable(e.target.value)}
                          className="w-full p-2 border border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  rounded-md"
                        >
                          <option value="">Available or Not</option>
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </div>
                    )}

                    {showUpdateModal && (
                      <div className="">
                        <label
                          htmlFor="TimeStart"
                          className="block text-sm font-medium text-text_color"
                        >
                          Time Start
                        </label>
                        <input
                          type="date"
                          id="TimeStart"
                          value={TimeStart}
                          onChange={(e) => setTimeStart(e.target.value)}
                          className="w-full p-2 border  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  rounded-md"
                        />
                      </div>
                    )}
                  </div>

                  {showUpdateModal === false ? (
                    <div className="mb-3">
                      <label
                        htmlFor="TimeStart"
                        className="block  text-sm font-medium text-text_color"
                      >
                        Time Start
                      </label>
                      <input
                        type="date"
                        id="TimeStart"
                        value={TimeStart}
                        onChange={(e) => setTimeStart(e.target.value)}
                        className="w-full p-2 border  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  rounded-md"
                      />
                    </div>
                  ) : null}

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
                      className="w-full p-2 border  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  rounded-md"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowCreateModal(false);
                        setShowUpdateModal(false);
                      }}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      {showUpdateModal ? "Update Course" : "Create Course"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ManageCourses;
