import React from 'react';
import { FaUniversity, FaSchool, FaUserGraduate, FaUserTie, FaBriefcase } from 'react-icons/fa';
import { useAuth } from '../../../contextApi/contextApi';

const MedeterianProgram = () => {
  const { language } = useAuth();

  // Programs data in both languages
  const programsData = {
    en: {
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
    },
    ar: {
      'برامج الدبلوم': [
        'تكنولوجيا الحاسوب والبرمجة',
        'تكنولوجيا البناء',
        'الإسعافات الأولية والطوارئ',
        'العلاقات العامة والإعلان',
        'برمجة الراديو والتلفزيون'
      ],
      'البرامج الجامعية': {
        'كلية العلوم والتقنيات الزراعية': ['إنتاج النبات والتقنيات (بكالوريوس)'],
        'كلية الآداب والعلوم': [
          'علم الأحياء الجزيئي والوراثة (بكالوريوس)',
          'علم النفس (بكالوريوس)',
          'الترجمة والتفسير (بكالوريوس)'
        ],
        'كلية الاتصال': [
          'الإعلان والعلاقات العامة (بكالوريوس)',
          'الصحافة (بكالوريوس)',
          'الراديو والتلفزيون (بكالوريوس)',
          'تصميم الاتصال المرئي (بكالوريوس)'
        ],
        'كلية الاقتصاد والعلوم الإدارية': [
          'المحاسبة والتمويل (بكالوريوس)',
          'إدارة الأعمال (بكالوريوس)',
          'العلاقات الدولية (بكالوريوس)',
          'الإعلام الرقمي والتسويق (بكالوريوس)',
          'الاقتصاد (بكالوريوس)'
        ],
        'كلية التربية': [
          'تدريس اللغة الإنجليزية (بكالوريوس)',
          'تعليم تكنولوجيا الحاسوب والتعليم (بكالوريوس)',
          'تعليم ما قبل المدرسة (بكالوريوس)'
        ],
        'كلية الهندسة': [
          'هندسة الذكاء الاصطناعي',
          'الهندسة الحيوية (بكالوريوس)',
          'هندسة الطب الحيوي (بكالوريوس)',
          'الهندسة المدنية (بكالوريوس)',
          'هندسة الحاسوب (بكالوريوس)',
          'الهندسة الكهربائية والإلكترونية (بكالوريوس)',
          'هندسة أنظمة الطاقة (بكالوريوس)',
          'الهندسة البيئية (بكالوريوس)',
          'هندسة نظم المعلومات (بكالوريوس)',
          'هندسة الإدارة (بكالوريوس)',
          'الهندسة الميكانيكية (بكالوريوس)',
          'هندسة الميكاترونيك (بكالوريوس)',
          'الهندسة الطبية (بكالوريوس)',
          'هندسة البترول والغاز الطبيعي (بكالوريوس)',
          'هندسة البرمجيات (بكالوريوس)'
        ],
        'كلية الفنون الجميلة والتصميم والعمارة': [
          'العمارة (بكالوريوس)',
          'التصميم الجرافيكي (بكالوريوس)',
          'التصميم الداخلي (بكالوريوس)'
        ],
        'كلية العلوم الصحية': [
          'القبالة',
          'التغذية وعلم التغذية',
          'التمريض (بكالوريوس)',
          'العمل الاجتماعي (بكالوريوس)',
          'العلاج الطبيعي وإعادة التأهيل (بكالوريوس)'
        ],
        'كلية القانون': ['القانون الدولي (بكالوريوس)'],
        'كلية الطب': ['الطب'],
        'كلية طب الأسنان': ['طب الأسنان'],
        'كلية الصيدلة': ['الصيدلة (ماجستير)', 'الصيدلة (دكتور صيدلة)'],
        'مدرسة العلوم التطبيقية': [
          'تكنولوجيا المعلومات (بكالوريوس)',
          'تكنولوجيا أمن المعلومات (بكالوريوس)',
          'نظم معلومات الإدارة (بكالوريوس)',
          'تكنولوجيا الحاسوب والبرمجة (فني)'
        ],
        'مدرسة السياحة وإدارة الفنادق': [
          'إدارة السياحة والفنادق (بكالوريوس)',
          'فنون الطهي والطبخ (بكالوريوس)'
        ]
      },
      'برامج الماجستير': [
        'المحاسبة والتمويل (ماجستير)',
        'العمارة (ماجستير)',
        'الهندسة الحيوية (ماجستير)',
        'إدارة الأعمال (ماجستير)',
        'إدارة الأعمال (برنامج مزدوج مع الاتحاد الأوروبي)',
        'الكيمياء (ماجستير)',
        'الهندسة المدنية (ماجستير)',
        'دراسات الاتصال والإعلام (ماجستير)',
        'هندسة الحاسوب (ماجستير)',
        'الاقتصاد (ماجستير)',
        'الإدارة والتخطيط التربوي (ماجستير)',
        'الهندسة الكهربائية والإلكترونية (ماجستير)',
        'هندسة أنظمة الطاقة (ماجستير)',
        'إدارة الهندسة (ماجستير)',
        'اللغة الإنجليزية والأدب (ماجستير)',
        'تدريس اللغة الإنجليزية (ماجستير)',
        'الهندسة البيئية (ماجستير)',
        'التصميم الجرافيكي (ماجستير)',
        'الإرشاد والإرشاد النفسي (ماجستير)',
        'إدارة منظمات الرعاية الصحية (ماجستير)',
        'تكنولوجيا المعلومات والاتصالات في التعليم (ماجستير)',
        'هندسة نظم المعلومات (ماجستير)',
        'تكنولوجيا المعلومات (ماجستير)',
        'العمارة الداخلية (ماجستير)',
        'التصميم الداخلي (ماجستير)',
        'الصيرفة والتمويل الدولي (ماجستير)',
        'القانون الدولي (ماجستير)',
        'العلاقات الدولية (ماجستير)',
        'نظم معلومات الإدارة (ماجستير)',
        'إدارة التسويق (ماجستير)',
        'الهندسة الميكانيكية (ماجستير)',
        'علم الأدوية (ماجستير)',
        'علوم النبات والتقنيات (ماجستير)',
        'العمل الاجتماعي',
        'إدارة السياحة والضيافة (ماجستير)'
      ],
      'برامج الدكتوراه': [
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
      ],
      'الدكتوراه المهنية': [
        'إدارة الأعمال',
        'إدارة منظمات الرعاية الصحية'
      ]
    }
  };

  const programs = programsData[language] || programsData.en;

  // Using only Font Awesome icons that definitely exist
  const programIcons = {
    'Associate Degree Programs': <FaSchool className="text-white text-2xl" />,
    'Undergraduate Programs': <FaUniversity className="text-white text-2xl" />,
    'Masters Programs': <FaUserGraduate className="text-white text-2xl" />,
    'Doctoral Programs (PhD)': <FaUserTie className="text-white text-2xl" />,
    'Professional Doctorates (DBA)': <FaBriefcase className="text-white text-2xl" />,
    'برامج الدبلوم': <FaSchool className="text-white text-2xl" />,
    'البرامج الجامعية': <FaUniversity className="text-white text-2xl" />,
    'برامج الماجستير': <FaUserGraduate className="text-white text-2xl" />,
    'برامج الدكتوراه': <FaUserTie className="text-white text-2xl" />,
    'الدكتوراه المهنية': <FaBriefcase className="text-white text-2xl" />
  };

  // Title based on language
  const title = {
    en: "Our Academic Programs",
    ar: "برامجنا الأكاديمية"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <h1 className="text-3xl font-bold text-center mb-8 text-[#0A0851]">
        {title[language] || title.en}
      </h1>

      <div className="space-y-8">
        {Object.entries(programs).map(([programType, programData]) => (
          <div key={programType} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#0A0851] p-4 flex items-center">
              {programIcons[programType]}
              <h2 className={`${language === 'ar' ? 'mr-3' : 'ml-3'} text-xl font-semibold text-white`}>
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
                      <p className={`${language === 'ar' ? 'mr-2' : 'ml-2'} text-gray-700`}>{program}</p>
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
                          <p className={`${language === 'ar' ? 'mr-2' : 'ml-2'} text-gray-700`}>{program}</p>
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

export default MedeterianProgram;