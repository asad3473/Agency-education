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

const requiredDocument = [
  "Photo (.jpeg, .png, .jpg): *",
  "International Passport, Data page: *",
  "Higher/Secondary Certificate or Equivalent: *",
];
const documents = [
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
  // const passwordRef = useRef(null);
  // const confirmPasswordRef = useRef(null);
  // const [showPassword, setShowPassword] = useState(false);
  // const [confirmVisible, setConfirmVisible] = useState(false);
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    cnic: "",
    email: "",
    gender: "",
    maritalStatus: "",
    dob: "",
    nationality: "",
    contact: "",
    birthPlace: "",
    program: "",
    university: "",
    course: "",
    Photo: "",
    passportCopy: "",
    econdaryCertificate: "",
    englishCompetence: "",
    bsDegreeCertificate: "",
    bsTranscript: "",
    msCertificate: "",
    msTranscript: "",
    phdResearchProposal: "",
    cv: "",
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    if (
      !formData.contact ||
      !formData.firstName ||
      !formData.email ||
      !formData.lastName ||
      !formData.password
    ) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/applications/create-application",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          fatherName: formData.fatherName,
          motherName: formData.motherName,
          cnic: formData.cnic,
          gender: formData.gender,
          maritalStatus: formData.maritalStatus,
          dob: formData.dob,
          email: formData.email,
          nationality: formData.nationality,
          phoneNumber: formData.contact,
          birthPlace: formData.birthPlace,
          program: formData.program,
          university: formData.university,
          course: formData.course,
          Photo: formData.Photo,
          passportCopy: "",
          econdaryCertificate: "",
          englishCompetence: "",
          bsDegreeCertificate: "",
          bsTranscript: "",
          msCertificate: "",
          msTranscript: "",
          phdResearchProposal: "",
          cv: "",
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.contact,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      );

      console.log(
        "this form data ::",
        formData,
        " this is response from backend :: ",
        response
      );
    } catch (error) {
      console.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center bg-gradient-to-r from-blue-900/90 via-orange-400/80 to-blue-900/90 min-h-screen items-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="w-full flex justify-center items-center h-32 bg-[#2b2e4a]">
          <h1 className="text-5xl text-white font-extrabold tracking-wide">
            Apply Now
          </h1>
        </div>

        <form
          className="flex flex-col gap-10 px-10 py-12"
          onSubmit={submitHandle}
        >
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <input
              type="text"
              name="firstName"
              required
              placeholder="First Name"
              className={inputClass}
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              required
              placeholder="Last Name"
              className={inputClass}
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="fatherName"
              required
              placeholder="Father's Name"
              className={inputClass}
              value={formData.fatherName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="motherName"
              placeholder="Mother's Name"
              required
              className={inputClass}
              value={formData.motherName}
              onChange={handleChange}
            />
               <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className={inputClass}
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cnic"
              pattern="[0-9]{13,13}"
              minLength="13"
              maxLength="13"
              required
              placeholder="Enter ID Card Number"
              className={inputClass}
              value={formData.cnic}
              onChange={handleChange}
            />

            <select
              className={inputClass}
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <select
              className={inputClass}
              name="maritalStatus"
              required
              value={formData.maritalStatus}
              onChange={handleChange}
            >
              <option value="">Marital Status</option>
              <option>Single</option>
              <option>Married</option>
            </select>
            <input
              type="date"
              className={inputClass}
              name="dob"
              required
              placeholder="Date Of Birth"
              value={formData.dob}
              onChange={handleChange}
            />
            <input
              type="text"
              name="birthPlace"
              required
              placeholder="Place of Birth"
              className={inputClass}
              value={formData.birthPlace}
              onChange={handleChange}
            />
            <input
              type="text"
              name="nationality"
              required
              placeholder="Nationality"
              className={inputClass}
              value={formData.nationality}
              onChange={handleChange}
            />
            <input
              type="text"
              name="contact"
              required
              placeholder="Phone No."
              className={inputClass}
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          {/* University Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              University and Programs
            </h2>
            <p className="text-sm text-gray-500">
              All fields in this section are required
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <select
                className={inputClass}
                name="university"
                required
                value={formData.university}
                onChange={handleChange}
              >
                <option value=""> Select University</option>
                {Universities.map((uni, index) => (
                  <option key={index}>{uni}</option>
                ))}
              </select>

              <select
                className={inputClass}
                name="program"
                required
                value={formData.program}
                onChange={handleChange}
              >
                <option value="">Select Program</option>
                <option>BS (14 Years)</option>
                <option>Master</option>
                <option>PhD</option>
              </select>

              <select
                className={inputClass}
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                {Courses.map((course, index) => (
                  <option key={index}>{course}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Documents
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Fields marked with (*) are required in PDF or image
            </p>
            <div className="grid text-sm text-center sm:text-center grid-cols-1 gap-4">
              {requiredDocument.map((label, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-5 sm:flex-row items-center justify-between border border-gray-300 bg-gray-50 rounded-lg px-4 py-3 hover:shadow-sm transition"
                >
                  <p className="text-gray-700 text-sm font-semibold">{label}</p>
                  <input
                    type="file"
                    required
                    accept=".pdf,.jpg,.jpeg,.png"
                    name={label}
                    className="file:px-3 file:py-1 file:rounded-md file:bg-white file:border file:border-gray-300 file:text-gray-700"
                    onChange={handleChange}
                  />
                </div>
              ))}
              {documents.map((label, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-5 sm:flex-row items-center justify-between border border-gray-300 bg-gray-50 rounded-lg px-4 py-3 hover:shadow-sm transition"
                >
                  <p className="text-gray-700 text-sm font-semibold">{label}</p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    name={label}
                    className="file:px-3 file:py-1 file:rounded-md file:bg-white file:border file:border-gray-300 file:text-gray-700"
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end mt-6">
            <button
              className="px-10 py-3 bg-[#F5891B] hover:bg-[#d77f18] text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              type="submit"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
