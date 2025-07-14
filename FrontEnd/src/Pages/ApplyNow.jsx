import React, { useState } from "react";
import axios from "axios";

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

const BSCourses = [
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

const MasterCourses = [
  "MS in Computer Science",
  "MS in Software Engineering",
  "MS in Data Science",
  "MS in Artificial Intelligence",
  "MS in Cyber Security",
  "MS in Information Systems",
  "MS in Network Engineering",
];

const PhDCourses = [
  "PhD in Computer Science",
  "PhD in Software Engineering",
  "PhD in Artificial Intelligence",
  "PhD in Data Science",
  "PhD in Cyber Security",
  "PhD in Information Technology",
];

const requiredDocument = [
  {
    name: "photo",
    tittle: "Photo (.jpeg, .png, .jpg): *",
  },
  {
    name: "passportCopy",
    tittle: "International Passport, Data page: *",
  },
  {
    name: "secondaryCertificate",
    tittle: "Higher/Secondary Certificate or Equivalent: *",
  },
];

const bsDocuments = [
  {
    name: "englishCompetence",
    tittle: "Evidence of English Language Competence:",
  },
];

const masterDocuments = [
  {
    name: "englishCompetence",
    tittle: "Evidence of English Language Competence:",
  },
  {
    name: "bsDegreeCertificate",
    tittle: "Bachelor's Degree Certificate:",
  },
  {
    name: "bsTranscript",
    tittle: "Bachelor's Transcript:",
  },
  {
    name: "cv",
    tittle: "Curriculum Vitae (CV):",
  },
  {
    name: "statementOfPurpose",
    tittle: "Statement of Purpose:",
  },
];

const phdDocuments = [
  {
    name: "englishCompetence",
    tittle: "Evidence of English Language Competence:",
  },
  {
    name: "bsDegreeCertificate",
    tittle: "Bachelor's Degree Certificate:",
  },
  {
    name: "bsTranscript",
    tittle: "Bachelor's Transcript:",
  },
  {
    name: "msCertificate",
    tittle: "Masters certificate:",
  },
  {
    name: "msTranscript",
    tittle: "Masters transcript:",
  },
  {
    name: "phdResearchProposal",
    tittle: "PhD Research Proposal:",
  },
  {
    name: "cv",
    tittle: "Curriculum Vitae (CV):",
  },
  {
    name: "publications",
    tittle: "Research Publications (if any):",
  },
];

const inputClass =
  "w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b2e4a] shadow-sm transition-all duration-200";

const ApplyNow = () => {
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
    phoneNumber: "",
    birthPlace: "",
    program: "",
    university: "",
    course: "",
    photo: null,
    passportCopy: null,
    secondaryCertificate: null,
    englishCompetence: null,
    bsDegreeCertificate: null,
    bsTranscript: null,
    msCertificate: null,
    msTranscript: null,
    phdResearchProposal: null,
    cv: null,
    statementOfPurpose: null,
    publications: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));

    // Clear error when user makes changes
    if (error) setError(null);
  };

  const getCoursesByProgram = () => {
    switch (formData.program) {
      case "BS (14 Years)":
        return BSCourses;
      case "Master":
        return MasterCourses;
      case "PhD":
        return PhDCourses;
      default:
        return [];
    }
  };

  const getProgramDocuments = () => {
    switch (formData.program) {
      case "BS (14 Years)":
        return bsDocuments;
      case "Master":
        return masterDocuments;
      case "PhD":
        return phdDocuments;
      default:
        return [];
    }
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return "Please fill in all required personal information fields";
    }

    if (!formData.program || !formData.university || !formData.course) {
      return "Please select university and program details";
    }

    if (!formData.photo || !formData.passportCopy || !formData.secondaryCertificate) {
      return "Please upload all required documents";
    }

    return null;
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formPayload.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/applications/create-application",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setSuccess(true);
      console.log()
      // Reset form after successful submission
      setFormData({
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
        phoneNumber: "",
        birthPlace: "",
        program: "",
        university: "",
        course: "",
        photo: null,
        passportCopy: null,
        secondaryCertificate: null,
        englishCompetence: null,
        bsDegreeCertificate: null,
        bsTranscript: null,
        msCertificate: null,
        msTranscript: null,
        phdResearchProposal: null,
        cv: null,
        statementOfPurpose: null,
        publications: null,
      });
    } catch (error) {
      console.error("Submission error:", error);
      setError(
        error?.response?.data?.message ||
        error.message ||
        "Failed to submit application. Please try again."
      );
    } finally {
      setIsLoading(false);
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

        {/* Status Messages */}
        {error && (
          <div className="px-10 pt-6">
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p>{error}</p>
            </div>
          </div>
        )}

        {success && (
          <div className="px-10 pt-6">
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
              <p>Application submitted successfully!</p>
            </div>
          </div>
        )}

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
              type="email"
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
              type="tel"
              name="phoneNumber"
              required
              placeholder="Phone No."
              className={inputClass}
              value={formData.phoneNumber}
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
                disabled={!formData.program}
              >
                <option value="">Select Course</option>
                {getCoursesByProgram().map((course, index) => (
                  <option key={index}>{course}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Documents Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Documents
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Fields marked with (*) are required in PDF or image
            </p>
            <div className="grid text-sm text-center sm:text-center grid-cols-1 gap-4">
              {requiredDocument.map((documents, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-5 sm:flex-row items-center justify-between border border-gray-300 bg-gray-50 rounded-lg px-4 py-3 hover:shadow-sm transition"
                >
                  <p className="text-gray-700 text-sm font-semibold">
                    {documents.tittle}
                  </p>
                  <input
                    type="file"
                    required
                    placeholder={documents.tittle}
                    accept=".pdf,.jpg,.jpeg,.png"
                    name={documents.name}
                    className="file:px-3 file:py-1 file:rounded-md file:bg-white file:border file:border-gray-300 file:text-gray-700"
                    onChange={handleChange}
                  />
                </div>
              ))}
              
              {formData.program ? (
                getProgramDocuments().map((document, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-5 sm:flex-row items-center justify-between border border-gray-300 bg-gray-50 rounded-lg px-4 py-3 hover:shadow-sm transition"
                  >
                    <p className="text-gray-700 text-sm font-semibold">{document.tittle}</p>
                    <input
                      type="file"
                      placeholder={document.tittle}
                      accept=".pdf,.jpg,.jpeg,.png"
                      name={document.name}
                      className="file:px-3 file:py-1 file:rounded-md file:bg-white file:border file:border-gray-300 file:text-gray-700"
                      onChange={handleChange}
                    />
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">
                  Please select a program to see required documents
                </div>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end mt-6">
            <button
              className={`px-10 py-3 bg-[#F5891B] text-white text-lg font-semibold rounded-lg shadow-lg transition-transform duration-300 flex items-center justify-center min-w-32 ${
                isLoading ? "opacity-75" : "hover:bg-[#d77f18] hover:scale-105"
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Apply Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;