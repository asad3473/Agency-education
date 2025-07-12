import React from 'react';
import { FaUniversity, FaSchool, FaUserGraduate, FaUserTie, FaBriefcase } from 'react-icons/fa';

const CyprusPrograms = () => {
  // Organized programs data (same as your original structure)
  const programs = {
    'Associate Degree Programs': [
      'Computer Technologies and Programming',
      'Construction Technology',
      'First and Emergency Aid',
      'Public Relations and Advertising',
      'Radio & Tv Programming'
    ],
     'Undergraduate Programs': {
      'Faculty of Agricultural Sciences & Technologies': ['Plant Production and Technologies (BSc)'],
      'Faculty of Arts and Sciences': [
        'Molecular Biology & Genetics (BSc)',
        'Psychology (BA)',
        'Translation and Interpretation (BA)'
      ],
      'Faculty of Communication': [
        'Advertising and Public Relations (BA)',
        'Journalism (BA)',
        'Radio and Television (BA)',
        'Visual Communication Design (BA)'
      ],
      'Faculty of Economics & Administrative Sciences': [
        'Accounting and Finance (BSc)',
        'Business Administration (BA)',
        'International Relations (BA)',
        'Digital Media and Marketing (BA)',
        'Economics (BSc)'
      ],
      'Faculty of Education': [
        'English Language Teaching (BA)',
        'Computer and Instructional Technology Teaching Education (BSc)',
        'Pre School Teaching (BA)'
      ],
      'Faculty of Engineering': [
        'Artificial Intelligence Engineering',
        'Bioengineering (BSc)',
        'Biomedical Engineering (BSc)',
        'Civil Engineering (BSc)',
        'Computer Engineering (BSc)',
        'Electrical and Electronics Engineering (BSc)',
        'Energy Systems Engineering (BSc)',
        'Environmental Engineering (BSc)',
        'Information Systems Engineering (BSc)',
        'Management Engineering (BSc)',
        'Mechanical Engineering (BSc)',
        'Mechatronics Engineering (BSc)',
        'Medical Engineering (BSc)',
        'Petroleum & Natural Gas Engineering (BSc)',
        'Software Engineering (BSc)'
      ],
      'Faculty of Fine Arts, Design and Architecture': [
        'Architecture (BA)',
        'Graphic Design (BA)',
        'Interior Design (BA)'
      ],
      'Faculty of Health Sciences': [
        'Midwifery',
        'Nutrition and Dietetics',
        'Nursing (BSc)',
        'Social Work (BA)',
        'Physiotherapy and Rehabilitation (BSc)'
      ],
      'Faculty of Law': ['International Law (LLB)'],
      'Faculty of Medicine': ['Medicine'],
      'Faculty of Dentistry': ['Dentistry (Dent)'],
      'Faculty of Pharmacy': ['Pharmacy (MPharm)', 'Pharmacy (Pharm D.)'],
      'School of Applied Sciences': [
        'Information Technologies (BSc)',
        'Information Security Technologies (BSc)',
        'Management Information Systems (BSc)',
        'Computer Technologies and Programming (Technician)'
      ],
      'School of Tourism & Hotel Management': [
        'Tourism and Hotel Management (BA)',
        'Gastronomy and Culinary Arts (BA)'
      ]
    },
    'Masters Programs': [
      'Accounting and Finance (MSc/MAF)',
      'Architecture (MArch)',
      'Bioengineering (MSc)',
      'Business Administration(MBA)',
      'Business Administration*(Dual MBA program with EU)',
      'Chemistry (MSc)',
      'Civil Engineering (MSc)',
      'Communication and Media Studies (MA)',
      'Computer Engineering (MSc)',
      'Economy (MSc)',
      'Educational Administration and Planning (MA)',
      'Electrical and Electronics Engineering (MSc)',
      'Energy Systems Engineering (MSc)',
      'Engineering Management (MSc)',
      'English Language and Literature (MA)',
      'English Language Teaching (MA)',
      'Environmental Engineering (MSc)g',
      'Graphic Design (MA)',
      'Guidance and Psychological Counseling (MA)',
      'Health Care Organizations Management (MA)',
      'Information and Communication Technologies in Education (MSc)',
      'Information Systems Engineering (MSc)',
      'Information Technologies (MSc)',
      'Interior Architecture (MID)',
      'Interior Design (MID)',
      'International Banking and Finance (MA)',
      'International Law (LLM)',
      'International Relations (MA)',
      'Management Information Systems (MSc)',
      'Marketing Management (MSc)',
      'Mechanical Engineering (MSc)',
      'Pharmacognosy (MSc)',
      'Plant Sciences and Technologies (MSc)',
      'Social Work',
      'Tourism and Hospitality Management (MA)'
    ],
    'Doctoral Programs (PhD)': [
      'Architecture',
      'Bioengineering',
      'Business Administration',
      'Civil Engineering',
      'Communication and Media Studies',
      'Computer Engineering',
      'Electrical and Electronics Engineering',
      'Energy Systems Engineering',
      'Health Care Organizations Management',
      'English Language Teaching',
      'Environmental Engineering',
      'Environmental Sciences',
      'International Relations',
      'Management Information Systems',
      'Pharmaceutical Sciences',
      'Tourism Management'
    ],
    'Professional Doctorates (DBA)': [
      'Business Administration',
      'Health Care Organizations Management'
    ]
  };

  // Using only Font Awesome icons that definitely exist
  const programIcons = {
    'Associate Degree Programs': <FaSchool className="text-white text-2xl" />,
    'Undergraduate Programs': <FaUniversity className="text-white text-2xl" />,
    'Masters Programs': <FaUserGraduate className="text-white text-2xl" />,
    'Doctoral Programs (PhD)': <FaUserTie className="text-white text-2xl" />,
    'Professional Doctorates (DBA)': <FaBriefcase className="text-white text-2xl" />
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[#0A0851]">
          Our Academic Programs
        </h1>
        <div className="w-24 h-1 bg-[#F5891B] mx-auto"></div>
      </div>

      <div className="space-y-8">
        {Object.entries(programs).map(([programType, programData]) => (
          <div key={programType} className="rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="bg-gradient-to-r from-[#0A0851] to-[#1A1A8A] p-5 flex items-center">
              <div className="bg-[#F5891B] p-3 rounded-lg mr-4">
                {programIcons[programType]}
              </div>
              <h2 className="text-2xl font-bold text-white">
                {programType}
              </h2>
            </div>

            <div className="p-6 bg-white">
              {Array.isArray(programData) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {programData.map((program) => (
                    <div key={program} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <div className="flex-shrink-0 mt-1">
                        <FaUniversity className="text-[#F5891B]" />
                      </div>
                      <p className="ml-3 text-gray-800 font-medium">{program}</p>
                    </div>
                  ))}
                </div>
              ) : (
                Object.entries(programData).map(([faculty, facultyPrograms]) => (
                  <div key={faculty} className="mb-8 last:mb-0">
                    <h3 className="text-xl font-semibold text-[#0A0851] mb-4 pb-2 border-b border-gray-200">
                      {faculty}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {facultyPrograms.map((program) => (
                        <div key={program} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                          <div className="flex-shrink-0 mt-1">
                            <FaUniversity className="text-[#F5891B]" />
                          </div>
                          <p className="ml-3 text-gray-800 font-medium">{program}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyprusPrograms;