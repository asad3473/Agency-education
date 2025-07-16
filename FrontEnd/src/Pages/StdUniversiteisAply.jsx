import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";

const applications = [
  {
    id: 1,
    university: "Islamia University of BWP",
    program: "Software Engineering",
    date: "2025-07-14",
  },
];

const StdUniversiteisAply = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-wide mb-2">
          Dear, Muhammad Umair
        </h1>
        <p className="text-xl opacity-90">
          Your Applied Universities Detail
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full text-left bg-white text-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-[#243b55] text-white uppercase text-sm">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">University</th>
              <th className="px-6 py-4">Program</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">View</th>
              <th className="px-6 py-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b border-gray-200 hover:bg-gray-100 transition"
              >
                <td className="px-6 py-4 font-medium">{app.id}</td>
                <td className="px-6 py-4">{app.university}</td>
                <td className="px-6 py-4">{app.program}</td>
                <td className="px-6 py-4">{app.date}</td>
                <td className="px-6 py-4">
                  <button className="flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold">
                    <FaPenToSquare />
                    View
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold">
                    <AiOutlineDelete />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StdUniversiteisAply;
