import React from 'react';
import { FaUniversity, FaSchool, FaUserGraduate, FaUserTie, FaBriefcase } from 'react-icons/fa';
import { useAuth } from "../../../contextApi/contextApi";

const KyreniaProgram = () => {
  const { language } = useAuth();
  const isArabic = language === "ar";

  // Bilingual programs data
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
          'البيولوجيا الجزيئية وعلم الوراثة (بكالوريوس علوم)',
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
          'المحاسبة والتمويل (بكالوريوس علوم)',
          'إدارة الأعمال (بكالوريوس آداب)',
          'العلاقات الدولية (بكالوريوس آداب)',
          'الإعلام الرقمي والتسويق (بكالوريوس آداب)',
          'الاقتصاد (بكالوريوس علوم)'
        ],
        'كلية التربية': [
          'تدريس اللغة الإنجليزية (بكالوريوس آداب)',
          'تعليم تكنولوجيا الحاسوب والتعليم (بكالوريوس علوم)',
          'تعليم ما قبل المدرسة (بكالوريوس آداب)'
        ],
        'كلية الهندسة': [
          'هندسة الذكاء الاصطناعي',
          'الهندسة الحيوية (بكالوريوس علوم)',
          'الهندسة الطبية الحيوية (بكالوريوس علوم)',
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
          'العمارة (بكالوريوس آداب)',
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
        'كلية طب الأسنان': ['طب الأسنان'],
        'كلية الصيدلة': ['الصيدلة (ماجستير صيدلة)', 'الصيدلة (دكتور صيدلة)'],
        'مدرسة العلوم التطبيقية': [
          'تكنولوجيا المعلومات (بكالوريوس علوم)',
          'تكنولوجيا أمن المعلومات (بكالوريوس علوم)',
          'نظم معلومات الإدارة (بكالوريوس علوم)',
          'تكنولوجيا الحاسوب والبرمجة (فني)'
        ],
        'مدرسة السياحة وإدارة الفنادق': [
          'إدارة السياحة والفنادق (بكالوريوس آداب)',
          'فنون الطهي والطهو (بكالوريوس آداب)'
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
        'المحاسبة والتمويل (ماجستير علوم/ماجستير محاسبة وتمويل)',
        'العمارة (ماجستير عمارة)',
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
        'العمارة الداخلية (ماجستير تصميم داخلي)',
        'التصميم الداخلي (ماجستير تصميم داخلي)',
        'الصيرفة والتمويل الدولي (ماجستير آداب)',
        'القانون الدولي (ماجستير قانون)',
        'العلاقات الدولية (ماجستير آداب)',
        'نظم معلومات الإدارة (ماجستير علوم)',
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
        'العمارة',
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
        'نظم معلومات الإدارة',
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

  const programTitles = {
    'Associate Degree Programs': {
      en: 'Associate Degree Programs',
      ar: 'برامج الدبلوم'
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
      ar: 'برامج الدكتوراه'
    },
    'Professional Doctorates (DBA)': {
      en: 'Professional Doctorates (DBA)',
      ar: 'الدكتوراه المهنية'
    }
  };

  const programIcons = {
    'Associate Degree Programs': <FaSchool className="text-white text-2xl" />,
    'Undergraduate Programs': <FaUniversity className="text-white text-2xl" />,
    'Masters Programs': <FaUserGraduate className="text-white text-2xl" />,
    'Doctoral Programs (PhD)': <FaUserTie className="text-white text-2xl" />,
    'Professional Doctorates (DBA)': <FaBriefcase className="text-white text-2xl" />
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" dir={isArabic ? "rtl" : "ltr"}>
      <h1 className="text-3xl font-bold text-center mb-8 text-[#0A0851]">
        {isArabic ? "برامجنا الأكاديمية" : "Our Academic Programs"}
      </h1>

      <div className="space-y-8">
        {Object.keys(programs).map((programType) => {
          const currentProgram = programs[programType];
          const programData = isArabic ? currentProgram.ar : currentProgram.en;
          const programTitle = isArabic ? programTitles[programType].ar : programTitles[programType].en;

          return (
            <div key={programType} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#0A0851] p-4 flex items-center">
                {programIcons[programType]}
                <h2 className={` isArabic ? "mr-3" : "ml-3"} text-xl font-semibold text-white`}>
                  {programTitle}
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
                        <p className={` isArabic ? "mr-2" : "ml-2"}  text-gray-700`} >
                          {program}
                        </p>
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
                            <p className={` isArabic ? "mr-2" : "ml-2"} text-gray-700`}>
                              {program}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KyreniaProgram;