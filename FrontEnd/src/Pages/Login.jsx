import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img from "/login.jpg";
import { useAuth } from "../contextApi/contextApi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser, language } = useAuth();
  const isArabic = language === "ar";

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.email || !formData.password) {
      console.error("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );

      if (response.data.data.user.role === "admin") {
        navigate("/");
      }

      setUser(response.data.data.user);
      navigate("/applynow");
    } catch (error) {
      console.error(error?.response?.data?.message || "Something went wrong");
      setError(error?.response?.data?.message);
      setLoading(false);
    }
  };

  const labels = {
    welcome: {
      en: "Welcome Back",
      ar: "مرحبًا بعودتك",
    },
    loginToAccount: {
      en: "Login to your account",
      ar: "تسجيل الدخول إلى حسابك",
    },
    email: {
      en: "Email Address",
      ar: "البريد الإلكتروني",
    },
    password: {
      en: "Password",
      ar: "كلمة المرور",
    },
    rememberMe: {
      en: "Remember me",
      ar: "تذكرني",
    },
    forgotPassword: {
      en: "Forgot your password?",
      ar: "هل نسيت كلمة المرور؟",
    },
    login: {
      en: "Login",
      ar: "تسجيل الدخول",
    },
    loggingIn: {
      en: "Logging...",
      ar: "جارٍ تسجيل الدخول...",
    },
    notMember: {
      en: "Not a member?",
      ar: "لست عضوا؟",
    },
    signup: {
      en: "Sign up now",
      ar: "سجل الآن",
    },
  };

  return (
    <div
      dir={isArabic ? "rtr" : "ltr"}
      className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
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
          <div className={`text-center mb-10 ${isArabic ? "text-right" : "text-left"}`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-900">
              {labels.welcome[language]}
            </h2>
            <p className="mt-2 text-gray-600">{labels.loginToAccount[language]}</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium text-gray-700 ${isArabic ? "text-right" : "text-left"}`}
                >
                  {labels.email[language]}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
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
                  className={`block text-sm font-medium text-gray-700 ${isArabic ? "text-right" : "text-left"}`}
                >
                  {labels.password[language]}
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
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
                  className={`ml-2 block text-sm text-gray-700 ${isArabic ? "ml-0 mr-2" : ""}`}
                >
                  {labels.rememberMe[language]}
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgotpassword"
                  className="font-medium text-indigo-700 hover:text-indigo-600"
                >
                  {labels.forgotPassword[language]}
                </Link>
              </div>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-900 via-orange-400 to-blue-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105"
              >
                {loading ? labels.loggingIn[language] : labels.login[language]}
              </button>
            </div>
          </form>

          <div className={`mt-6 text-center text-sm ${isArabic ? "text-right" : "text-left"}`}>
            <p className="text-gray-600">
              {labels.notMember[language]}{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-700 hover:text-indigo-600"
              >
                {labels.signup[language]}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
