import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaEye } from "react-icons/fa";

const Universities = [
  "Cyprus International University",
  "Near East University",
  "Eastern Mediterranean University",
  "Kyrenia University",
  "Bahçeşehir Cyprus University",
  "Final International University",
  "Cyprus Science University",
  "European University of Lefke",
  "Rauf Denktas University",
];

const Courses = [
  "Software Engineering",
  "Computer Science",
  "Information Technology",
  "Data Science",
  "Artificial Intelligence",
  "Cyber Security",
  "Web Development",
  "Mobile App Development",
  "Database Management",
];

const documents = [
  "Photo (.jpeg, .png, .jpg): *",
  "International Passport, Data page: *",
  "Higher/Secondary Certificate or Equivalent: *",
  "Bachelor’s Degree Certificate:",
  "Bachelor’s Transcript:",
  "Masters certificate:",
  "Masters transcript:",
  "PhD Research Proposal:",
  "Curriculum Vitae (CV):",
];

const inputClass =
  "w-full px-4 py-3  text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b2e4a] shadow-sm transition-all duration-200";

const ApplyNow = () => {
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
   const [program, setProgram] = useState("")

  return (
    <div className="flex justify-center bg-gradient-to-r from-blue-900/90 via-orange-400/80 to-blue-900/90 min-h-screen items-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="w-full flex justify-center items-center h-32 bg-[#2b2e4a]">
          <h1 className="text-5xl text-white font-extrabold tracking-wide">Apply Now</h1>
        </div>

        <form className="flex flex-col gap-10 px-10 py-12">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <input type="text" placeholder="First Name" className={inputClass} />
            <input type="text" placeholder="Last Name" className={inputClass} />
            <input type="text" placeholder="Father's Name" className={inputClass} />
            <input type="text" placeholder="Mother's Name" className={inputClass} />
            <select className={inputClass}>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <select className={inputClass}>
              <option>Marital Status</option>
              <option>Single</option>
              <option>Married</option>
            </select>
            <input type="text" placeholder="Place of Birth" className={inputClass} />
            <input type="date" className={inputClass} />
            <input type="text" placeholder="Nationality" className={inputClass} />
            <input type="text" placeholder="Phone No." className={inputClass} />
          </div>

          {/* University Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">University and Programs</h2>
            <p className="text-sm text-gray-500">All fields in this section are required</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <select className={inputClass}>
                <option>Select University</option>
                {Universities.map((uni, index) => (
                  <option key={index}>{uni}</option>
                ))}
              </select>

              <select className={inputClass} value={program} onChange={(e)=> setProgram(e.target.value)}>
                <option>Select Program</option>
                <option>BS (14 Years)</option>
                <option>Master</option>
                <option>PhD</option>
              </select>

              <select className={inputClass}>
                <option>Select Course</option>
                {Courses.map((course, index) => (
                  <option key={index}>{course}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Email & Password */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">Account Details</h2>
            <p className="text-sm text-gray-500">All fields in this section are required</p>
            <input type="email" placeholder="Email" className={`${inputClass} mt-4 mb-6`} />

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`${inputClass} pr-12`}
                  ref={passwordRef}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <FaRegEye
                  className="absolute top-3.5 right-3 text-xl text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <div className="relative w-full">
                <input
                  type={confirmVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  className={`${inputClass} pr-12`}
                  ref={confirmPasswordRef}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
                <FaEye
                  className="absolute top-3.5 right-3 text-xl text-gray-500 cursor-pointer"
                  onClick={() => setConfirmVisible(!confirmVisible)}
                />
              </div>
            </div>
          </div>

          {/* Document Uploads */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">Documents</h2>
            <p className="text-sm text-gray-500 mb-4">Fields marked with (*) are required in PDF or image</p>
            <div className="grid text-sm text-center sm:text-center grid-cols-1 gap-4">
              {documents.map((label, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-5 sm:flex-row items-center justify-between border border-gray-300 bg-gray-50 rounded-lg px-4 py-3 hover:shadow-sm transition"
                >
                  <p className="text-gray-700 text-sm font-semibold" >{label}</p>
                  <input
                    type="file"
                    className="file:px-3 file:py-1 file:rounded-md file:bg-white file:border file:border-gray-300 file:text-gray-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end mt-6">
            <Link to="/contact">
              <button className="px-10 py-3 bg-[#F5891B] hover:bg-[#d77f18] text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                Apply Now
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
