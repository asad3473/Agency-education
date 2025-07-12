import React from 'react';
import { FaEuroSign, FaUniversity, FaGraduationCap, FaFlask, FaTooth, FaMedkit } from 'react-icons/fa';

const CyprusTuition = () => {
  // Tuition data in array structure
  const tuitionData = {
    overview: {
      description: "CIU offers affordable tuition with 50% automatic scholarships for international students and flexible payment plans.",
      highlights: [
        "50% automatic scholarship for all international students",
        "Monthly installment payment options available",
        "All-Inclusive Package (tuition + accommodation + meals) from €4500/year"
      ]
    },
    undergraduate: [
      { program: "Standard Programs", fullFee: "€5,843", scholarshipFee: "€3,099", icon: <FaUniversity /> },
      { program: "Pharmacy", fullFee: "€7,844", scholarshipFee: "€4,099", icon: <FaFlask /> },
      { program: "Dentistry", fullFee: "€10,645", scholarshipFee: "€5,500", icon: <FaTooth /> },
      { program: "Medicine", fullFee: "€12,955", scholarshipFee: "€6,655", icon: <FaMedkit /> }
    ],
    masters: {
      withThesis: {
        fees: [
          { item: "Fee per course", amount: "€350" },
          { item: "Thesis fee", amount: "€1,050" },
          { item: "Seminar fee", amount: "€120" },
          { item: "Registration fee", amount: "€245*" },
          { item: "Student Union fee", amount: "€50" }
        ],
        note: "*€195 after first year. VAT applies. Additional €335 for Environmental programs."
      },
      withoutThesis: {
        fees: [
          { item: "Fee per course", amount: "€350" },
          { item: "Term project", amount: "€120" },
          { item: "Registration fee", amount: "€245*" },
          { item: "Student Union fee", amount: "€50" }
        ],
        note: "*€195 after first year. VAT applies. Additional €335 for Environmental programs."
      }
    },
    phd: {
      fees: [
        { item: "Fee per course", amount: "€650" },
        { item: "Thesis (4 semesters)", amount: "€2,600" },
        { item: "Seminar fee", amount: "€200" },
        { item: "Registration fee", amount: "€245*" },
        { item: "Student Union fee", amount: "€50" }
      ],
      note: "*€195 after first year. VAT applies. Additional €480 for Environmental programs."
    }
  };

  const calculateSavings = (fullFee, scholarshipFee) => {
    const full = parseInt(fullFee.replace(/[^\d]/g, ''));
    const scholarship = parseInt(scholarshipFee.replace(/[^\d]/g, ''));
    return Math.round(((full - scholarship) / full) * 100);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-20 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-indigo-500 mb-6">
          Tuition Fees at CIU
        </h1>
        <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-blue-700 to-indigo-900 mx-auto mb-8 rounded-full"></div>
        <p className="text-sx sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          World-class education with <span className="font-semibold text-indigo-800">automatic scholarships</span> for international students
        </p>
      </div>

      {/* Overview Card */}
      <div className="relative mb-24 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl opacity-20 blur transition-all duration-300 group-hover:opacity-30"></div>
        <div className="relative bg-white rounded-2xl p-10 shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-3xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-900 mb-6">Financial Benefits</h2>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">{tuitionData.overview.description}</p>
              <ul className="space-y-4">
                {tuitionData.overview.highlights.map((item, index) => (
                  <li key={index} className="flex items-start transition-transform duration-200 hover:translate-x-1">
                    <span className="bg-blue-100 p-1 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-xl shadow-lg text-center text-white transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="text-6xl mb-6 flex justify-center transition-transform duration-500 hover:rotate-12">
                <FaEuroSign className="opacity-90" />
              </div>
              <h3 className="text-2xl font-bold mb-3">All-Inclusive Package</h3>
              <p className="text-3xl font-extrabold mb-3">€4500/year</p>
              <p className="text-sm opacity-90">(Tuition + Accommodation + Meals + Insurance)</p>
              <div className="mt-6 animate-bounce-slow">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-white text-blue-700 rounded-full">
                  BEST VALUE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Undergraduate Programs */}
      <div className="mb-24">
        <div className="flex items-center mb-12 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-3 rounded-full mr-4 shadow-md transition-transform duration-300 hover:scale-110">
            <FaGraduationCap className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-900">
            Undergraduate Programs
          </h2>
        </div>
        
        {/* Table View */}
        <div className="overflow-x-auto mb-16 bg-white rounded-xl shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
              <tr>
                <th className="px-8 py-5 text-left text-sx font-bold text-nowrap text-white uppercase tracking-wider">Program</th>
                <th className="px-8 py-5 text-center text-sx font-bold text-nowrap text-white uppercase tracking-wider">Full Fee</th>
                <th className="px-8 py-5 text-center text-sx font-bold text-nowrap text-white uppercase tracking-wider">With Scholarship</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tuitionData.undergraduate.map((program, index) => (
                <tr 
                  key={index} 
                  className="transition-all duration-200 hover:bg-gray-50 hover:shadow-inner"
                >
                  <td className="px-8 py-6 whitespace-nowrap flex items-center">
                    <span className="mr-5 text-blue-500 text-xl transition-transform duration-300 hover:scale-125">{program.icon}</span>
                    <span className="text-sx font-medium text-gray-900">{program.program}</span>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-center text-sx font-medium text-gray-700">
                    <span className="line-through">{program.fullFee}</span>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-center">
                    <span className="text-sx font-bold text-green-600 bg-green-50 px-4 py-2 rounded-full transition-all duration-300 hover:bg-green-100">
                      {program.scholarshipFee}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tuitionData.undergraduate.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="text-blue-500 text-3xl mb-6 transition-transform duration-500 hover:rotate-12 hover:text-blue-600">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{program.program}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sx">Full Fee:</span>
                    <span className="font-medium text-gray-700 text-sx line-through">{program.fullFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sx">With Scholarship:</span>
                    <span className="text-green-600 font-bold text-sx">{program.scholarshipFee}</span>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-200">
                  <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full transition-all duration-300 hover:bg-blue-200">
                    Save {calculateSavings(program.fullFee, program.scholarshipFee)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Graduate Programs */}
      <div className="space-y-24">
        {/* Masters Programs */}
        <div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-indigo-900 mb-12 animate-fade-in">
            Master's Degree Programs
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* With Thesis */}
            <div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 relative transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-5 transition-opacity duration-300 hover:opacity-10"></div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 relative">
                <h3 className="text-xl font-bold text-white">Programs With Thesis</h3>
              </div>
              <div className="p-8 relative">
                <ul className="space-y-5">
                  {tuitionData.masters.withThesis.fees.map((fee, index) => (
                    <li 
                      key={index} 
                      className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0 transition-transform duration-200 hover:translate-x-1"
                    >
                      <span className="text-gray-700 text-sx">{fee.item}</span>
                      <span className="font-medium text-gray-900 text-sx">{fee.amount}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 bg-blue-50 p-4 rounded-lg transition-all duration-300 hover:bg-blue-100">
                  <p className="text-sm text-gray-600">{tuitionData.masters.withThesis.note}</p>
                </div>
              </div>
            </div>

            {/* Without Thesis */}
            <div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 relative transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-5 transition-opacity duration-300 hover:opacity-10"></div>
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-6 relative">
                <h3 className="text-xl font-bold text-white">Programs Without Thesis</h3>
              </div>
              <div className="p-8 relative">
                <ul className="space-y-5">
                  {tuitionData.masters.withoutThesis.fees.map((fee, index) => (
                    <li 
                      key={index} 
                      className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0 transition-transform duration-200 hover:translate-x-1"
                    >
                      <span className="text-gray-700 text-sx">{fee.item}</span>
                      <span className="font-medium text-gray-900 text-sx">{fee.amount}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 bg-indigo-50 p-4 rounded-lg transition-all duration-300 hover:bg-indigo-100">
                  <p className="text-sm text-gray-600">{tuitionData.masters.withoutThesis.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PhD Programs */}
        <div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-indigo-900 mb-12 animate-fade-in">
            PhD Programs
          </h2>
          <div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 relative transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-900 opacity-5 transition-opacity duration-300 hover:opacity-10"></div>
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-6 relative">
              <h3 className="text-xl font-bold text-white">Program Fees</h3>
            </div>
            <div className="p-8 relative">
              <ul className="space-y-5">
                {tuitionData.phd.fees.map((fee, index) => (
                  <li 
                    key={index} 
                    className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0 transition-transform duration-200 hover:translate-x-1"
                  >
                    <span className="text-gray-700 text-sx">{fee.item}</span>
                    <span className="font-medium text-gray-900 text-sx">{fee.amount}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-purple-50 p-4 rounded-lg transition-all duration-300 hover:bg-purple-100">
                <p className="text-sm text-gray-600">{tuitionData.phd.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        className="mt-28 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-3xl"
      >
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-white opacity-10 rounded-full transition-all duration-1000 hover:scale-150"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white opacity-10 rounded-full transition-all duration-1000 hover:scale-150"></div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 relative z-10">Ready to Start Your Journey at CIU?</h2>
        <p className="mb-8 max-w-2xl mx-auto text-[18px] sm:text-sx leading-relaxed opacity-90 relative z-10">
          Our admissions team is ready to help you with personalized tuition information and flexible payment plans.
        </p>
        <button 
          className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg text-sx sm:text-lg relative z-10 hover:scale-105 hover:shadow-xl active:scale-95"
        >
          Request Information
        </button>
      </div>
    </div>
  );
};

export default CyprusTuition;