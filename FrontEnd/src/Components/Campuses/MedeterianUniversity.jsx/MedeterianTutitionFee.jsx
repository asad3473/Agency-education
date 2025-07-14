import React from 'react';
import { FaEuroSign, FaUniversity, FaGraduationCap, FaFlask, FaTooth, FaMedkit } from 'react-icons/fa';

const MedeterianTutitionFee = () => {
  const tuitionData = {
    overview: {
      description: "EMU offers affordable tuition with 50% automatic scholarships for international students and flexible payment plans.",
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0A0851] mb-4">Tuition Fees at EMU</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Affordable education with automatic scholarships for international students
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12 shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-[#0A0851] mb-4">Financial Overview</h2>
            <p className="text-gray-700 mb-4">{tuitionData.overview.description}</p>
            <ul className="space-y-2">
              {tuitionData.overview.highlights.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-inner text-center">
            <div className="text-5xl text-blue-500 mb-4 flex justify-center">
              <FaEuroSign />
            </div>
            <h3 className="text-xl font-bold mb-2">All-Inclusive Package</h3>
            <p className="text-gray-600 mb-2">From €4500/year</p>
            <p className="text-sm text-gray-500">(Tuition + Accommodation + Meals + Insurance)</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[#0A0851] mb-6 flex items-center">
          <FaGraduationCap className="mr-3" />
          Undergraduate Programs
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-[#0A0851] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Program</th>
                <th className="py-3 px-4 text-right">Full Fee</th>
                <th className="py-3 px-4 text-right">With 50% Scholarship</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tuitionData.undergraduate.map((program, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-4 px-4 flex items-center">
                    <span className="mr-3 text-blue-500">{program.icon}</span>
                    {program.program}
                  </td>
                  <td className="py-4 px-4 text-right font-medium">{program.fullFee}</td>
                  <td className="py-4 px-4 text-right text-green-600 font-semibold">{program.scholarshipFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tuitionData.undergraduate.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-blue-500 text-3xl mb-3">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.program}</h3>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600">Full Fee:</span>
                  <span className="font-medium">{program.fullFee}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">With Scholarship:</span>
                  <span className="text-green-600 font-semibold">{program.scholarshipFee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        <div>
          <h2 className="text-3xl font-bold text-[#0A0851] mb-6">Master's Degree Programs</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-blue-100 p-4">
                <h3 className="text-xl font-bold text-[#0A0851]">Programs With Thesis</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tuitionData.masters.withThesis.fees.map((fee, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-700">{fee.item}</span>
                      <span className="font-medium">{fee.amount}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500">{tuitionData.masters.withThesis.note}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-indigo-100 p-4">
                <h3 className="text-xl font-bold text-[#0A0851]">Programs Without Thesis</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tuitionData.masters.withoutThesis.fees.map((fee, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-700">{fee.item}</span>
                      <span className="font-medium">{fee.amount}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500">{tuitionData.masters.withoutThesis.note}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#0A0851] mb-6">PhD Programs</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-purple-100 p-4">
              <h3 className="text-xl font-bold text-[#0A0851]">Program Fees</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {tuitionData.phd.fees.map((fee, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-gray-700">{fee.item}</span>
                    <span className="font-medium">{fee.amount}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500">{tuitionData.phd.note}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-[#0A0851] rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey at EMU?</h2>
        <p className="mb-6 max-w-2xl mx-auto">Contact our admissions team for personalized tuition information and payment plans.</p>
        <button className="px-8 py-3 bg-white text-[#0A0851] font-bold rounded-lg hover:bg-gray-100 transition-colors">
          Request Information
        </button>
      </div>
    </div>
  );
};

export default MedeterianTutitionFee;
