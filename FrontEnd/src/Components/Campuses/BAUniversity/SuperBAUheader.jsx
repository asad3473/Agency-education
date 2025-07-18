import React, { useState } from 'react';
import { FaUniversity, FaGraduationCap, FaAward, FaMoneyBillWave, FaHome } from 'react-icons/fa';
import BAUintroduction from './BAUintroduction';
import BAUprogram from './BAUprogram';
import BAUScholorship from './BAUScholorship';
import BAUtutionFee from './BAUtutionFee';
import BAUaccomodation from './BAUaccomodation';
import { useAuth } from '../../../contextApi/contextApi';

export default function SuperBAUheader() {
  const [activeTab, setActiveTab] = useState("introduction");
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const tabs = [
    { id: "introduction", label: isArabic ? "مقدمة عن الجامعة" : "University Introduction", icon: <FaUniversity /> },
    { id: "programs", label: isArabic ? "الأقسام / البرامج" : "Departments/Programs", icon: <FaGraduationCap /> },
    { id: "scholarships", label: isArabic ? "المنح الدراسية" : "Scholarships", icon: <FaAward /> },
    { id: "tuition", label: isArabic ? "رسوم التعليم" : "Tuition Fee", icon: <FaMoneyBillWave /> },
    { id: "accommodation", label: isArabic ? "السكن" : "Accommodation", icon: <FaHome /> },
  ];

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className={`${isArabic ? 'text-right' : 'text-left'} mt-4`}>
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
        {activeTab === "introduction" && <BAUintroduction />}
        {activeTab === "programs" && <BAUprogram />}
        {activeTab === "scholarships" && <BAUScholorship />}
        {activeTab === "tuition" && <BAUtutionFee />}
        {activeTab === "accommodation" && <BAUaccomodation />}
      </div>
    </div>
  );
}
