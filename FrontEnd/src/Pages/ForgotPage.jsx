import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center inset-0 bg-gradient-to-r from-blue-900/40 via-orange-400/100 to-blue-900/70 px-4 py-12">
      <div className="w-full max-w-5xl text-white p-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 tracking-wide drop-shadow-lg">
          Forgot Password
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Email */}
          <div>
            <label className="block text-lg font-semibold mb-3 text-white tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-xl border border-white bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:shadow-md transition"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-lg font-semibold mb-3 text-white tracking-wide">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                required
                className="w-full px-4 py-3 rounded-xl border border-white bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:shadow-md transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-xl text-white hover:text-orange-100 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-lg font-semibold mb-3 text-white tracking-wide">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
                className="w-full px-4 py-3 rounded-xl border border-white bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:shadow-md transition"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-3 text-xl text-white hover:text-orange-100 transition"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-12 text-center">
          <button
            type="submit"
            className="bg-white/20 cursor-pointer hover:bg-white/30 text-white font-bold tracking-wide px-10 py-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-md"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;
