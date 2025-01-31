import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast, Toaster } from "react-hot-toast";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/outline";
import Loader from "../Loader";
import { cheak_auth } from "../../Redux/Actions/contact-us-action";
import { useDispatch, useSelector } from "react-redux";
import Error404 from "../error404-page";

const ManageFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(null);
  const [nameIcon, setNameIcon] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [image, setImage] = useState(null);

  const token = Cookies.get("authToken");
  const apiUrlData = process.env.REACT_APP_API_URL;
  const isAuthuntucated = useSelector((state) => state.contact.auth_status);

  const dispatch = useDispatch();

  // Fetch Features
  const fetchFeatures = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiUrlData}/feature/dashbord?page=${currentPage}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFeatures(response.data.data);
      setTotalPages(response.data.paginationResult.numberOfPages);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error("Unauthorized. Please log in.");
        } else if (error.response.status === 404) {
          toast.error("User not found.");
        } else if (error.response.status === 410) {
          toast.error("Connection Error.");
        }
      } else {
        toast.error("Failed to fetch features.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Update Feature
  const handleUpdate = async (featureId) => {
    setCurrentFeature(featureId);
    setShowModal(true);
    const feature = features.find((feature) => feature._id === featureId);
    setNameIcon(feature.NameIcon);
    setTitle(feature.Title);
    setDescription(feature.description);
  };

  // Handle Form Submit for Insert and Update
  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("Title", title);
    if (image) {
      formData.append("image", image);
    }
    formData.append("description", description);

    try {
      const apiUrl = currentFeature
        ? `${apiUrlData}/feature/${currentFeature}`
        : `${apiUrlData}/feature`;

      const method = currentFeature ? "put" : "post";

      const response = await axios({
        method,
        url: apiUrl,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        toast.success(
          currentFeature
            ? "Feature updated successfully!"
            : "Feature created successfully!"
        );
        setNameIcon("");
        setTitle("");
        setDescription("");
        setShowModal(false);
        fetchFeatures();
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error("Unauthorized. Please log in.");
        } else if (error.response.status === 404) {
          toast.error("User not found.");
        } else if (error.response.status === 410) {
          toast.error("Connection Error.");
        }
      } else {
        toast.error(
          currentFeature
            ? "Failed to update feature."
            : "Failed to create feature."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // Delete Feature
  const handleDelete = async (featureId) => {
    if (window.confirm("Are you sure you want to delete this feature?")) {
      try {
        await axios.delete(`${apiUrlData}/feature/${featureId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Feature deleted successfully!");
        fetchFeatures();
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            toast.error("Unauthorized. Please log in.");
          } else if (error.response.status === 404) {
            toast.error("User not found.");
          } else if (error.response.status === 410) {
            toast.error("Connection Error.");
          }
        } else {
          toast.error("Failed to delete feature.");
        }
      }
    }
  };

  // Pagination
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before starting data fetching
      try {
        // Wait for both data fetch and dispatch to complete
        await Promise.all([fetchFeatures(), dispatch(cheak_auth())]);
      } catch (error) {
        toast.error("Failed to load data.");
      } finally {
        setLoading(false); // Set loading to false after data is fetched and dispatched
      }
    };

    fetchData();
  }, [currentPage, dispatch]);
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
            <h2 className="text-3xl font-semibold text-text_color">
              Manage Features
            </h2>
            <button
              onClick={() => {
                setShowModal(true);
                setCurrentFeature(null); // Reset the current feature for insert
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center space-x-2"
            >
              <PlusIcon className="w-5 h-5" />
              <span>Add New Feature</span>
            </button>
          </div>

          {/* Features Table */}
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full table-auto border border-[#302f2f] border-separate border-spacing-0">
            <thead className="bg-[#302f2f] text-text_color">
                  <tr>
                    <th className="py-2 px-4 text-left">Feature Icon</th>
                    <th className="py-2 px-4 text-left">Title</th>
                    <th className="py-2 px-4 text-left">Description</th>
                    <th className="py-2 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature) => (
                    <tr key={feature._id} className="border-b text-text_color">
                      <td className="py-2 px-4 max-w-[200px] break-words">
                        <img
                          src={feature.image}
                          className="max-h-[100px] rounded-[10px] "
                          alt=""
                        />
                      </td>
                      <td className="py-2 px-4 max-w-[200px] break-words">
                        {feature.Title}
                      </td>
                      <td className="py-2 px-4 max-w-[200px] break-words">
                        {feature.description}
                      </td>
                      <td className="py-2 px-4 whitespace-nowrap text-center space-x-2">
                        <button
                          onClick={() => handleUpdate(feature._id)}
                          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(feature._id)}
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
              className="px-4 py-2 mx-2  rounded-md disabled:opacity-50 bg-primary  text-text_color  hover:text-white"
              >
              Prev
            </button>
            <button className="px-4 py-2 bg-gray-300">{currentPage}</button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 mx-2  rounded-md disabled:opacity-50 bg-primary  text-text_color  hover:text-white"
              >
              Next
            </button>
          </div>

          {/* Modal for updating/adding feature */}
          {showModal && (
            <div className="fixed inset-0 pt-[120px] bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-background_color mx-2 p-6 rounded-lg shadow-lg w-[500px]">
              <h3 className="text-xl font-semibold mb-4">
                  {currentFeature ? "Update Feature" : "Add New Feature"}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label
                      htmlFor="nameIcon"
                      className="block text-sm font-medium text-text_color"
                    >
                      Feature Image
                    </label>
                    <input
                      type="file"
                      id=""
                      // value={image}
                      onChange={(e) => setImage(e.target.files[0])}
                      className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-text_color"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-2">
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
                      className="w-full  border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  p-2 border  rounded-md"
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 bg-gray-300 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      disabled={loading}
                    >
                      {loading
                        ? "Saving..."
                        : currentFeature
                        ? "Update"
                        : "Add"}
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

export default ManageFeatures;
