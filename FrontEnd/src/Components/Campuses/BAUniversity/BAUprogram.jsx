import React from 'react';
import { FaUniversity, FaSchool, FaUserGraduate, FaUserTie, FaBriefcase } from 'react-icons/fa';
import { useAuth } from '../../../contextApi/contextApi';

const BAUprogram = () => {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const facultyNameTranslations = {
    'Faculty of Agricultural Sciences & Technologies': 'كلية العلوم الزراعية والتقنيات',
    'Faculty of Arts and Sciences': 'كلية الآداب والعلوم',
    'Faculty of Communication': 'كلية الاتصال',
    'Faculty of Economics & Administrative Sciences': 'كلية العلوم الاقتصادية والإدارية',
    'Faculty of Education': 'كلية التربية',
    'Faculty of Engineering': 'كلية الهندسة',
    'Faculty of Fine Arts, Design and Architecture': 'كلية الفنون الجميلة والتصميم والهندسة المعمارية',
    'Faculty of Health Sciences': 'كلية العلوم الصحية',
    'Faculty of Law': 'كلية القانون',
    'Faculty of Medicine': 'كلية الطب',
    'Faculty of Dentistry': 'كلية طب الأسنان',
    'Faculty of Pharmacy': 'كلية الصيدلة',
    'School of Applied Sciences': 'مدرسة العلوم التطبيقية',
    'School of Tourism & Hotel Management': 'مدرسة السياحة وإدارة الفنادق',
  };

  // Helper to get faculty name based on language
  const facultyTitles = (faculty) => {
    if (isArabic) {
      return facultyNameTranslations[faculty] || faculty.replace('Faculty of ', '').replace('School of ', '');
    }
    return faculty;
  };

  const programs = {
    'Associate Degree Programs': isArabic
      ? [
          'تقنيات الحاسوب والبرمجة',
          'تقنية البناء',
          'الإسعاف الأولي والطوارئ',
          'العلاقات العامة والإعلان',
          'برمجة الراديو والتلفاز',
        ]
      : [
          'Computer Technologies and Programming',
          'Construction Technology',
          'First and Emergency Aid',
          'Public Relations and Advertising',
          'Radio & Tv Programming',
        ],
    'Undergraduate Programs': {
      'Faculty of Agricultural Sciences & Technologies': isArabic
        ? ['إنتاج النبات والتقنيات (بكالوريوس)']
        : ['Plant Production and Technologies (BSc)'],
      'Faculty of Arts and Sciences': isArabic
        ? ['علم الأحياء الجزيئي وعلم الوراثة (بكالوريوس)', 'علم النفس (بكالوريوس)', 'الترجمة والتفسير (بكالوريوس)']
        : ['Molecular Biology & Genetics (BSc)', 'Psychology (BA)', 'Translation and Interpretation (BA)'],
      'Faculty of Communication': isArabic
        ? [
            'الإعلان والعلاقات العامة (بكالوريوس)',
            'الصحافة (بكالوريوس)',
            'الراديو والتلفاز (بكالوريوس)',
            'تصميم الاتصال البصري (بكالوريوس)',
          ]
        : [
            'Advertising and Public Relations (BA)',
            'Journalism (BA)',
            'Radio and Television (BA)',
            'Visual Communication Design (BA)',
          ],
      'Faculty of Economics & Administrative Sciences': isArabic
        ? [
            'المحاسبة والمالية (بكالوريوس)',
            'إدارة الأعمال (بكالوريوس)',
            'العلاقات الدولية (بكالوريوس)',
            'الوسائط الرقمية والتسويق (بكالوريوس)',
            'الاقتصاد (بكالوريوس)',
          ]
        : [
            'Accounting and Finance (BSc)',
            'Business Administration (BA)',
            'International Relations (BA)',
            'Digital Media and Marketing (BA)',
            'Economics (BSc)',
          ],
      'Faculty of Education': isArabic
        ? [
            'تعليم اللغة الإنجليزية (بكالوريوس)',
            'تعليم تكنولوجيا الحاسوب والتعليم (بكالوريوس)',
            'تعليم مرحلة ما قبل المدرسة (بكالوريوس)',
          ]
        : [
            'English Language Teaching (BA)',
            'Computer and Instructional Technology Teaching Education (BSc)',
            'Pre School Teaching (BA)',
          ],
      'Faculty of Engineering': isArabic
        ? [
            'هندسة الذكاء الاصطناعي',
            'الهندسة الحيوية (بكالوريوس)',
            'الهندسة الطبية الحيوية (بكالوريوس)',
            'الهندسة المدنية (بكالوريوس)',
            'هندسة الحاسوب (بكالوريوس)',
            'الهندسة الكهربائية والإلكترونية (بكالوريوس)',
            'هندسة أنظمة الطاقة (بكالوريوس)',
            'الهندسة البيئية (بكالوريوس)',
            'هندسة نظم المعلومات (بكالوريوس)',
            'هندسة الإدارة (بكالوريوس)',
            'الهندسة الميكانيكية (بكالوريوس)',
            'الهندسة الميكاترونيكية (بكالوريوس)',
            'الهندسة الطبية (بكالوريوس)',
            'هندسة البترول والغاز الطبيعي (بكالوريوس)',
            'هندسة البرمجيات (بكالوريوس)',
          ]
        : [
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
            'Software Engineering (BSc)',
          ],
      'Faculty of Fine Arts, Design and Architecture': isArabic
        ? ['العمارة (بكالوريوس)', 'التصميم الجرافيكي (بكالوريوس)', 'تصميم الديكور الداخلي (بكالوريوس)']
        : ['Architecture (BA)', 'Graphic Design (BA)', 'Interior Design (BA)'],
      'Faculty of Health Sciences': isArabic
        ? [
            'القبالة',
            'التغذية والنظم الغذائية',
            'التمريض (بكالوريوس)',
            'العمل الاجتماعي (بكالوريوس)',
            'العلاج الطبيعي وإعادة التأهيل (بكالوريوس)',
          ]
        : [
            'Midwifery',
            'Nutrition and Dietetics',
            'Nursing (BSc)',
            'Social Work (BA)',
            'Physiotherapy and Rehabilitation (BSc)',
          ],
      'Faculty of Law': isArabic ? ['القانون الدولي (بكالوريوس)'] : ['International Law (LLB)'],
      'Faculty of Medicine': isArabic ? ['الطب'] : ['Medicine'],
      'Faculty of Dentistry': isArabic ? ['طب الأسنان'] : ['Dentistry (Dent)'],
      'Faculty of Pharmacy': isArabic ? ['الصيدلة (ماجستير)', 'الصيدلة (دكتوراه)'] : ['Pharmacy (MPharm)', 'Pharmacy (Pharm D.)'],
      'School of Applied Sciences': isArabic
        ? [
            'تكنولوجيا المعلومات (بكالوريوس)',
            'تقنيات أمن المعلومات (بكالوريوس)',
            'نظم معلومات الإدارة (بكالوريوس)',
            'تقنيات الحاسوب والبرمجة (فني)',
          ]
        : [
            'Information Technologies (BSc)',
            'Information Security Technologies (BSc)',
            'Management Information Systems (BSc)',
            'Computer Technologies and Programming (Technician)',
          ],
      'School of Tourism & Hotel Management': isArabic
        ? ['إدارة السياحة والفنادق (بكالوريوس)', 'فن الطبخ وفنون الطهي (بكالوريوس)']
        : ['Tourism and Hotel Management (BA)', 'Gastronomy and Culinary Arts (BA)'],
    },
    'Masters Programs': isArabic
      ? [
          'المحاسبة والمالية (ماجستير)',
          'العمارة (ماجستير)',
          'الهندسة الحيوية (ماجستير)',
          'إدارة الأعمال (ماجستير)',
          'إدارة الأعمال *(برنامج ماجستير مزدوج مع الاتحاد الأوروبي)',
          'الكيمياء (ماجستير)',
          'الهندسة المدنية (ماجستير)',
          'دراسات الإعلام والاتصال (ماجستير)',
          'هندسة الحاسوب (ماجستير)',
          'الاقتصاد (ماجستير)',
          'الإدارة والتخطيط التربوي (ماجستير)',
          'الهندسة الكهربائية والإلكترونية (ماجستير)',
          'هندسة أنظمة الطاقة (ماجستير)',
          'إدارة الهندسة (ماجستير)',
          'اللغة الإنجليزية وآدابها (ماجستير)',
          'تعليم اللغة الإنجليزية (ماجستير)',
          'الهندسة البيئية (ماجستير)',
          'التصميم الجرافيكي (ماجستير)',
          'الإرشاد والاستشارة النفسية (ماجستير)',
          'إدارة مؤسسات الرعاية الصحية (ماجستير)',
          'تكنولوجيا المعلومات والاتصالات في التعليم (ماجستير)',
          'هندسة نظم المعلومات (ماجستير)',
          'تكنولوجيا المعلومات (ماجستير)',
          'الهندسة الداخلية (ماجستير)',
          'التصميم الداخلي (ماجستير)',
          'المصرفية والمالية الدولية (ماجستير)',
          'القانون الدولي (ماجستير)',
          'العلاقات الدولية (ماجستير)',
          'نظم معلومات الإدارة (ماجستير)',
          'إدارة التسويق (ماجستير)',
          'الهندسة الميكانيكية (ماجستير)',
          'العقاقير النباتية (ماجستير)',
          'علوم النبات وتقنياتها (ماجستير)',
          'العمل الاجتماعي',
          'إدارة السياحة والضيافة (ماجستير)',
        ]
      : [
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
          'Tourism and Hospitality Management (MA)',
        ],
    'Doctoral Programs (PhD)': isArabic
      ? [
          'العمارة',
          'الهندسة الحيوية',
          'إدارة الأعمال',
          'الهندسة المدنية',
          'دراسات الإعلام والاتصال',
          'هندسة الحاسوب',
          'الهندسة الكهربائية والإلكترونية',
          'هندسة أنظمة الطاقة',
          'إدارة مؤسسات الرعاية الصحية',
          'تعليم اللغة الإنجليزية',
          'الهندسة البيئية',
          'العلوم البيئية',
          'العلاقات الدولية',
          'نظم معلومات الإدارة',
          'العلوم الصيدلانية',
          'إدارة السياحة',
        ]
      : [
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
          'Tourism Management',
        ],
    'Professional Doctorates (DBA)': isArabic
      ? ['إدارة الأعمال', 'إدارة مؤسسات الرعاية الصحية']
      : ['Business Administration', 'Health Care Organizations Management'],
  };

  const programIcons = {
    'Associate Degree Programs': <FaSchool className="text-white text-2xl" />,
    'Undergraduate Programs': <FaUniversity className="text-white text-2xl" />,
    'Masters Programs': <FaUserGraduate className="text-white text-2xl" />,
    'Doctoral Programs (PhD)': <FaUserTie className="text-white text-2xl" />,
    'Professional Doctorates (DBA)': <FaBriefcase className="text-white text-2xl" />,
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 py-8`} dir={isArabic ? 'rtl' : 'ltr'}>
      <h1 className="text-3xl font-bold text-center mb-8 text-[#0A0851]">
        {isArabic ? 'برامجنا الأكاديمية' : 'Our Academic Programs'}
      </h1>

      <div className="space-y-8">
        {Object.entries(programs).map(([programType, programData]) => (
          <div key={programType} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#0A0851] p-4 flex items-center">
              {programIcons[programType]}
              <h2 className="ml-3 text-xl font-semibold text-white">
                {isArabic
                  ? programType === 'Associate Degree Programs'
                    ? 'برامج الدبلوم المساعد'
                    : programType === 'Undergraduate Programs'
                    ? 'برامج البكالوريوس'
                    : programType === 'Masters Programs'
                    ? 'برامج الماجستير'
                    : programType === 'Doctoral Programs (PhD)'
                    ? 'برامج الدكتوراه'
                    : programType === 'Professional Doctorates (DBA)'
                    ? 'الدكتوراه المهنية'
                    : programType
                  : programType}
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
                      {facultyTitles(faculty)}
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
