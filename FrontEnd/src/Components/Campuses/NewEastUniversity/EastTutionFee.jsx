import React from 'react';
import { FaEuroSign, FaUniversity, FaGraduationCap, FaFlask, FaTooth, FaMedkit } from 'react-icons/fa';
import { useAuth } from '../../../contextApi/contextApi';

const EastTutionFee = () => {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const tuitionData = {
    overview: {
      description: {
        en: "NEU offers affordable tuition with 50% automatic scholarships for international students and flexible payment plans.",
        ar: "تقدم الجامعة رسوم دراسية معقولة مع منح تلقائية بنسبة 50٪ للطلاب الدوليين وخطط سداد مرنة."
      },
      highlights: [
        {
          en: "50% automatic scholarship for all international students",
          ar: "منحة تلقائية 50٪ لجميع الطلاب الدوليين"
        },
        {
          en: "Monthly installment payment options available",
          ar: "خيارات دفع شهرية متاحة"
        },
        {
          en: "All-Inclusive Package (tuition + accommodation + meals) from €4500/year",
          ar: "باقة شاملة (الرسوم الدراسية + السكن + الوجبات) من 4500 يورو سنويًا"
        }
      ]
    },
    undergraduate: [
      { 
        program: {
          en: "Standard Programs",
          ar: "البرامج القياسية"
        }, 
        fullFee: "€5,843", 
        scholarshipFee: "€3,099", 
        icon: <FaUniversity /> 
      },
      { 
        program: {
          en: "Pharmacy",
          ar: "الصيدلة"
        }, 
        fullFee: "€7,844", 
        scholarshipFee: "€4,099", 
        icon: <FaFlask /> 
      },
      { 
        program: {
          en: "Dentistry",
          ar: "طب الأسنان"
        }, 
        fullFee: "€10,645", 
        scholarshipFee: "€5,500", 
        icon: <FaTooth /> 
      },
      { 
        program: {
          en: "Medicine",
          ar: "الطب"
        }, 
        fullFee: "€12,955", 
        scholarshipFee: "€6,655", 
        icon: <FaMedkit /> 
      }
    ],
    masters: {
      withThesis: {
        fees: [
          { 
            item: {
              en: "Fee per course",
              ar: "رسوم لكل مقرر"
            }, 
            amount: "€350" 
          },
          { 
            item: {
              en: "Thesis fee",
              ar: "رسوم الأطروحة"
            }, 
            amount: "€1,050" 
          },
          { 
            item: {
              en: "Seminar fee",
              ar: "رسوم الندوة"
            }, 
            amount: "€120" 
          },
          { 
            item: {
              en: "Registration fee",
              ar: "رسوم التسجيل"
            }, 
            amount: "€245*" 
          },
          { 
            item: {
              en: "Student Union fee",
              ar: "رسوم اتحاد الطلاب"
            }, 
            amount: "€50" 
          }
        ],
        note: {
          en: "*€195 after first year. VAT applies. Additional €335 for Environmental programs.",
          ar: "*195 يورو بعد السنة الأولى. تنطبق ضريبة القيمة المضافة. 335 يورو إضافية لبرامج البيئة."
        }
      },
      withoutThesis: {
        fees: [
          { 
            item: {
              en: "Fee per course",
              ar: "رسوم لكل مقرر"
            }, 
            amount: "€350" 
          },
          { 
            item: {
              en: "Term project",
              ar: "مشروع الفصل الدراسي"
            }, 
            amount: "€120" 
          },
          { 
            item: {
              en: "Registration fee",
              ar: "رسوم التسجيل"
            }, 
            amount: "€245*" 
          },
          { 
            item: {
              en: "Student Union fee",
              ar: "رسوم اتحاد الطلاب"
            }, 
            amount: "€50" 
          }
        ],
        note: {
          en: "*€195 after first year. VAT applies. Additional €335 for Environmental programs.",
          ar: "*195 يورو بعد السنة الأولى. تنطبق ضريبة القيمة المضافة. 335 يورو إضافية لبرامج البيئة."
        }
      }
    },
    phd: {
      fees: [
        { 
          item: {
            en: "Fee per course",
            ar: "رسوم لكل مقرر"
          }, 
          amount: "€650" 
        },
        { 
          item: {
            en: "Thesis (4 semesters)",
            ar: "الأطروحة (4 فصول دراسية)"
          }, 
          amount: "€2,600" 
        },
        { 
          item: {
            en: "Seminar fee",
            ar: "رسوم الندوة"
          }, 
          amount: "€200" 
        },
        { 
          item: {
            en: "Registration fee",
            ar: "رسوم التسجيل"
          }, 
          amount: "€245*" 
        },
        { 
          item: {
            en: "Student Union fee",
            ar: "رسوم اتحاد الطلاب"
          }, 
          amount: "€50" 
        }
      ],
      note: {
        en: "*€195 after first year. VAT applies. Additional €480 for Environmental programs.",
        ar: "*195 يورو بعد السنة الأولى. تنطبق ضريبة القيمة المضافة. 480 يورو إضافية لبرامج البيئة."
      }
    },
    cta: {
      title: {
        en: "Ready to Start Your Journey at NEU?",
        ar: "هل أنت مستعد لبدء رحلتك مع الجامعة؟"
      },
      description: {
        en: "Contact our admissions team for personalized tuition information and payment plans.",
        ar: "تواصل مع فريق القبول للحصول على معلومات مخصصة عن الرسوم وخطط السداد."
      },
      button: {
        en: "Request Information",
        ar: "طلب المعلومات"
      }
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 py-12 ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0A0851] mb-4">
          {isArabic ? "الرسوم الدراسية في الجامعة" : "Tuition Fees at NEU"}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {isArabic 
            ? "تعليم بأسعار معقولة مع منح تلقائية للطلاب الدوليين" 
            : "Affordable education with automatic scholarships for international students"}
        </p>
      </div>

      <div className={`bg-gradient-to-r ${isArabic ? 'from-indigo-50 to-blue-50' : 'from-blue-50 to-indigo-50'} rounded-xl p-8 mb-12 shadow-md`}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-[#0A0851] mb-4">
              {isArabic ? "نظرة مالية عامة" : "Financial Overview"}
            </h2>
            <p className="text-gray-700 mb-4">{tuitionData.overview.description[language]}</p>
            <ul className="space-y-2">
              {tuitionData.overview.highlights.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{item[language]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-inner text-center">
            <div className="text-5xl text-blue-500 mb-4 flex justify-center">
              <FaEuroSign />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {isArabic ? "الباقة الشاملة" : "All-Inclusive Package"}
            </h3>
            <p className="text-gray-600 mb-2">From €4500/year</p>
            <p className="text-sm text-gray-500">
              {isArabic 
                ? "(الرسوم الدراسية + السكن + الوجبات + التأمين)" 
                : "(Tuition + Accommodation + Meals + Insurance)"}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[#0A0851] mb-6 flex items-center">
          <FaGraduationCap className={isArabic ? 'ml-3' : 'mr-3'} />
          {isArabic ? "برامج البكالوريوس" : "Undergraduate Programs"}
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-[#0A0851] text-white">
              <tr>
                <th className="py-3 px-4 text-left">{isArabic ? "البرنامج" : "Program"}</th>
                <th className="py-3 px-4 text-right">{isArabic ? "الرسوم الكاملة" : "Full Fee"}</th>
                <th className="py-3 px-4 text-right">{isArabic ? "بعد خصم 50%" : "With 50% Scholarship"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tuitionData.undergraduate.map((program, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-4 px-4 flex items-center">
                    <span className={isArabic ? 'ml-3' : 'mr-3'}>{program.icon}</span>
                    {program.program[language]}
                  </td>
                  <td className="py-4 px-4 text-right font-medium">{program.fullFee}</td>
                  <td className="py-4 px-4 text-right text-green-600 font-semibold">{program.scholarshipFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tuitionData.undergraduate.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-blue-500 text-3xl mb-3">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.program[language]}</h3>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-600">{isArabic ? "الرسوم الكاملة:" : "Full Fee:"}</span>
                  <span className="font-medium">{program.fullFee}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{isArabic ? "بعد الخصم:" : "With Scholarship:"}</span>
                  <span className="text-green-600 font-semibold">{program.scholarshipFee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        <div>
          <h2 className="text-3xl font-bold text-[#0A0851] mb-6">
            {isArabic ? "برامج الماجستير" : "Master's Degree Programs"}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-blue-100 p-4">
                <h3 className="text-xl font-bold text-[#0A0851]">
                  {isArabic ? "برامج مع أطروحة" : "Programs With Thesis"}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tuitionData.masters.withThesis.fees.map((fee, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-700">{fee.item[language]}</span>
                      <span className="font-medium">{fee.amount}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  {tuitionData.masters.withThesis.note[language]}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-indigo-100 p-4">
                <h3 className="text-xl font-bold text-[#0A0851]">
                  {isArabic ? "برامج بدون أطروحة" : "Programs Without Thesis"}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tuitionData.masters.withoutThesis.fees.map((fee, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-700">{fee.item[language]}</span>
                      <span className="font-medium">{fee.amount}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  {tuitionData.masters.withoutThesis.note[language]}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#0A0851] mb-6">
            {isArabic ? "برامج الدكتوراه" : "PhD Programs"}
          </h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-purple-100 p-4">
              <h3 className="text-xl font-bold text-[#0A0851]">
                {isArabic ? "الرسوم الدراسية" : "Program Fees"}
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {tuitionData.phd.fees.map((fee, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-gray-700">{fee.item[language]}</span>
                    <span className="font-medium">{fee.amount}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                {tuitionData.phd.note[language]}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-16 bg-[#0A0851] rounded-xl p-8 text-white text-center ${isArabic ? 'rtl' : 'ltr'}`}>
        <h2 className="text-2xl font-bold mb-4">{tuitionData.cta.title[language]}</h2>
        <p className="mb-6 max-w-2xl mx-auto">{tuitionData.cta.description[language]}</p>
        <button className="px-8 py-3 bg-white text-[#0A0851] font-bold rounded-lg hover:bg-gray-100 transition-colors">
          {tuitionData.cta.button[language]}
        </button>
      </div>
    </div>
  );
};

export default EastTutionFee;