import React from 'react';
import { FaAward, FaUsers, FaHeart, FaRunning, FaGraduationCap } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';

const FinalUniversityScholorship = () => {
  const scholarships = [
    {
      title: "Automatic 50% Scholarship",
      description: "Granted to all international undergraduate students registering at FIU",
      icon: <GiMoneyStack className="text-3xl text-yellow-500" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Academic Excellence Scholarships",
      description: "50%, 75% or 100% off tuition fee each semester based on academic performance",
      icon: <FaAward className="text-3xl text-blue-600" />,
      bgColor: "bg-blue-100"
    },
    {
      title: "Siblings Discount",
      description: "25% discount for each sibling attending (proof of kinship required)",
      icon: <FaUsers className="text-3xl text-green-600" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Married Couples Discount",
      description: "25% discount for married couples attending together (marriage proof required)",
      icon: <FaHeart className="text-3xl text-red-500" />,
      bgColor: "bg-red-50"
    },
    {
      title: "Athletic Scholarships",
      description: "For students with national-level sports performance or joining FIU sports teams",
      icon: <FaRunning className="text-3xl text-purple-600" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "Graduate Scholarships",
      description: "For graduate students with minimum 3.50 CGPA (valid bachelor diploma required)",
      icon: <FaGraduationCap className="text-3xl text-indigo-600" />,
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0A0851] mb-4">Available Scholarships</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          FIU offers generous financial support to help international students achieve their academic dreams
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship, index) => (
          <div 
            key={index} 
            className={`${scholarship.bgColor} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {scholarship.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{scholarship.title}</h3>
              </div>
              <p className="text-gray-600 text-lg">{scholarship.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-[#0A0851] to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">How to Apply for Scholarships</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Submit your application for admission</li>
          <li>Include all required academic documents</li>
          <li>For special scholarships, provide supporting evidence</li>
          <li>Scholarships are automatically considered upon application</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-white text-[#0A0851] font-bold rounded-lg hover:bg-gray-100 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default FinalUniversityScholorship;

