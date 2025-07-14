import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { FaUniversity, FaChalkboardTeacher, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useAuth } from '../../contextApi/contextApi';

const AboutEducation = () => {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
      },
    }),
  };

  const services = [
    {
      title: isArabic ? 'ماذا نفعل' : 'What We Do',
      icon: <FaUniversity className="text-3xl text-white" />,
      list: isArabic
        ? [
            'المساعدة في التقديم والقبول الجامعي',
            'إرشادات حول المنح والمساعدات المالية',
            'الإرشاد المهني',
            'دعم تقديم طلبات التأشيرة',
            'حجز تذاكر الطيران',
            'خدمات التوصيل من المطار',
          ]
        : [
            'University application and admission assistance',
            'Scholarship and financial aid guidance',
            'Career counselling',
            'Visa application support',
            'Flight ticket booking',
            'Airport pick-up services',
          ],
    },
    {
      title: isArabic ? 'نهجنا' : 'Our Approach',
      icon: <FaChalkboardTeacher className="text-3xl text-white" />,
      list: isArabic
        ? [
            'استشارات أكاديمية مخصصة',
            'دعم تخطيط المسار المهني',
            'قصص نجاح الطلاب',
            'برنامج سفراء الطلاب',
            'معلومات محدثة على موقعنا',
          ]
        : [
            'Personalized academic consulting',
            'Career planning support',
            'Student success stories',
            'Student ambassadors program',
            'Up-to-date info on our website',
          ],
    },
    {
      title: isArabic ? 'لماذا نحن؟' : 'Why Choose Us',
      icon: <FaStar className="text-3xl text-white" />,
      list: isArabic
        ? [
            'معدل نجاح مرتفع في القبول الجامعي',
            'مساعدة في السكن والتوجيه',
            'فرص منح دراسية',
            'دعم وإرشاد للطلاب 24/7',
            'مستشارون معتمدون وذوو خبرة',
            'خيارات دفع مرنة',
          ]
        : [
            'High success rate in university placements',
            'Accommodation & orientation assistance',
            'Scholarship opportunities',
            '24/7 student support and guidance',
            'Accredited and experienced consultants',
            'Flexible payment options',
          ],
    },
  ];

  return (
    <div className={`w-full sm:max-w-6xl mx-auto p-2 py-12 md:px-8 lg:px-10 ${isArabic ? 'rtl' : 'ltr'}`}>
      {/* Text and Images Section */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 w-full">
        {/* Text Content */}
        <div className={`w-full order-2 sm:order-0 ${isArabic ? 'text-right' : 'text-left'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 whitespace-nowrap">
            {isArabic ? 'عن وكالة التعليم' : 'About Agency Education'}
          </h2>
          <p className="text-lg font-semibold text-gray-700 mb-6">
            {isArabic
              ? 'وكالة التعليم منصة موثوقة وموثوقة'
              : 'Agency Education is a trusted & reliable platform'}
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed text-justify">
            {isArabic
              ? 'وكالة التعليم هي منصة مبتكرة مخصصة لتقديم الاستشارات للطلاب في قطر لاختيار الوجهات والجامعات الدراسية المناسبة حول العالم. نحن ملتزمون بتقديم خدمات دعم شاملة للطلاب الراغبين في الدراسة بالخارج.'
              : 'Agency Education is an innovative platform dedicated to providing students in Qatar with expert counseling for choosing the right study locations and universities worldwide. We are committed to transforming the educational landscape by providing comprehensive support services to students aspiring to study abroad.'}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed text-justify">
            {isArabic
              ? 'في وكالة التعليم، نحن نفهم التحديات التي يواجهها الطلاب القطريون عند اتخاذ قرار بشأن البلد المناسب للدراسة. يقدم فريقنا من المستشارين ذوي الخبرة إرشادات شخصية لمساعدة الطلاب على اتخاذ قرارات مدروسة بشأن مستقبلهم الأكاديمي.'
              : 'At Agency Education, we understand the challenges that Qatari students face when deciding which country to choose for their higher education. Our team of experienced counselors provides personalized guidance to help students make informed decisions about their academic future.'}
          </p>

          <div className={`${isArabic ? 'flex justify-end' : ''} mt-4`}>
            <button className="px-4 py-2 rounded-md bg-[#0A0851] text-white transition-all duration-300 hover:bg-[#F5891B] hover:w-3/12">
              {isArabic ? 'اقرأ المزيد' : 'Read More'}
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="w-full relative h-96 md:h-auto">
          <img
            src="/Homeimages/ouruni/one.avif"
            alt="Students receiving counseling"
            className={`absolute w-3/4 rounded-lg shadow-md z-10 top-0 ${isArabic ? 'left-0' : 'right-0'} h-60 object-cover`}
          />
          <img
            src="/Homeimages/ouruni/two.avif"
            alt="University buildings"
            className={`absolute w-3/4 rounded-lg shadow-md z-20 top-1/4 sm:top-2/4 ${isArabic ? 'left-1/4' : 'right-1/4'} h-60 object-cover opacity-90`}
          />
        </div>
      </div>

      {/* Service Cards */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 sm:mt-22 ${isArabic ? 'text-right' : 'text-left'}`}>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mt-30">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md hover:shadow-amber-50 transition-all delay-100 shadow-[#0A0851] rounded-2xl p-6 border border-gray-200 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeInDown}
          >
            <div className={`flex flex-col ${isArabic ? 'items-end' : 'items-center'} gap-3 mb-4`}>
              <span className="p-4 bg-[#0A0851] rounded-full transition-all delay-100 group-hover:bg-[#F5891B]">
                {service.icon}
              </span>
              <h3 className="text-2xl font-semibold border-l-2 px-2 text-center">
                {service.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {service.list.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex gap-2 items-start ${isArabic ? 'flex-row-reverse' : ''}`}
                >
                  <FiCheckCircle className="text-[#0A0851] mt-1" />
                  <span className="text-md">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AboutEducation;
