import React from 'react';
import { FaUniversity, FaSchool, FaUserGraduate, FaUserTie, FaBriefcase } from 'react-icons/fa';
import { useAuth } from '../../../contextApi/contextApi';

const EastPrograms = () => {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const translations = {
    title: {
      en: 'Our Academic Programs',
      ar: 'برامجنا الأكاديمية'
    },
    categories: {
      'Associate Degree Programs': {
        en: 'Associate Degree Programs',
        ar: 'برامج الدبلوم المشارك'
      },
      'Undergraduate Programs': {
        en: 'Undergraduate Programs',
        ar: 'برامج البكالوريوس'
      },
      'Masters Programs': {
        en: 'Masters Programs',
        ar: 'برامج الماجستير'
      },
      'Doctoral Programs (PhD)': {
        en: 'Doctoral Programs (PhD)',
        ar: 'برامج الدكتوراه (PhD)'
      },
      'Professional Doctorates (DBA)': {
        en: 'Professional Doctorates (DBA)',
        ar: 'برامج الدكتوراه المهنية (DBA)'
      }
    },
    faculties: {
      'Faculty of Engineering': {
        en: 'Faculty of Engineering',
        ar: 'كلية الهندسة'
      },
      'Faculty of Arts and Sciences': {
        en: 'Faculty of Arts and Sciences',
        ar: 'كلية الآداب والعلوم'
      },
      'Faculty of Communication': {
        en: 'Faculty of Communication',
        ar: 'كلية الاتصال'
      },
      'Faculty of Economics & Administrative Sciences': {
        en: 'Faculty of Economics & Administrative Sciences',
        ar: 'كلية الاقتصاد والعلوم الإدارية'
      },
      'Faculty of Education': {
        en: 'Faculty of Education',
        ar: 'كلية التربية'
      },
      'Faculty of Agricultural Sciences & Technologies': {
        en: 'Faculty of Agricultural Sciences & Technologies',
        ar: 'كلية العلوم الزراعية والتقنيات'
      },
      'Faculty of Fine Arts, Design and Architecture': {
        en: 'Faculty of Fine Arts, Design and Architecture',
        ar: 'كلية الفنون الجميلة والتصميم والعمارة'
      },
      'Faculty of Health Sciences': {
        en: 'Faculty of Health Sciences',
        ar: 'كلية العلوم الصحية'
      },
      'Faculty of Law': {
        en: 'Faculty of Law',
        ar: 'كلية القانون'
      },
      'Faculty of Medicine': {
        en: 'Faculty of Medicine',
        ar: 'كلية الطب'
      },
      'Faculty of Dentistry': {
        en: 'Faculty of Dentistry',
        ar: 'كلية طب الأسنان'
      },
      'Faculty of Pharmacy': {
        en: 'Faculty of Pharmacy',
        ar: 'كلية الصيدلة'
      },
      'School of Applied Sciences': {
        en: 'School of Applied Sciences',
        ar: 'مدرسة العلوم التطبيقية'
      },
      'School of Tourism & Hotel Management': {
        en: 'School of Tourism & Hotel Management',
        ar: 'مدرسة السياحة وإدارة الفنادق'
      }
    }
  };

  const programIcons = {
    'Associate Degree Programs': <FaSchool className="text-white text-2xl" />,
    'Undergraduate Programs': <FaUniversity className="text-white text-2xl" />,
    'Masters Programs': <FaUserGraduate className="text-white text-2xl" />,
    'Doctoral Programs (PhD)': <FaUserTie className="text-white text-2xl" />,
    'Professional Doctorates (DBA)': <FaBriefcase className="text-white text-2xl" />
  };

  const programs = {
    'Associate Degree Programs': [
      { en: 'Computer Technologies and Programming', ar: 'تقنيات الحاسوب والبرمجة' },
      { en: 'Construction Technology', ar: 'تقنية البناء' },
      { en: 'First and Emergency Aid', ar: 'الإسعافات الأولية والطوارئ' },
      { en: 'Public Relations and Advertising', ar: 'العلاقات العامة والإعلان' },
      { en: 'Radio & Tv Programming', ar: 'برمجة الراديو والتلفزيون' }
    ],
    'Undergraduate Programs': {
      'Faculty of Engineering': [
        { en: 'Computer Engineering', ar: 'هندسة الحاسوب' },
        { en: 'Software Engineering', ar: 'هندسة البرمجيات' },
        { en: 'Mechanical Engineering', ar: 'الهندسة الميكانيكية' },
      ],
      'Faculty of Education': [
        { en: 'English Language Teaching', ar: 'تدريس اللغة الإنجليزية' },
        { en: 'Pre School Teaching', ar: 'تدريس رياض الأطفال' },
      ],
    },
    'Masters Programs': [
      { en: 'Business Administration (MBA)', ar: 'إدارة الأعمال (MBA)' },
      { en: 'Computer Engineering (MSc)', ar: 'هندسة الحاسوب (ماجستير)' },
      { en: 'English Language Teaching (MA)', ar: 'تدريس اللغة الإنجليزية (ماجستير)' },
    ],
    'Doctoral Programs (PhD)': [
      { en: 'Business Administration', ar: 'إدارة الأعمال' },
      { en: 'Computer Engineering', ar: 'هندسة الحاسوب' }
    ],
    'Professional Doctorates (DBA)': [
      { en: 'Health Care Organizations Management', ar: 'إدارة منظمات الرعاية الصحية' }
    ]
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 py-8 ${isArabic ? 'rtl text-right' : 'text-left'}`}>
      <h1 className="text-3xl font-bold text-center mb-8 text-[#0A0851]">
        {translations.title[language]}
      </h1>

      <div className="space-y-8">
        {Object.entries(programs).map(([category, content]) => (
          <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#0A0851] p-4 flex items-center" dir={isArabic ? 'rtl' : 'ltr'}>
              {programIcons[category]}
              <h2 className={`${isArabic ? 'mr-3' : 'ml-3'} text-xl font-semibold text-white`}>
                {translations.categories[category][language]}
              </h2>
            </div>

            <div className="p-6">
              {Array.isArray(content) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {content.map((program) => (
                    <div key={program.en} className="flex items-start" dir={isArabic ? 'rtl' : 'ltr'}>
                      <FaUniversity className={`text-[#F5891B] mt-1 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                      <p className="text-gray-700">
                        {program[language]}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                Object.entries(content).map(([faculty, programs]) => (
                  <div key={faculty} className="mb-6">
                    <h3 className="text-lg font-medium text-[#0A0851] mb-3 border-b pb-1" dir={isArabic ? 'rtl' : 'ltr'}>
                      {translations.faculties[faculty][language]}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {programs.map((program) => (
                        <div key={program.en} className="flex items-start" dir={isArabic ? 'rtl' : 'ltr'}>
                          <FaUniversity className={`text-[#F5891B] mt-1 ${isArabic ? 'ml-2' : 'mr-2'}`} />
                          <p className="text-gray-700">
                            {program[language]}
                          </p>
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

export default EastPrograms;