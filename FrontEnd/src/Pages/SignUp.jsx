import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useAuth } from "../contextApi/contextApi";

const SignUp = () => {
  const { language } = useAuth();
  const isArabic = language === "ar";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      !formData.contact ||
      !formData.firstName ||
      !formData.email ||
      !formData.confirmPassword ||
      !formData.lastName ||
      !formData.password
    ) {
      return;
    }

    try {
      await axios.post(
        "http://localhost:8000/api/v1/users/register",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.contact,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      );
      localStorage.setItem("email", formData.email);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      navigate("/verify-account");
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4 ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="inset-0 bg-gradient-to-r from-blue-900/90 via-orange-400/100 to-blue-900/90 py-8 px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {isArabic ? "إنشاء حساب" : "Create Your Account"}
          </h1>
          <p className="mt-2 text-blue-100">
            {isArabic ? "انضم إلينا اليوم وابدأ الآن" : "Join us today and get started"}
          </p>
        </div>

        <form className="p-6 md:p-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {isArabic ? "الاسم الأول" : "First Name"}
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder={isArabic ? "الاسم الأول" : "Enter first name"}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {isArabic ? "رقم الاتصال" : "Contact No."}
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder={isArabic ? "رقم الهاتف" : "Your phone number"}
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {isArabic ? "اسم العائلة" : "Last Name"}
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder={isArabic ? "اسم العائلة" : "Enter last name"}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {isArabic ? "البريد الإلكتروني" : "Email Address"}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder={isArabic ? "name@email.com" : "your@email.com"}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {isArabic ? "كلمة المرور" : "Password"}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder={isArabic ? "أدخل كلمة المرور" : "Create password"}
                  required
                />
                <button
                  type="button"
                  className={`absolute top-3.5 ${isArabic ? "left-3" : "right-3"} text-gray-500`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {isArabic ? "تأكيد كلمة المرور" : "Confirm Password"}
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder={isArabic ? "تأكيد كلمة المرور" : "Confirm password"}
                  required
                />
                <button
                  type="button"
                  className={`absolute top-3.5 ${isArabic ? "left-3" : "right-3"} text-gray-500`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-900 via-orange-400 to-blue-900 text-white font-bold rounded-lg shadow-md"
            >
              {loading ? (isArabic ? "جارٍ المعالجة..." : "Processing...") : isArabic ? "إنشاء حساب" : "Create Account"}
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isArabic ? "هل لديك حساب؟" : "Already have an account?"}{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-700 hover:text-indigo-600"
              >
                {isArabic ? "تسجيل الدخول" : "Login"}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
