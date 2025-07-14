import React from "react";
import { FaGraduationCap, FaGlobe, FaAward, FaUserTie } from "react-icons/fa";
import { useAuth } from "../../contextApi/contextApi";

const LayoutUni = () => {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const content = {
    heading: isArabic ? "جامعات الشرق الأوسط" : "Middle East Universities",
    description: isArabic
      ? "برزت قطر كمركز تعليمي عالمي من خلال المدينة التعليمية التي تضم فروعًا لأفضل الجامعات العالمية، وتقدم درجات علمية معترف بها دوليًا برؤية شرق أوسطية."
      : "Qatar has emerged as a global education hub with its prestigious Education City hosting branch campuses of the world's top universities. These institutions offer internationally recognized degrees with a Middle Eastern perspective.",
    button: isArabic ? "استكشاف الجامعات" : "Explore Universities",
    cards: [
      {
        icon: <FaGraduationCap className="text-3xl text-[#0A0851]" />,
        title: isArabic ? "جامعات دولية" : "International Universities",
        desc: isArabic
          ? "بما في ذلك قبرص الدولية، الشرق الأدنى، البحر الأبيض المتوسط الشرقية..."
          : "Including Cyprus International, Near East, Eastern Mediterranean..",
      },
      {
        icon: <FaGlobe className="text-3xl text-[#0A0851]" />,
        title: isArabic ? "الاعتراف العالمي" : "Global Recognition",
        desc: isArabic
          ? "شهادات مطابقة تمامًا لشهادات الحرم الجامعي الرئيسي"
          : "Degrees identical to main campus diplomas",
      },
      {
        icon: <FaAward className="text-3xl text-[#0A0851]" />,
        title: isArabic ? "تميز في البحث العلمي" : "Research Excellence",
        desc: isArabic
          ? "مرافق متطورة وتمويل عالي المستوى"
          : "State-of-the-art facilities and funding",
      },
      {
        icon: <FaUserTie className="text-3xl text-[#0A0851]" />,
        title: isArabic ? "فرص وظيفية" : "Career Opportunities",
        desc: isArabic
          ? "روابط قوية مع الصناعة في اقتصاد قطر المتنامي"
          : "Strong industry connections in Qatar's growing economy",
      },
    ]
  };

  return (
    <div className="relative py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] 
          bg-cover bg-center bg-no-repeat"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-orange-800/80 to-blue-900/90"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isArabic ? 'rtl' : 'ltr'}`}>
          {/* Left Side - Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500 opacity-100">
              <img
                src="https://img.freepik.com/premium-photo/group-cheerful-diverse-college-students-is-looking-laptop-screen-showing-their-fist_67155-39986.jpg?ga=GA1.1.1282045916.1738737306&semt=ais_hybrid&w=740"
                alt="Education"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`lg:w-1/2 w-full text-white ${isArabic ? 'text-right' : 'text-left'}`}>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white underline">{content.heading}</span>
            </h2>

            <p className="text-lg mb-8 leading-relaxed">
              {content.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {content.cards.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <div className={`flex items-start gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-blue-100">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 w-fit px-4 py-2 rounded-md bg-[#F5891B] text-white transition-all delay-100 duration-300 hover:text-white hover:w-4/12 cursor-pointer hover:bg-[#0A0851]">
              {content.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutUni;
