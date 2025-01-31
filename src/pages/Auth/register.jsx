import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import Cookies from "js-cookie"; // Import js-cookie to get the token from the cookie
import { useDispatch, useSelector } from "react-redux";
import { cheak_auth } from "../../Redux/Actions/contact-us-action";
import Loader from "../Loader";
import Error404 from "../error404-page";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  // Separate useState for each form field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("User");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
  const isAuthuntucated = useSelector((state) => state.contact.auth_status);
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Retrieve the token from cookies
      const token = Cookies.get("authToken");

      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(
        `${apiUrl}/auth/signup`,
        {
          name,
          email,
          password,
          passwordConfirm,
          phone,
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token here
          },
        }
      );
      toast.success("Account created successfully!");
      navigate('/login')
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          toast.error("Invalid input or user already exists.");
        } else if (status === 404) {
          toast.error("User not found.");
        } else if (status === 410) {
          toast.error("Connection error. Please try again.");
        } else if (status === 401) {
          toast.error("Unauthorized. Token missing or invalid.");
        } else {
          toast.error("An unexpected error occurred.");
        }
      } else {
        toast.error("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before starting data fetching
      try {
        // Wait for both data fetch and dispatch to complete
        await dispatch(cheak_auth())
      } catch (error) {
        toast.error("Failed to load data.");
      } finally {
        setLoading(false); // Set loading to false after data is fetched and dispatched
      }
    };
  
    fetchData();
  }, [ dispatch]);
  if (loading) {
    return <Loader />;
  }
  
  if (isAuthuntucated !== 200) {
    return <Error404 />;
  }
  
  return (
    <div className="min-h-screen bg-background_color pt-[140px] pb-[50px]  flex items-center justify-center p-4">
      <div className=" border border-[#303030] p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-text_color mb-4">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {/* Name Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="floating_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-text_color bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              id="floating_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-text_color bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email Address
            </label>
          </div>

          {/* Password Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type={showPassword ? "text" : "password"}
              id="floating_password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-text_color bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="floating_repeat_password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-text_color bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Password
            </label>
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showConfirmPassword ? (
                <EyeOffIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>

          {/* Phone Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="floating_phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-text_color bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone
            </label>
          </div>

          {/* Role Input */}
          <div className="relative z-0 w-full mb-5 group">
            <select
              id="floating_role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-text_color bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            <label
              htmlFor="floating_role"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Role
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white bg-primary min-w-full hover:bg-hover active:bg-active focus:outline-none font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
            disabled={loading}
          >
            {loading ? (
              <div className="w-5 h-5 border-4 border-t-4 border-transparent border-t-primary rounded-full animate-spin"></div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default SignupPage;
