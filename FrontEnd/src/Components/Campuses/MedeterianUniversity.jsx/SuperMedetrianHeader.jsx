import React, { useState } from 'react';
import { FaUniversity, FaGraduationCap, FaAward, FaMoneyBillWave, FaHome } from 'react-icons/fa';
import MedeterianIntroduction from './MedeterianIntroduction';
import MedeterianProgram from './MedeterianProgram';
import MedetrianScholorship from './MedetrianScholorship';
import MedeterianTutitionFee from './MedeterianTutitionFee';
import MedeterianAccomodation from './MedeterianAccomodation';
import { useAuth } from '../../../contextApi/contextApi';


export default function SuperMedetrianHeader() {
  const { language } = useAuth();
  const [activeTab, setActiveTab] = useState("introduction");

  // Tab content based on language
  const tabs = {
    en: [
      { id: "introduction", label: "University Introduction", icon: <FaUniversity /> },
      { id: "programs", label: "Departments/Programs", icon: <FaGraduationCap /> },
      { id: "scholarships", label: "Scholarships", icon: <FaAward /> },
      { id: "tuition", label: "Tuition Fee", icon: <FaMoneyBillWave /> },
      { id: "accommodation", label: "Accommodation", icon: <FaHome /> },
    ],
    ar: [
      { id: "introduction", label: "مقدمة الجامعة", icon: <FaUniversity /> },
      { id: "programs", label: "الأقسام/البرامج", icon: <FaGraduationCap /> },
      { id: "scholarships", label: "المنح الدراسية", icon: <FaAward /> },
      { id: "tuition", label: "الرسوم الدراسية", icon: <FaMoneyBillWave /> },
      { id: "accommodation", label: "الإقامة", icon: <FaHome /> },
    ]
  };

  const currentTabs = tabs[language] || tabs.en;

  return (
    <div className='mt-4' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation Tabs */}
      <div className='rounded-sm bg-[#0A0851] p-4 mb-2 w-full sm:w-10/12 mx-auto'>
        <nav className={`flex flex-wrap justify-around items-center gap-4 sm:gap-6 md:gap-8 text-white text-sm sm:text-base ${language === 'ar' ? 'flex-row-reverse' : ''
          }`}>
          {currentTabs.map(tab => (
            <span
              key={tab.id}
              className={`cursor-pointer flex items-center gap-2 ${language === 'ar' ? 'border-l-2 pl-2' : 'border-r-2 pr-2'
                } transition-colors ${activeTab === tab.id ? 'text-[#F5891B]' : 'hover:text-[#F5891B]'
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {language === 'ar' ? (
                <>
                  <span>{tab.label}</span>
                  {tab.icon}
                </>
              ) : (
                <>
                  {tab.icon}
                  <span>{tab.label}</span>
                </>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Conditional Rendering of Components */}
      <div className='w-full sm:w-11/12 mx-auto'>
        {activeTab === "introduction" && <MedeterianIntroduction />}
        {activeTab === "programs" && <MedeterianProgram />}
        {activeTab === "scholarships" && <MedetrianScholorship />}
        {activeTab === "tuition" && <MedeterianTutitionFee />}
        {activeTab === "accommodation" && <MedeterianAccomodation />}
      </div>
    </div>
  );
}