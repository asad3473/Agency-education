import React from 'react';
import { FaAward, FaUsers, FaHeart, FaRunning, FaGraduationCap } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { useAuth } from "../../../contextApi/contextApi";

const MedetrianScholorship = () => {
  const { language } = useAuth();
  const isArabic = language === "ar";

  const scholarships = [
    {
      title: isArabic ? "منحة تلقائية 50%" : "Automatic 50% Scholarship",
      description: isArabic
        ? "تُمنح لجميع الطلاب الدوليين المسجلين في مرحلة البكالوريوس في جامعة EMU"
        : "Granted to all international undergraduate students registering at EMU",
      icon: <GiMoneyStack className="text-3xl text-yellow-500" />,
      bgColor: "bg-blue-50"
    },
    {
      title: isArabic ? "منح التفوق الأكاديمي" : "Academic Excellence Scholarships",
      description: isArabic
        ? "خصم 50٪ أو 75٪ أو 100٪ من الرسوم الدراسية كل فصل دراسي بناءً على الأداء الأكاديمي"
        : "50%, 75% or 100% off tuition fee each semester based on academic performance",
      icon: <FaAward className="text-3xl text-blue-600" />,
      bgColor: "bg-blue-100"
    },
    {
      title: isArabic ? "خصم الأخوة" : "Siblings Discount",
      description: isArabic
        ? "خصم 25٪ لكل أخ/أخت يدرسون (يُطلب إثبات القرابة)"
        : "25% discount for each sibling attending (proof of kinship required)",
      icon: <FaUsers className="text-3xl text-green-600" />,
      bgColor: "bg-green-50"
    },
    {
      title: isArabic ? "خصم الأزواج المتزوجين" : "Married Couples Discount",
      description: isArabic
        ? "خصم 25٪ للأزواج الذين يدرسون معًا (يُطلب إثبات الزواج)"
        : "25% discount for married couples attending together (marriage proof required)",
      icon: <FaHeart className="text-3xl text-red-500" />,
      bgColor: "bg-red-50"
    },
    {
      title: isArabic ? "منح رياضية" : "Athletic Scholarships",
      description: isArabic
        ? "للطلاب الذين لديهم أداء رياضي على المستوى الوطني أو ينضمون لفرق EMU الرياضية"
        : "For students with national-level sports performance or joining EMU sports teams",
      icon: <FaRunning className="text-3xl text-purple-600" />,
      bgColor: "bg-purple-50"
    },
    {
      title: isArabic ? "منح الدراسات العليا" : "Graduate Scholarships",
      description: isArabic
        ? "للطلاب الخريجين الذين لديهم معدل CGPA لا يقل عن 3.50 (يُطلب شهادة بكالوريوس صالحة)"
        : "For graduate students with minimum 3.50 CGPA (valid bachelor diploma required)",
      icon: <FaGraduationCap className="text-3xl text-indigo-600" />,
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12" dir={isArabic ? "rtl" : "ltr"}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0A0851] mb-4">
          {isArabic ? "المنح المتاحة" : "Available Scholarships"}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {isArabic
            ? "تقدم جامعة EMU دعمًا ماليًا سخيًا لمساعدة الطلاب الدوليين على تحقيق أحلامهم الأكاديمية"
            : "EMU offers generous financial support to help international students achieve their academic dreams"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship, index) => (
          <div
            key={index}
            className={`${scholarship.bgColor} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`${isArabic ? "ml-4" : "mr-4"}`}>
                  {scholarship.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {scholarship.title}
                </h3>
              </div>
              <p className={`text-gray-600 text-lg ${isArabic ? "text-right" : ""}`}>
                {scholarship.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-[#0A0851] to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">
          {isArabic ? "كيفية التقديم على المنح" : "How to Apply for Scholarships"}
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>{isArabic ? "قدّم طلب الالتحاق بالجامعة" : "Submit your application for admission"}</li>
          <li>{isArabic ? "قم بإرفاق جميع المستندات الأكاديمية المطلوبة" : "Include all required academic documents"}</li>
          <li>{isArabic ? "للحصول على منح خاصة، قدم الأدلة المطلوبة" : "For special scholarships, provide supporting evidence"}</li>
          <li>{isArabic ? "يتم النظر تلقائيًا في المنح عند التقديم" : "Scholarships are automatically considered upon application"}</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-white text-[#0A0851] font-bold rounded-lg hover:bg-gray-100 transition-colors">
          {isArabic ? "قدّم الآن" : "Apply Now"}
        </button>
      </div>
    </div>
  );
};

export default MedetrianScholorship;
