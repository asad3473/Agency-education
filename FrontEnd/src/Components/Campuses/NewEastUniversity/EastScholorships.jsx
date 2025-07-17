import React from 'react';
import { FaAward, FaUsers, FaHeart, FaRunning, FaGraduationCap } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { useAuth } from '../../../contextApi/contextApi';

const EastScholorships = () => {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const scholarships = [
    {
      title: {
        en: "Automatic 50% Scholarship",
        ar: "منحة تلقائية 50%"
      },
      description: {
        en: "Granted to all international undergraduate students registering at NEU",
        ar: "ممنوحة لجميع الطلاب الدوليين المسجلين في المرحلة الجامعية بالجامعة"
      },
      icon: <GiMoneyStack className="text-3xl text-yellow-500" />,
      bgColor: "bg-blue-50"
    },
    {
      title: {
        en: "Academic Excellence Scholarships",
        ar: "منح التميز الأكاديمي"
      },
      description: {
        en: "50%, 75% or 100% off tuition fee each semester based on academic performance",
        ar: "خصم 50% أو 75% أو 100% من الرسوم الدراسية كل فصل بناءً على الأداء الأكاديمي"
      },
      icon: <FaAward className="text-3xl text-blue-600" />,
      bgColor: "bg-blue-100"
    },
    {
      title: {
        en: "Siblings Discount",
        ar: "خصم الأشقاء"
      },
      description: {
        en: "25% discount for each sibling attending (proof of kinship required)",
        ar: "خصم 25% لكل شقيق مسجل (مطلوب إثبات القرابة)"
      },
      icon: <FaUsers className="text-3xl text-green-600" />,
      bgColor: "bg-green-50"
    },
    {
      title: {
        en: "Married Couples Discount",
        ar: "خصم الأزواج"
      },
      description: {
        en: "25% discount for married couples attending together (marriage proof required)",
        ar: "خصم 25% للأزواج المسجلين معًا (مطلوب إثبات الزواج)"
      },
      icon: <FaHeart className="text-3xl text-red-500" />,
      bgColor: "bg-red-50"
    },
    {
      title: {
        en: "Athletic Scholarships",
        ar: "منح رياضية"
      },
      description: {
        en: "For students with national-level sports performance or joining NEU sports teams",
        ar: "للطلاب ذوي الأداء الرياضي على المستوى الوطني أو المنضمين إلى فرق الجامعة الرياضية"
      },
      icon: <FaRunning className="text-3xl text-purple-600" />,
      bgColor: "bg-purple-50"
    },
    {
      title: {
        en: "Graduate Scholarships",
        ar: "منح الدراسات العليا"
      },
      description: {
        en: "For graduate students with minimum 3.50 CGPA (valid bachelor diploma required)",
        ar: "لطلاب الدراسات العليا بمعدل تراكمي لا يقل عن 3.50 (مطلوب شهادة بكالوريوس معتمدة)"
      },
      icon: <FaGraduationCap className="text-3xl text-indigo-600" />,
      bgColor: "bg-indigo-50"
    }
  ];

  const howToApply = {
    title: {
      en: "How to Apply for Scholarships",
      ar: "كيفية التقدم للمنح الدراسية"
    },
    items: [
      {
        en: "Submit your application for admission",
        ar: "تقديم طلب الالتحاق"
      },
      {
        en: "Include all required academic documents",
        ar: "إرفاق جميع المستندات الأكاديمية المطلوبة"
      },
      {
        en: "For special scholarships, provide supporting evidence",
        ar: "للمنح الخاصة، تقديم الأدلة الداعمة"
      },
      {
        en: "Scholarships are automatically considered upon application",
        ar: "يتم النظر في المنح تلقائيًا عند التقديم"
      }
    ],
    button: {
      en: "Apply Now",
      ar: "تقدم الآن"
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 py-12 ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0A0851] mb-4">
          {isArabic ? "المنح الدراسية المتاحة" : "Available Scholarships"}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {isArabic 
            ? "تقدم الجامعة دعمًا ماليًا سخيًا لمساعدة الطلاب الدوليين على تحقيق أحلامهم الأكاديمية" 
            : "NEU offers generous financial support to help international students achieve their academic dreams"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship, index) => (
          <div 
            key={index} 
            className={`${scholarship.bgColor} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="p-6">
              <div className={`flex items-center mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <div className={isArabic ? 'ml-4' : 'mr-4'}>
                  {scholarship.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {scholarship.title[language]}
                </h3>
              </div>
              <p className="text-gray-600 text-lg">
                {scholarship.description[language]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-12 bg-gradient-to-r ${isArabic ? 'from-blue-600 to-[#0A0851]' : 'from-[#0A0851] to-blue-600'} rounded-xl p-8 text-white`}>
        <h2 className="text-2xl font-bold mb-4">
          {howToApply.title[language]}
        </h2>
        <ul className={`list-disc ${isArabic ? 'pr-5' : 'pl-5'} space-y-2`}>
          {howToApply.items.map((item, index) => (
            <li key={index}>{item[language]}</li>
          ))}
        </ul>
        <button className="mt-6 px-6 py-3 bg-white text-[#0A0851] font-bold rounded-lg hover:bg-gray-100 transition-colors">
          {howToApply.button[language]}
        </button>
      </div>
    </div>
  );
};

export default EastScholorships;