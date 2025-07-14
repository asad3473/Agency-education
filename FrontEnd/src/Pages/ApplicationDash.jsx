import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const tableHeadings = [
  { id: 1, key: "id", label: "ID" },
  { id: 2, key: "rollNo", label: "Roll No" },
  { id: 3, key: "firstName", label: "First Name" },
  { id: 4, key: "lastName", label: "Last Name" },
  { id: 5, key: "university", label: "University Name" },
  { id: 6, key: "degree", label: "Degree Name" },
  { id: 7, key: "program", label: "Program Name" },
  { id: 8, key: "startDate", label: "Enrollment Date" },
];

const initialStudents = [
  {
    id: 1,
    rollNo: "F23BSEEN1E02003",
    name: "Muhammad Umair",
    dob: "2005-09-01",
    cnic: "3120219112417",
    email: "umair@gmail.com",
    university: "Islamia University of BWP",
    degree: "Software Engineering",
    program: "BS",
    semester: "5th Semester",
    fee: "70,000/-",
    duration: "4 Years",
    startDate: "2023-08-23",
    endDate: "2027-08-23",
  },
  {
    id: 2,
    rollNo: "F23BSEEN1E02004",
    name: "Ali Raza",
    dob: "2004-07-15",
    cnic: "3120219112420",
    email: "ali@example.com",
    university: "COMSATS Lahore",
    degree: "Computer Science",
    program: "BS",
    semester: "3rd Semester",
    fee: "85,000/-",
    duration: "4 Years",
    startDate: "2023-08-23",
    endDate: "2027-08-23",
  },
  {
    id: 3,
    rollNo: "F23BSEEN1E02005",
    name: "Ghulam Mustafa",
    dob: "2004-07-15",
    cnic: "3120219112421",
    email: "mustafa@example.com",
    university: "COMSATS Lahore",
    degree: "Computer Science",
    program: "BS",
    semester: "3rd Semester",
    fee: "85,000/-",
    duration: "4 Years",
    startDate: "2023-08-23",
    endDate: "2027-08-23",
  },
 
];

const ApplicationDash = () => {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editedStudent, setEditedStudent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const showData = (id) => {
    const student = students.find((item) => item.id === id);
    setSelectedStudent(student);
    setEditedStudent({ ...student });
    setIsEditing(false);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedStudent(null);
    setEditedStudent(null);
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  const handleChange = (key, value) => {
    setEditedStudent((prev) => {
      let newName = prev.name;
      if (key === "firstName") {
        newName = `${value} ${prev.name.split(" ")[1] || ""}`;
      } else if (key === "lastName") {
        newName = `${prev.name.split(" ")[0]} ${value}`;
      }
      return {
        ...prev,
        [key]: value,
        name: key === "firstName" || key === "lastName" ? newName : prev.name,
      };
    });
  };

  const handleSubmit = () => {
    const updated = students.map((stu) =>
      stu.id === editedStudent.id ? { ...editedStudent } : stu
    );
    setStudents(updated);
    closePopup();
  };

  const handleDelete = () => {
    const updated = students.filter((stu) => stu.id !== selectedStudent.id);
    setStudents(updated);
    closePopup();
  };

  const filteredStudents = students.filter((student) => {
    const lower = searchTerm.toLowerCase();
    return (
      student.rollNo.toLowerCase().includes(lower) ||
      student.name.toLowerCase().includes(lower) ||
      student.university.toLowerCase().includes(lower) ||
      student.degree.toLowerCase().includes(lower) ||
      student.program.toLowerCase().includes(lower)
    );
  });

  return (
    <>
      <div className="relative p-6 md:p-10 bg-gray-50 min-h-screen">
     <div className="">
           <div className="flex xl:gap-10 gap-5 flex-col justify-center items-center xl:max-w-[80vw] mx-auto xl:justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Students Application Detail
        </h1>

        <div className="w-xs  border-2 border-gray-400 rounded-sm flex items-center px-2 bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-2 rounded-sm focus:outline-none w-60"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CiSearch className="text-2xl" />
        </div>
           </div>
     </div>

        <div className="overflow-auto mt-10 rounded-lg shadow">
          <table className="min-w-[1000px] w-full bg-white border-2 border-gray-300">
            <thead className="bg-gray-200 text-gray-700 text-sm">
              <tr>
                {tableHeadings.map((heading) => (
                  <th
                    key={heading.id}
                    className="py-3 px-4 border border-gray-400 whitespace-nowrap"
                  >
                    {heading.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => {
                  const [firstName, lastName] = student.name.split(" ");
                  return (
                    <tr
                      key={student.id}
                      className="hover:bg-gray-100 cursor-pointer transition"
                      onClick={() => showData(student.id)}
                    >
                      <td className="py-3 px-4 border">{student.id}</td>
                      <td className="py-3 px-4 border">{student.rollNo}</td>
                      <td className="py-3 px-4 border">{firstName}</td>
                      <td className="py-3 px-4 border">{lastName}</td>
                      <td className="py-3 px-4 border">{student.university}</td>
                      <td className="py-3 px-4 border">{student.degree}</td>
                      <td className="py-3 px-4 border">{student.program}</td>
                      <td className="py-3 px-4 border">{student.startDate}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={tableHeadings.length}
                    className="text-center py-6 text-gray-500"
                  >
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showPopup && editedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative text-sm bg-white rounded-lg p-6 w-[90%] md:w-[70%] max-w-4xl text-gray-800 shadow-lg">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-red-600"
            >
              <MdOutlineCancel />
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">
              Student Detail
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { label: "ID", key: "id", readonly: true },
                { label: "Roll No", key: "rollNo" },
                { label: "First Name", key: "firstName" },
                { label: "Last Name", key: "lastName" },
                { label: "University", key: "university" },
                { label: "Degree", key: "degree" },
                { label: "Program", key: "program" },
                { label: "Enrollment Date", key: "startDate", type: "date" },
              ].map(({ label, key, readonly, type }) => (
                <div key={key} className="flex flex-col gap-2">
                  <label>{label}</label>
                  <input
                    type={type || "text"}
                    readOnly={readonly || !isEditing}
                    className="border px-3 py-2 rounded w-full"
                    value={
                      key === "firstName"
                        ? editedStudent.name.split(" ")[0]
                        : key === "lastName"
                        ? editedStudent.name.split(" ")[1] || ""
                        : editedStudent[key]
                    }
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                className="px-5 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-sm font-semibold"
                onClick={isEditing ? handleSubmit : handleEdit}
              >
                {isEditing ? "Submit" : "Edit"}
              </button>
              <button
                className="px-5 py-2 bg-red-500 hover:bg-red-400 text-white rounded-sm font-semibold"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplicationDash;
