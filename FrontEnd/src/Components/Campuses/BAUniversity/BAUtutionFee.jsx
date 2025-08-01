import React from 'react';
import { FaEuroSign, FaUniversity, FaGraduationCap, FaFlask, FaTooth, FaMedkit } from 'react-icons/fa';
import { useAuth } from '../../../contextApi/contextApi';

const BAUtutionFee = () => {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const tuitionData = {
    overview: {
      description: isArabic
        ? "تقدم BCU تعليماً ميسور التكلفة مع منح تلقائية بنسبة 50% للطلاب الدوليين وخطط دفع مرنة."
        : "BCU offers affordable tuition with 50% automatic scholarships for international students and flexible payment plans.",
      highlights: isArabic
        ? [
            "منحة تلقائية 50% لجميع الطلاب الدوليين",
            "خيارات دفع بالتقسيط الشهري متاحة",
            "باقة شاملة (الرسوم + السكن + الوجبات) تبدأ من 4500 يورو/السنة"
          ]
        : [
            "50% automatic scholarship for all international students",
            "Monthly installment payment options available",
            "All-Inclusive Package (tuition + accommodation + meals) from €4500/year"
          ]
    },
    undergraduate: [
      { program: isArabic ? "البرامج العادية" : "Standard Programs", fullFee: "€5,843", scholarshipFee: "€3,099", icon: <FaUniversity /> },
      { program: isArabic ? "الصيدلة" : "Pharmacy", fullFee: "€7,844", scholarshipFee: "€4,099", icon: <FaFlask /> },
      { program: isArabic ? "طب الأسنان" : "Dentistry", fullFee: "€10,645", scholarshipFee: "€5,500", icon: <FaTooth /> },
      { program: isArabic ? "الطب" : "Medicine", fullFee: "€12,955", scholarshipFee: "€6,655", icon: <FaMedkit /> }
    ],
    masters: {
      withThesis: {
        title: isArabic ? "برامج مع أطروحة" : "Programs With Thesis",
        fees: [
          { item: isArabic ? "رسوم لكل مقرر" : "Fee per course", amount: "€350" },
          { item: isArabic ? "رسوم الأطروحة" : "Thesis fee", amount: "€1,050" },
          { item: isArabic ? "رسوم الندوة" : "Seminar fee", amount: "€120" },
          { item: isArabic ? "رسوم التسجيل" : "Registration fee", amount: "€245*" },
          { item: isArabic ? "رسوم اتحاد الطلاب" : "Student Union fee", amount: "€50" }
        ],
        note: isArabic
          ? "*245 يورو لأول سنة، 195 يورو بعد السنة الأولى. تطبق ضريبة القيمة المضافة. إضافة 335 يورو للبرامج البيئية."
          : "*€195 after first year. VAT applies. Additional €335 for Environmental programs."
      },
      withoutThesis: {
        title: isArabic ? "برامج بدون أطروحة" : "Programs Without Thesis",
        fees: [
          { item: isArabic ? "رسوم لكل مقرر" : "Fee per course", amount: "€350" },
          { item: isArabic ? "مشروع الفصل الدراسي" : "Term project", amount: "€120" },
          { item: isArabic ? "رسوم التسجيل" : "Registration fee", amount: "€245*" },
          { item: isArabic ? "رسوم اتحاد الطلاب" : "Student Union fee", amount: "€50" }
        ],
        note: isArabic
          ? "*245 يورو لأول سنة، 195 يورو بعد السنة الأولى. تطبق ضريبة القيمة المضافة. إضافة 335 يورو للبرامج البيئية."
          : "*€195 after first year. VAT applies. Additional €335 for Environmental programs."
      }
    },
    phd: {
      title: isArabic ? "برامج الدكتوراه" : "PhD Programs",
      fees: [
        { item: isArabic ? "رسوم لكل مقرر" : "Fee per course", amount: "€650" },
        { item: isArabic ? "الأطروحة (4 فصول دراسية)" : "Thesis (4 semesters)", amount: "€2,600" },
        { item: isArabic ? "رسوم الندوة" : "Seminar fee", amount: "€200" },
        { item: isArabic ? "رسوم التسجيل" : "Registration fee", amount: "€245*" },
        { item: isArabic ? "رسوم اتحاد الطلاب" : "Student Union fee", amount: "€50" }
      ],
      note: isArabic
        ? "*245 يورو لأول سنة، 195 يورو بعد السنة الأولى. تطبق ضريبة القيمة المضافة. إضافة 480 يورو للبرامج البيئية."
        : "*€195 after first year. VAT applies. Additional €480 for Environmental programs."
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0A0851] mb-4">
          {isArabic ? "الرسوم الدراسية في BCU" : "Tuition Fees at BCU"}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {isArabic
            ? "تعليم ميسور التكلفة مع منح تلقائية للطلاب الدوليين"
            : "Affordable education with automatic scholarships for international students"}
        </p>
      </div>

      {/* Overview Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12 shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-[#0A0851] mb-4">{isArabic ? "نظرة عامة مالية" : "Financial Overview"}</h2>
            <p className="text-gray-700 mb-4">{tuitionData.overview.description}</p>
            <ul className="space-y-2">
              {tuitionData.overview.highlights.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-inner text-center">
            <div className="text-5xl text-blue-500 mb-4 flex justify-center">
              <FaEuroSign />
            </div>
            <h3 className="text-xl font-bold mb-2">{isArabic ? "الباقة الشاملة" : "All-Inclusive Package"}</h3>
            <p className="text-gray-600 mb-2">{isArabic ? "من 4500 يورو/السنة" : "From €4500/year"}</p>
            <p className="text-sm text-gray-500">{isArabic ? "(الرسوم + السكن + الوجبات + التأمين)" : "(Tuition + Accommodation + Meals + Insurance)"}</p>
          </div>
        </div>
      </div>

      {/* Undergraduate Programs */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[#0A0851] mb-6 flex items-center justify-center md:justify-start">
          <FaGraduationCap className="mr-3" />
          {isArabic ? "برامج المرحلة الجامعية" : "Undergraduate Programs"}
        </h2>

        {/* Table View */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-[#0A0851] text-white">
              <tr>
                <th className={`py-3 px-4 ${isArabic ? 'text-right' : 'text-left'}`}>{isArabic ? "البرنامج" : "Program"}</th>
                <th className={`py-3 px-4 ${isArabic ? 'text-left' : 'text-right'}`}>{isArabic ? "الرسوم كاملة" : "Full Fee"}</th>
                <th className={`py-3 px-4 ${isArabic ? 'text-left' : 'text-right'}`}>{isArabic ? "مع منحة 50%" : "With 50% Scholarship"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tuitionData.undergraduate.map((program, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className={`py-4 px-4 flex items-center ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <span className={`mr-3 text-blue-500 ${isArabic ? 'ml-3 mr-0' : ''}`}>{program.icon}</span>
                    {program.program}
                  </td>
                  <td className={`py-4 px-4 font-medium ${isArabic ? 'text-left' : 'text-right'}`}>{program.fullFee}</td>
                  <td className={`py-4 px-4 text-green-600 font-semibold ${isArabic ? 'text-left' : 'text-right'}`}>{program.scholarshipFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tuitionData.undergraduate.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-blue-500 text-3xl mb-3">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.program}</h3>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600">{isArabic ? "الرسوم كاملة:" : "Full Fee:"}</span>
                  <span className="font-medium">{program.fullFee}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isArabic ? "مع المنحة:" : "With Scholarship:"}</span>
                  <span className="text-green-600 font-semibold">{program.scholarshipFee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Graduate Programs */}
      <div className="space-y-16">
        {/* Masters Programs */}
        <div>
          <h2 className={`text-3xl font-bold text-[#0A0851] mb-6 text-center ${isArabic ? 'text-start':'text-start'} `}>{isArabic ? "برامج الماجستير" : "Master's Degree Programs"}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* With Thesis */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-blue-100 p-4">
                <h3 className="text-xl font-bold text-[#0A0851]">{tuitionData.masters.withThesis.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tuitionData.masters.withThesis.fees.map((fee, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-700">{fee.item}</span>
                      <span className="font-medium">{fee.amount}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500">{tuitionData.masters.withThesis.note}</p>
              </div>
            </div>

            {/* Without Thesis */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-indigo-100 p-4">
                <h3 className="text-xl font-bold text-[#0A0851]">{tuitionData.masters.withoutThesis.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tuitionData.masters.withoutThesis.fees.map((fee, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-700">{fee.item}</span>
                      <span className="font-medium">{fee.amount}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500">{tuitionData.masters.withoutThesis.note}</p>
              </div>
            </div>
          </div>
        </div>

        {/* PhD Programs */}
        <div>
          <h2 className={`text-3xl font-bold text-[#0A0851] mb-6 text-center  ${isArabic ? 'text-start':'text-start'} `}>{tuitionData.phd.title}</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-purple-100 p-4">
              <h3 className="text-xl font-bold text-[#0A0851]">{isArabic ? "رسوم البرنامج" : "Program Fees"}</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {tuitionData.phd.fees.map((fee, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-gray-700">{fee.item}</span>
                    <span className="font-medium">{fee.amount}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500">{tuitionData.phd.note}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-[#0A0851] rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">{isArabic ? "هل أنت مستعد لبدء رحلتك في BCU؟" : "Ready to Start Your Journey at BCU?"}</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          {isArabic
            ? "تواصل مع فريق القبول لدينا لمعلومات مخصصة عن الرسوم وخطط الدفع."
            : "Contact our admissions team for personalized tuition information and payment plans."}
        </p>
        <button className="px-8 py-3 bg-white text-[#0A0851] font-bold rounded-lg hover:bg-gray-100 transition-colors">
          {isArabic ? "اطلب معلومات" : "Request Information"}
        </button>
      </div>
    </div>
  );
};

export default BAUtutionFee;
