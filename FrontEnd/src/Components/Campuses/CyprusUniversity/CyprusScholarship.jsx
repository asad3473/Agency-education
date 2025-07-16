import React from 'react';
import { FaAward, FaUsers, FaHeart, FaRunning, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { GiMoneyStack } from 'react-icons/gi';
import { useAuth } from '../../../contextApi/contextApi';

const CyprusScholarship = () => {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const t = {
    badge: isArabic ? 'الدعم المالي' : 'Financial Support',
    title: isArabic ? 'برامج المنح الدراسية في جامعة CIU' : 'CIU Scholarship Programs',
    description: isArabic
      ? 'دعم مالي سخي لمساعدة الطلاب الدوليين على تحقيق أحلامهم الأكاديمية في قبرص'
      : 'Generous financial support designed to help international students achieve their academic dreams in Cyprus',
    scholarships: [
      {
        title: isArabic ? "منحة تلقائية بنسبة 50%" : "Automatic 50% Scholarship",
        description: isArabic
          ? "تُمنح لجميع الطلاب الدوليين المسجلين في جامعة CIU"
          : "Granted to all international undergraduate students registering at CIU",
        icon: <GiMoneyStack className="text-3xl" />,
        color: "text-yellow-500",
        bgColor: "bg-yellow-50"
      },
      {
        title: isArabic ? "منح التميز الأكاديمي" : "Academic Excellence Scholarships",
        description: isArabic
          ? "خصم 50%، 75% أو 100% من الرسوم الدراسية لكل فصل دراسي بناءً على الأداء الأكاديمي"
          : "50%, 75% or 100% off tuition fee each semester based on academic performance",
        icon: <FaAward className="text-3xl" />,
        color: "text-blue-600",
        bgColor: "bg-blue-50"
      },
      {
        title: isArabic ? "خصم الإخوة" : "Siblings Discount",
        description: isArabic
          ? "خصم 25% لكل أخ/أخت (يتطلب إثبات صلة القرابة)"
          : "25% discount for each sibling attending (proof of kinship required)",
        icon: <FaUsers className="text-3xl" />,
        color: "text-green-600",
        bgColor: "bg-green-50"
      },
      {
        title: isArabic ? "خصم الأزواج" : "Married Couples Discount",
        description: isArabic
          ? "خصم 25% للأزواج المسجلين معًا (يتطلب إثبات الزواج)"
          : "25% discount for married couples attending together (marriage proof required)",
        icon: <FaHeart className="text-3xl" />,
        color: "text-red-500",
        bgColor: "bg-red-50"
      },
      {
        title: isArabic ? "منح رياضية" : "Athletic Scholarships",
        description: isArabic
          ? "للطلاب الذين يمتلكون إنجازات رياضية على المستوى الوطني أو يشاركون في فرق الجامعة"
          : "For students with national-level sports performance or joining CIU sports teams",
        icon: <FaRunning className="text-3xl" />,
        color: "text-purple-600",
        bgColor: "bg-purple-50"
      },
      {
        title: isArabic ? "منح الدراسات العليا" : "Graduate Scholarships",
        description: isArabic
          ? "لطلاب الدراسات العليا بمعدل تراكمي لا يقل عن 3.50 (يتطلب شهادة بكالوريوس معتمدة)"
          : "For graduate students with minimum 3.50 CGPA (valid bachelor diploma required)",
        icon: <FaGraduationCap className="text-3xl" />,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50"
      }
    ],
    processTitle: isArabic ? 'عملية التقديم للمنحة' : 'Scholarship Application Process',
    steps: [
      isArabic ? 'قدّم طلبك للقبول' : 'Submit your application for admission',
      isArabic ? 'أرفق جميع المستندات الأكاديمية المطلوبة' : 'Include all required academic documents',
      isArabic ? 'قدّم إثباتًا للمنح الخاصة إذا لزم الأمر' : 'Provide supporting evidence for special scholarships',
      isArabic ? 'يتم النظر في المنح تلقائيًا عند التقديم' : 'Scholarships are automatically considered upon application',
    ],
    applyNow: isArabic ? 'قدّم الآن' : 'Apply Now',
    tuition: isArabic ? 'تغطية الرسوم الدراسية' : 'Tuition Coverage',
    available: isArabic ? 'متاحة للطلاب المؤهلين' : 'Available for qualified students',
  };

  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${isArabic ? 'rtl text-right' : 'text-left'}`}>
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
          {t.badge}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-[#0A0851] mb-4">
          {t.title}
        </h1>
        <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {t.description}
        </p>
      </div>

      <div className="relative">
        <div className="absolute rounded-3xl "></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {t.scholarships.map((scholarship, index) => (
            <div
              key={index}
              className={`${scholarship.bgColor} rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="p-8">
                <div className={`${scholarship.color} mb-6`}>
                  <div className="inline-flex items-center justify-center w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-white shadow-sm">
                    {scholarship.icon}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                  {scholarship.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {scholarship.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2">
          <div className="p-12 md:p-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {t.processTitle}
            </h2>
            <ul className="space-y-4 text-blue-100">
              {t.steps.map((step, idx) => (
                <li className="flex items-start" key={idx}>
                  <span className="flex-shrink-0 bg-white bg-opacity-20 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-2 h-2 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/applynow" className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-[#F5891B] hover:text-white transition-colors duration-300 shadow-lg flex items-center">
                {t.applyNow} <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block bg-blue-500 bg-opacity-10 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center opacity-20"></div>
            <div className="relative h-full flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">50-100%</div>
                <div className="text-xl text-blue-100 font-medium">{t.tuition}</div>
                <div className="text-blue-200 mt-4">{t.available}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyprusScholarship;
