import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { cheak_auth } from "../../Redux/Actions/contact-us-action";
import Error404 from "../error404-page";

const ProjectCRUD = () => {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [userId, setUserId] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    numberOfPages: 1,
    limit: 10,
  });
  const [loading, setLoading] = useState(true); // Loading state

  const apiUrl = process.env.REACT_APP_API_URL;
  const apiBaseUrl = `${apiUrl}/project`;
  const userApiUrl = `${apiUrl}/user`;
  const token = Cookies.get("authToken");
  const isAuthuntucated = useSelector((state) => state.contact.auth_status);

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${apiBaseUrl}?page=${pagination.currentPage}&limit=${pagination.limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProjects(response.data.data);
      setPagination((prev) => ({
        ...prev,
        numberOfPages: response.data.paginationResult.numberOfPages,
      }));
    } catch (error) {
      toast.error("Error fetching projects: " + error.message);
    }
  };

  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(userApiUrl);
      setUsers(response.data.data);
    } catch (error) {
      toast.error("Error fetching users: " + error.message);
    }
  };

  // Add or update project
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      let data = {
        name,
        url,
        image,
      };

      if (userId && userId.length > 0) {
        data.TeamWork = userId.map((id) => ({ user: id }));
      }

      if (editId) {
        await axios.put(`${apiBaseUrl}/${editId}`, data, config);
        toast.success("Project updated successfully");
      } else {
        await axios.post(apiBaseUrl, data, config);
        toast.success("Project added successfully");
      }

      fetchProjects();
      resetForm();
    } catch (error) {
      toast.error("Error saving project: " + error.message);
    } finally{
      setLoading(false)
    }
  };

  // Delete project
// Delete project
const deleteProject = async (id) => {
  const isConfirmed = window.confirm("Are you sure you want to delete this project?");
  if (!isConfirmed) {
    return; // Cancel the delete operation if the user clicks "Cancel"
  }

  try {
    await axios.delete(`${apiBaseUrl}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("Project deleted successfully");
    fetchProjects();
  } catch (error) {
    toast.error("Error deleting project: " + error.message);
  }
};


  // Reset form
  const resetForm = () => {
    setName("");
    setUrl("");
    setImage(null);
    setUserId([]);
    setEditId(null);
  };

  // Load data on mount
  const dispatch = useDispatch()
  useEffect(() => {
    const loadData = async () => {
      setLoading(true); // Start loading
      try {
        await Promise.all([fetchProjects(), fetchUsers(), dispatch(cheak_auth())]);
      } catch (error) {
        toast.error("Error loading data: " + error.message);
      } finally {
        setLoading(false); // Ensure loading stops after all actions
      }
    };
    loadData();
  }, [pagination.currentPage, dispatch]);
  
  if (loading) {
    return <Loader />;
  }
  
  if (isAuthuntucated !== 200) {
    return <Error404 />;
  }
  
  return (
    <div className="container text-text_color bg-background_color min-w-full min-h-screen  pt-[120px]  p-4">
      <h1 className="text-2xl font-bold mb-4">Project Management</h1>
      <Toaster position="top-right" reverseOrder={false} />

      {loading ? (
       <Loader/>
      ) : (
        <>
        <form onSubmit={handleSubmit} className="mb-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="Name" className="block mb-1">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project Name"
        className="border p-2 border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  w-full rounded"
        required
      />
    </div>
    <div>
      <label htmlFor="url" className="block mb-1">Project URL</label>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Project URL"
        className="border p-2 border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  w-full rounded"
        required
      />
    </div>
    <div>
      <label htmlFor="image" className="block mb-1">Image</label>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="border p-2 w-full border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  rounded"
        required={!editId}
      />
    </div>
  </div>
  <div>
    <label htmlFor="userId" className="block mb-1">Select User  & Developer</label>
    <select
      multiple
      value={userId}
      onChange={(e) => setUserId([...e.target.selectedOptions].map(option => option.value))}
      className="border p-2 border-[#303030] bg-[#252525] text-text_color focus:border-[#303030] focus:ring-0  w-full rounded"
    >
      <option value="">Select User</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  </div>
  <div className="flex flex-col sm:flex-row sm:space-x-2 mt-3">
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2 sm:mb-0"
    >
      {editId ? "Update Project" : "Add Project"}
    </button>
    {editId && (
      <button
        type="button"
        onClick={resetForm}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Cancel
      </button>
    )}
  </div>
</form>


          <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-[#302f2f] border-separate border-spacing-0">
          <thead className="bg-[#302f2f] text-text_color">
                <tr className="">
                  <th className="  p-2">Name</th>
                  <th className="  p-2">Image</th>
                  <th className=" b p-2">URL</th>
                  <th className="  p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project._id} className="">
                    <td className=" p-2">{project.name}</td>
                    <td className=" p-2">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.name}
                          className="h-12"
                        />
                      )}
                    </td>
                    <td className=" p-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {project.url}
                      </a>
                    </td>
                    <td className="flex justify-center items-center p-2 h-full space-x-2">
                      <button
                        onClick={() => {
                          setEditId(project._id);
                          setName(project.name);
                          setUrl(project.url);
                          setUserId(project.userId);
                        }}
                        className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteProject(project._id)}
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center  mt-4 items-center">

  <button
    onClick={() =>
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage - 1,
      }))
    }
    disabled={pagination.currentPage <= 1}
    className="px-4 py-2 mx-2  rounded-md disabled:opacity-50 bg-primary  text-text_color  hover:text-white"
    >
    Previous
  </button>
  <span className="mx-2 text-lg">
    Page {pagination.currentPage} of {pagination.numberOfPages}
  </span>
  <button
    onClick={() =>
      setPagination((prev) => ({
        ...prev,
        currentPage: prev.currentPage + 1,
      }))
    }
    disabled={pagination.currentPage >= pagination.numberOfPages}
    className="px-4 py-2 mx-2  rounded-md disabled:opacity-50 bg-primary  text-text_color  hover:text-white"
    >
    Next
  </button>

</div>

        </>
      )}
    </div>
  );
};

export default ProjectCRUD;
