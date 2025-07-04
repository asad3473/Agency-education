import React from 'react';
import { FaUniversity, FaSchool, FaUserGraduate, FaUserTie, FaBriefcase } from 'react-icons/fa';

const BAUprogram = () => {
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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#0A0851]">
        Our Academic Programs
      </h1>

      <div className="space-y-8">
        {Object.entries(programs).map(([programType, programData]) => (
          <div key={programType} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#0A0851] p-4 flex items-center">
              {programIcons[programType]}
              <h2 className="ml-3 text-xl font-semibold text-white">
                {programType}
              </h2>
            </div>

            <div className="p-6">
              {Array.isArray(programData) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {programData.map((program) => (
                    <div key={program} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FaUniversity className="text-[#F5891B]" />
                      </div>
                      <p className="ml-2 text-gray-700">{program}</p>
                    </div>
                  ))}
                </div>
              ) : (
                Object.entries(programData).map(([faculty, facultyPrograms]) => (
                  <div key={faculty} className="mb-6">
                    <h3 className="text-lg font-medium text-[#0A0851] mb-3 border-b pb-1">
                      {faculty}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {facultyPrograms.map((program) => (
                        <div key={program} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <FaUniversity className="text-[#F5891B]" />
                          </div>
                          <p className="ml-2 text-gray-700">{program}</p>
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

export default BAUprogram;
