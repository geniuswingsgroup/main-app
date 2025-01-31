import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      const token = response.data.Token;

      // Save token in cookies
      Cookies.set("authToken", token, { expires: 7 }); // Expires in 7 days
      window.location.href = '/'; // Force a refresh
      toast.success("Logged in successfully!");
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          toast.error("Invalid email or password.");
        } else if (status === 404) {
          toast.error("Account not found.");
        } else if (status === 410) {
          toast.error("Connection error. Please try again later.");
        } else {
          toast.error("Something went wrong.");
        }
      } else {
        toast.error("Network error. Please check your internet connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center bg-background_color pt-[80px]  justify-center min-h-screen ">
      <div className="w-full mx-4 max-w-md p-8  border rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center text-text_color">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="">
          {/* Email Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-text_color bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          {/* Password Field */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type={showPassword ? "text" : "password"}
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-text_color bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>

            {/* Eye Icon */}
            <button
              type="button"
              className="absolute right-0 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-primary rounded hover:bg-hover focus:outline-none focus:ring focus:ring-primary"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default LoginPage;
