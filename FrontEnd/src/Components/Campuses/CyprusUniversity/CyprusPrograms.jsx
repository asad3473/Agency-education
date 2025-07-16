// import React, { useContext } from 'react';
import { FaUniversity, FaSchool, FaUserGraduate, FaUserTie, FaBriefcase } from 'react-icons/fa';
import { useAuth } from '../../../contextApi/contextApi';
 // Adjust the path as needed

const CyprusPrograms = () => {
  const { language } = useAuth();

  // Organized programs data with translations
  const programs = {
    'Associate Degree Programs': {
      en: [
        'Computer Technologies and Programming',
        'Construction Technology',
        'First and Emergency Aid',
        'Public Relations and Advertising',
        'Radio & Tv Programming'
      ],
      ar: [
        'تكنولوجيا الحاسوب والبرمجة',
        'تكنولوجيا البناء',
        'الإسعافات الأولية والطوارئ',
        'العلاقات العامة والإعلان',
        'برمجة الراديو والتلفزيون'
      ]
    },
    'Undergraduate Programs': {
      en: {
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
      ar: {
        'كلية العلوم والتقنيات الزراعية': ['إنتاج النبات والتقنيات (بكالوريوس علوم)'],
        'كلية الآداب والعلوم': [
          'علم الأحياء الجزيئي وعلم الوراثة (بكالوريوس علوم)',
          'علم النفس (بكالوريوس آداب)',
          'الترجمة والتفسير (بكالوريوس آداب)'
        ],
        'كلية الاتصال': [
          'الإعلان والعلاقات العامة (بكالوريوس آداب)',
          'الصحافة (بكالوريوس آداب)',
          'الإذاعة والتلفزيون (بكالوريوس آداب)',
          'تصميم الاتصال المرئي (بكالوريوس آداب)'
        ],
        'كلية الاقتصاد والعلوم الإدارية': [
          'المحاسبة والمالية (بكالوريوس علوم)',
          'إدارة الأعمال (بكالوريوس آداب)',
          'العلاقات الدولية (بكالوريوس آداب)',
          'الإعلام الرقمي والتسويق (بكالوريوس آداب)',
          'الاقتصاد (بكالوريوس علوم)'
        ],
        'كلية التربية': [
          'تدريس اللغة الإنجليزية (بكالوريوس آداب)',
          'تعليم تكنولوجيا الحاسوب والتعليم التعليمي (بكالوريوس علوم)',
          'تعليم ما قبل المدرسة (بكالوريوس آداب)'
        ],
        'كلية الهندسة': [
          'هندسة الذكاء الاصطناعي',
          'الهندسة الحيوية (بكالوريوس علوم)',
          'هندسة الطب الحيوي (بكالوريوس علوم)',
          'الهندسة المدنية (بكالوريوس علوم)',
          'هندسة الحاسوب (بكالوريوس علوم)',
          'الهندسة الكهربائية والإلكترونية (بكالوريوس علوم)',
          'هندسة أنظمة الطاقة (بكالوريوس علوم)',
          'الهندسة البيئية (بكالوريوس علوم)',
          'هندسة نظم المعلومات (بكالوريوس علوم)',
          'هندسة الإدارة (بكالوريوس علوم)',
          'الهندسة الميكانيكية (بكالوريوس علوم)',
          'هندسة الميكاترونكس (بكالوريوس علوم)',
          'الهندسة الطبية (بكالوريوس علوم)',
          'هندسة البترول والغاز الطبيعي (بكالوريوس علوم)',
          'هندسة البرمجيات (بكالوريوس علوم)'
        ],
        'كلية الفنون الجميلة والتصميم والعمارة': [
          'الهندسة المعمارية (بكالوريوس آداب)',
          'التصميم الجرافيكي (بكالوريوس آداب)',
          'التصميم الداخلي (بكالوريوس آداب)'
        ],
        'كلية العلوم الصحية': [
          'القبالة',
          'التغذية وعلم التغذية',
          'التمريض (بكالوريوس علوم)',
          'العمل الاجتماعي (بكالوريوس آداب)',
          'العلاج الطبيعي وإعادة التأهيل (بكالوريوس علوم)'
        ],
        'كلية القانون': ['القانون الدولي (بكالوريوس قانون)'],
        'كلية الطب': ['الطب'],
        'كلية طب الأسنان': ['طب الأسنان (دنت)'],
        'كلية الصيدلة': ['الصيدلة (ماجستير صيدلة)', 'الصيدلة (دكتور صيدلة)'],
        'مدرسة العلوم التطبيقية': [
          'تكنولوجيا المعلومات (بكالوريوس علوم)',
          'تكنولوجيا أمن المعلومات (بكالوريوس علوم)',
          'نظم المعلومات الإدارية (بكالوريوس علوم)',
          'تكنولوجيا الحاسوب والبرمجة (فني)'
        ],
        'مدرسة السياحة وإدارة الفنادق': [
          'إدارة السياحة والفنادق (بكالوريوس آداب)',
          'فنون الطهي والطهي (بكالوريوس آداب)'
        ]
      }
    },
    'Masters Programs': {
      en: [
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
      ar: [
        'المحاسبة والمالية (ماجستير علوم/ماجستير محاسبة ومالية)',
        'الهندسة المعمارية (ماجستير هندسة معمارية)',
        'الهندسة الحيوية (ماجستير علوم)',
        'إدارة الأعمال (ماجستير إدارة أعمال)',
        'إدارة الأعمال*(برنامج ماجستير إدارة أعمال مزدوج مع الاتحاد الأوروبي)',
        'الكيمياء (ماجستير علوم)',
        'الهندسة المدنية (ماجستير علوم)',
        'دراسات الاتصال والإعلام (ماجستير آداب)',
        'هندسة الحاسوب (ماجستير علوم)',
        'الاقتصاد (ماجستير علوم)',
        'الإدارة والتخطيط التربوي (ماجستير آداب)',
        'الهندسة الكهربائية والإلكترونية (ماجستير علوم)',
        'هندسة أنظمة الطاقة (ماجستير علوم)',
        'إدارة الهندسة (ماجستير علوم)',
        'اللغة الإنجليزية والأدب (ماجستير آداب)',
        'تدريس اللغة الإنجليزية (ماجستير آداب)',
        'الهندسة البيئية (ماجستير علوم)',
        'التصميم الجرافيكي (ماجستير آداب)',
        'الإرشاد والإرشاد النفسي (ماجستير آداب)',
        'إدارة منظمات الرعاية الصحية (ماجستير آداب)',
        'تكنولوجيا المعلومات والاتصالات في التعليم (ماجستير علوم)',
        'هندسة نظم المعلومات (ماجستير علوم)',
        'تكنولوجيا المعلومات (ماجستير علوم)',
        'الهندسة المعمارية الداخلية (ماجستير تصميم داخلي)',
        'التصميم الداخلي (ماجستير تصميم داخلي)',
        'الصيرفة والتمويل الدولي (ماجستير آداب)',
        'القانون الدولي (ماجستير قانون)',
        'العلاقات الدولية (ماجستير آداب)',
        'نظم المعلومات الإدارية (ماجستير علوم)',
        'إدارة التسويق (ماجستير علوم)',
        'الهندسة الميكانيكية (ماجستير علوم)',
        'علم الأدوية (ماجستير علوم)',
        'علوم النبات والتقنيات (ماجستير علوم)',
        'العمل الاجتماعي',
        'إدارة السياحة والضيافة (ماجستير آداب)'
      ]
    },
    'Doctoral Programs (PhD)': {
      en: [
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
      ar: [
        'الهندسة المعمارية',
        'الهندسة الحيوية',
        'إدارة الأعمال',
        'الهندسة المدنية',
        'دراسات الاتصال والإعلام',
        'هندسة الحاسوب',
        'الهندسة الكهربائية والإلكترونية',
        'هندسة أنظمة الطاقة',
        'إدارة منظمات الرعاية الصحية',
        'تدريس اللغة الإنجليزية',
        'الهندسة البيئية',
        'العلوم البيئية',
        'العلاقات الدولية',
        'نظم المعلومات الإدارية',
        'العلوم الصيدلانية',
        'إدارة السياحة'
      ]
    },
    'Professional Doctorates (DBA)': {
      en: [
        'Business Administration',
        'Health Care Organizations Management'
      ],
      ar: [
        'إدارة الأعمال',
        'إدارة منظمات الرعاية الصحية'
      ]
    }
  };

  // Program type titles with translations
  const programTitles = {
    'Associate Degree Programs': {
      en: 'Associate Degree Programs',
      ar: 'برامج درجة الزمالة'
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
      ar: 'الدكتوراه المهنية (DBA)'
    }
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
    <div className={`max-w-6xl mx-auto px-4 py-12 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[#0A0851]">
          {language === 'ar' ? 'برامجنا الأكاديمية' : 'Our Academic Programs'}
        </h1>
        <div className="w-24 h-1 bg-[#F5891B] mx-auto"></div>
      </div>

      <div className="space-y-8">
        {Object.entries(programs).map(([programType, programData]) => (
          <div key={programType} className="rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="bg-gradient-to-r from-[#0A0851] to-[#1A1A8A] p-5 flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <div className={`bg-[#F5891B] p-3 rounded-lg ${language === 'ar' ? 'ml-4' : 'mr-4'}`}>
                {programIcons[programType]}
              </div>
              <h2 className="text-2xl font-bold text-white">
                {programTitles[programType][language]}
              </h2>
            </div>

            <div className="p-6 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {Array.isArray(programData[language]) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {programData[language].map((program) => (
                    <div key={program} className={`flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div className="flex-shrink-0 mt-1">
                        <FaUniversity className="text-[#F5891B]" />
                      </div>
                      <p className={`${language === 'ar' ? 'mr-3' : 'ml-3'} text-gray-800 font-medium`}>{program}</p>
                    </div>
                  ))}
                </div>
              ) : (
                Object.entries(programData[language]).map(([faculty, facultyPrograms]) => (
                  <div key={faculty} className="mb-8 last:mb-0">
                    <h3 className="text-xl font-semibold text-[#0A0851] mb-4 pb-2 border-b border-gray-200">
                      {faculty}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {facultyPrograms.map((program) => (
                        <div key={program} className={`flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className="flex-shrink-0 mt-1">
                            <FaUniversity className="text-[#F5891B]" />
                          </div>
                          <p className={`${language === 'ar' ? 'mr-3' : 'ml-3'} text-gray-800 font-medium`}>{program}</p>
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