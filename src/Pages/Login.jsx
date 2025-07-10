import React,{useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img from "/login.jpg";
import { useAuth } from "../contextApi/contextApi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const {setUser} = useAuth()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      console.error("Please fill in all fields");
      return;
    }
    console.log("this form data ::", formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
  withCredentials: true,
}
      );
      console.log("this is user response ::", response.data.data.user)

      setUser(response.data.data.user)
    } catch (error) {
      console.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Image Section */}
        <div className="md:w-1/2 lg:w-7/12 hidden md:block relative">
          <img
            src={img}
            alt="Login visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-indigo-900/20"></div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 lg:w-5/12 py-8 px-6 sm:px-10 lg:px-12 flex flex-col justify-center">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-gray-600">Login to your account</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg transition-all"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgotpassword"
                  className="font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white inset-0 bg-gradient-to-r from-blue-900/90 via-orange-400/100 to-blue-900/90 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Not a member?{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-700 hover:text-indigo-600"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
