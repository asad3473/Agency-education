import React, { useState } from 'react';
import { FaUniversity, FaGraduationCap, FaAward, FaMoneyBillWave, FaHome } from 'react-icons/fa';
import EastIntroduction from './EastIntroduction';
import EastPrograms from './EastPrograms';
import EastScholorships from './EastScholorships';
import EastTutionFee from './EastTutionFee';
import EastAccomodation from './EastAccomodation';
import { useAuth } from '../../../contextApi/contextApi';

export default function SuperEastHeader() {
  const [activeTab, setActiveTab] = useState("introduction");
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const tabs = [
    {
      id: "introduction",
      label: isArabic ? "مقدمة عن الجامعة" : "University Introduction",
      icon: <FaUniversity />
    },
    {
      id: "programs",
      label: isArabic ? "الأقسام / البرامج" : "Departments/Programs",
      icon: <FaGraduationCap />
    },
    {
      id: "scholarships",
      label: isArabic ? "المنح الدراسية" : "Scholarships",
      icon: <FaAward />
    },
    {
      id: "tuition",
      label: isArabic ? "الرسوم الدراسية" : "Tuition Fee",
      icon: <FaMoneyBillWave />
    },
    {
      id: "accommodation",
      label: isArabic ? "الإقامة" : "Accommodation",
      icon: <FaHome />
    },
  ];

  return (
    <div className='mt-4'>
      {/* Navigation Tabs */}
      <div className='rounded-sm bg-[#0A0851] p-4 mb-2 w-full sm:w-10/12 mx-auto'>
        <nav className={`flex flex-wrap justify-around items-center gap-4 sm:gap-6 md:gap-8 text-white text-sm sm:text-base ${isArabic ? 'rtl' : ''}`}>
          {tabs.map(tab => (
            <span
              key={tab.id}
              className={`cursor-pointer flex items-center gap-2 border-r-2 px-2 transition-colors ${isArabic ? 'flex-row-reverse' : ''} ${
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
        {activeTab === "introduction" && <EastIntroduction />}
        {activeTab === "programs" && <EastPrograms />}
        {activeTab === "scholarships" && <EastScholorships />}
        {activeTab === "tuition" && <EastTutionFee />}
        {activeTab === "accommodation" && <EastAccomodation />}
      </div>
    </div>
  );
}
