import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const CreateCourseForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch users when component mounts or page changes
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image); // This should be the image file object
    formData.append("description", description);
    formData.append("price", price);
    formData.append("user", userId);

    try {
      const response = await axios.post(`${apiUrl}/course`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });
      toast.success("Course created successfully!");
      setName("");
      setImage(null);
      setDescription("");
      setPrice("");
      setUserId("");
    } catch (error) {
      toast.error("Failed to create course.");
    } finally {
      setLoading(false);
    }
  };

  // Handle pagination change (page select)
  const handlePageChange = (event) => {
    setCurrentPage(Number(event.target.value));
  };

  return (
    <div className="flex items-center pt-[140px]  pb-[50px] mx-4 justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white border rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">
          Create Course
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Course Name */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="course_name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Using useState for name
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="course_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Course Name
            </label>
          </div>

          {/* Image Upload */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="file"
              id="course_image"
              onChange={(e) => setImage(e.target.files[0])} // Using useState for image
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              required
            />
            <label
              htmlFor="course_image"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image
            </label>
          </div>

          {/* Course Description */}
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              id="course_description"
              value={description}
              onChange={(e) => setDescription(e.target.value)} // Using useState for description
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="course_description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>

          {/* Course Price */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              id="course_price"
              value={price}
              onChange={(e) => setPrice(e.target.value)} // Using useState for price
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="course_price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>

          {/* User Select */}
          <div className="relative z-0 w-full mb-5 group">
            <select
              id="user"
              value={userId}
              onChange={(e) => setUserId(e.target.value)} // Using useState for userId
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              required
            >
              <option value="">Select a User</option>
              {users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select>
            <label
              htmlFor="user"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User
            </label>
          </div>

          {/* Pagination Select */}
          <div className="mb-5">
            <label
              htmlFor="pagination"
              className="block text-sm text-gray-700 mb-2"
            >
              Select Users Page
            </label>
            <select
              id="pagination"
              value={currentPage}
              onChange={handlePageChange}
              className="block w-full py-2 px-3 text-sm text-gray-900 border-b-2 border-gray-300"
            >
              {Array.from({ length: totalPages }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  Page {index + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-white bg-primary rounded hover:bg-hover focus:outline-none focus:ring focus:ring-primary"
          >
            {loading ? "Creating..." : "Create Course"}
          </button>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default CreateCourseForm;
