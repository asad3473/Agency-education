import React from 'react';
import { FaAward, FaUsers, FaHeart, FaRunning, FaGraduationCap } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { useAuth } from '../../../contextApi/contextApi';

const KyreniaScholorship = () => {
  const { language } = useAuth();

  const scholarships = [
    {
      title: language === "ar" ? "منحة تلقائية بنسبة 50٪" : "Automatic 50% Scholarship",
      description:
        language === "ar"
          ? "تُمنح لجميع طلاب البكالوريوس الدوليين المسجلين في جامعة كيرينيا"
          : "Granted to all international undergraduate students registering at UOK",
      icon: <GiMoneyStack className="text-3xl text-yellow-500" />,
      bgColor: "bg-blue-50"
    },
    {
      title: language === "ar" ? "منح التفوق الأكاديمي" : "Academic Excellence Scholarships",
      description:
        language === "ar"
          ? "خصم 50٪ أو 75٪ أو 100٪ على الرسوم الدراسية لكل فصل دراسي بناءً على الأداء الأكاديمي"
          : "50%, 75% or 100% off tuition fee each semester based on academic performance",
      icon: <FaAward className="text-3xl text-blue-600" />,
      bgColor: "bg-blue-100"
    },
    {
      title: language === "ar" ? "خصم الأشقاء" : "Siblings Discount",
      description:
        language === "ar"
          ? "خصم 25٪ لكل شقيق مسجل (مطلوب إثبات القرابة)"
          : "25% discount for each sibling attending (proof of kinship required)",
      icon: <FaUsers className="text-3xl text-green-600" />,
      bgColor: "bg-green-50"
    },
    {
      title: language === "ar" ? "خصم الأزواج" : "Married Couples Discount",
      description:
        language === "ar"
          ? "خصم 25٪ للأزواج الذين يدرسون معًا (مطلوب إثبات الزواج)"
          : "25% discount for married couples attending together (marriage proof required)",
      icon: <FaHeart className="text-3xl text-red-500" />,
      bgColor: "bg-red-50"
    },
    {
      title: language === "ar" ? "منح رياضية" : "Athletic Scholarships",
      description:
        language === "ar"
          ? "للطلاب الذين لديهم أداء رياضي على المستوى الوطني أو المنضمين إلى الفرق الرياضية بالجامعة"
          : "For students with national-level sports performance or joining UOK sports teams",
      icon: <FaRunning className="text-3xl text-purple-600" />,
      bgColor: "bg-purple-50"
    },
    {
      title: language === "ar" ? "منح الدراسات العليا" : "Graduate Scholarships",
      description:
        language === "ar"
          ? "لطلاب الدراسات العليا الحاصلين على معدل تراكمي لا يقل عن 3.50 (مطلوب شهادة بكالوريوس)"
          : "For graduate students with minimum 3.50 CGPA (valid bachelor diploma required)",
      icon: <FaGraduationCap className="text-3xl text-indigo-600" />,
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0A0851] mb-4">
          {language === "ar" ? "المنح المتوفرة" : "Available Scholarships"}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {language === "ar"
            ? "تقدم جامعة كيرينيا دعمًا ماليًا سخيًا لمساعدة الطلاب الدوليين على تحقيق أحلامهم الأكاديمية"
            : "UOK offers generous financial support to help international students achieve their academic dreams"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship, index) => (
          <div
            key={index}
            className={`${scholarship.bgColor} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="p-6">
              <div className={`flex items-center mb-4 ${language === "ar" ? "flex-row-reverse text-right" : ""}`}>
                <div className={language === "ar" ? "ml-4" : "mr-4"}>{scholarship.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{scholarship.title}</h3>
              </div>
              <p className={`text-gray-600 text-lg ${language === "ar" ? "text-right" : "text-left"}`}>
                {scholarship.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-[#0A0851] to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">
          {language === "ar" ? "كيفية التقديم على المنح" : "How to Apply for Scholarships"}
        </h2>
        <ul className={`list-disc pl-5 space-y-2 ${language === "ar" ? "text-right list-inside" : "text-left"}`}>
          <li>{language === "ar" ? "قدم طلبك للقبول" : "Submit your application for admission"}</li>
          <li>{language === "ar" ? "أرفق جميع الوثائق الأكاديمية المطلوبة" : "Include all required academic documents"}</li>
          <li>{language === "ar" ? "للمنح الخاصة، قدم الأدلة الداعمة" : "For special scholarships, provide supporting evidence"}</li>
          <li>{language === "ar" ? "يتم النظر تلقائيًا في المنح عند التقديم" : "Scholarships are automatically considered upon application"}</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-white text-[#0A0851] font-bold rounded-lg hover:bg-gray-100 transition-colors">
          {language === "ar" ? "قدّم الآن" : "Apply Now"}
        </button>
      </div>
    </div>
  );
};

export default KyreniaScholorship;
