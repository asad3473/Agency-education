import React, { useState } from 'react';
import { FaUniversity, FaGraduationCap, FaAward, FaMoneyBillWave, FaHome } from 'react-icons/fa';
import CyprusIntroduction from './CyprusIntroduction';
import CyprusPrograms from './CyprusPrograms';
import CyprusScholarship from './CyprusScholarship';
import CyprusTuition from './CyprusTuition';
import CyprusAccommodation from './CyprusAccommodation';

export default function CyprusHeader() {
  const [activeTab, setActiveTab] = useState("introduction");

  const tabs = [
    { id: "introduction", label: "University Introduction", icon: <FaUniversity /> },
    { id: "programs", label: "Departments/Programs", icon: <FaGraduationCap /> },
    { id: "scholarships", label: "Scholarships", icon: <FaAward /> },
    { id: "tuition", label: "Tuition Fee", icon: <FaMoneyBillWave /> },
    { id: "accommodation", label: "Accommodation", icon: <FaHome /> },
  ];

  return (
    <div className='mt-4'>
      {/* Navigation Tabs */}
      <div className='rounded-sm bg-[#0A0851] p-4 mb-2 w-full sm:w-10/12 mx-auto'>
        <nav className='flex flex-wrap justify-around items-center gap-4 sm:gap-6 md:gap-8 text-white text-sm sm:text-base'>
          {tabs.map(tab => (
            <span
              key={tab.id}
              className={`cursor-pointer flex items-center gap-2 border-r-2 px-2 transition-colors ${
                activeTab === tab.id ? 'text-[#F5891B]' : 'hover:text-[#F5891B]'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </span>
          ))}
        </nav>
      </div>

      {/* Conditional Rendering of Components */}
      <div className='w-full sm:w-11/12 mx-auto'>
        {activeTab === "introduction" && <CyprusIntroduction />}
        {activeTab === "programs" && <CyprusPrograms />}
        {activeTab === "scholarships" && <CyprusScholarship />}
        {activeTab === "tuition" && <CyprusTuition />}
        {activeTab === "accommodation" && <CyprusAccommodation />}
      </div>
    </div>
  );
}
