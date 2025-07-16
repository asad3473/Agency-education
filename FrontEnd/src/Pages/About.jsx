import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaUniversity,
  FaGift,
  FaHeadset,
  FaHandshake,
  FaUserGraduate,
} from "react-icons/fa";
import { useAuth } from "../contextApi/contextApi";


// FAQ Item Component with enhanced animation
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        layout: { duration: 0.3, type: "spring", damping: 25 },
        default: { duration: 0.5 },
      }}
      className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0A0851] hover:shadow-lg"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="font-semibold text-lg text-gray-800">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FaMinus className="text-[#F5891B] text-lg" />
          ) : (
            <FaPlus className="text-[#F5891B] text-lg" />
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                opacity: { delay: 0.15 },
                height: { type: "spring", damping: 20 },
              },
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-gray-600 leading-relaxed overflow-hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const About = () => {
  const { language } = useAuth();

  // Translations
  const translations = {
    heroTitle: {
      en: "About Our Agency",
      ar: "حول وكالتنا"
    },
    heroSubtitle: {
      en: "Your trusted partner for academic success in North Cyprus",
      ar: "شريكك الموثوق للنجاح الأكاديمي في شمال قبرص"
    },
    aboutCompany: {
      en: "ABOUT COMPANY",
      ar: "حول الشركة"
    },
    trustedAgency: {
      en: "Trusted Academic Agency for North Cyprus Universities",
      ar: "وكالة أكاديمية موثوقة لجامعات شمال قبرص"
    },
    welcomeText: {
      en: "Welcome to our agency... accommodation assistance.",
      ar: "مرحبًا بكم في وكالتنا... مساعدة في السكن."
    },
    contactUs: {
      en: "CONTACT US",
      ar: "اتصل بنا"
    },
    ourCommitment: {
      en: "Our Commitment",
      ar: "التزامنا"
    },
    commitmentText: {
      en: "At our agency, we understand...",
      ar: "في وكالتنا، نحن ندرك..."
    },
    exclusiveAgents: {
      en: "Exclusive agents for various universities",
      ar: "وكلاء حصريون للعديد من الجامعات"
    },
    privilegedAccess: {
      en: "Privileged access to resources",
      ar: "وصول مميز إلى الموارد"
    },
    comprehensiveSupport: {
      en: "Comprehensive support...",
      ar: "دعم شامل..."
    },
    studentsPlaced: {
      en: "Students Placed",
      ar: "طلاب تم تسكينهم"
    },
    partnerUniversities: {
      en: "Partner Universities",
      ar: "جامعات شريكة"
    },
    freeServices: {
      en: "Free Services",
      ar: "خدمات مجانية"
    },
    whyChooseUs: {
      en: "WHY CHOOSE US",
      ar: "لماذا تختارنا"
    },
    reasonsTitle: {
      en: "Reasons For Choosing Our Agency",
      ar: "أسباب لاختيار وكالتنا"
    },
    reasonsSubtitle: {
      en: "We stand out... student-focused approach",
      ar: "نحن متميزون... نهج يركز على الطالب"
    },
    reliableAgency: {
      en: "Reliable Agency",
      ar: "وكالة موثوقة"
    },
    agencyDesc: {
      en: "Officially recognized by all major universities in North Cyprus with years of proven success",
      ar: "معترف بها رسميًا من قبل جميع الجامعات الكبرى في شمال قبرص مع سنوات من النجاح المثبت"
    },
    freeServicesTitle: {
      en: "100% Free Services",
      ar: "خدمات مجانية 100%"
    },
    freeServicesDesc: {
      en: "No hidden charges - our consultation, application, and visa services are completely free",
      ar: "لا توجد رسوم خفية - خدمات الاستشارة والتقديم والتأشيرة لدينا مجانية تمامًا"
    },
    scholarshipsTitle: {
      en: "Exclusive Scholarships",
      ar: "منح دراسية حصرية"
    },
    scholarshipsDesc: {
      en: "Access to special scholarships and discounts available only through our agency",
      ar: "الوصول إلى منح دراسية خاصة وخصومات متاحة فقط من خلال وكالتنا"
    },
    haveQuestions: {
      en: "HAVE QUESTIONS?",
      ar: "لديك أسئلة؟"
    },
    faqTitle: {
      en: "Frequently Asked Questions",
      ar: "الأسئلة الشائعة"
    },
    faqSubtitle: {
      en: "Find answers to common questions...",
      ar: "ابحث عن إجابات للأسئلة الشائعة..."
    },
    howToApply: {
      en: "How To Apply?",
      ar: "كيفية التقديم؟"
    },
    howToApplyAnswer: {
      en: "You can apply by filling out our online application form with your academic details. Our team will guide you through the university and program selection process. Click Apply Now to get started and begin your academic journey.",
      ar: "يمكنك التقديم عن طريق ملء نموذج الطلب عبر الإنترنت ببياناتك الأكاديمية. سيرشدك فريقنا خلال عملية اختيار الجامعة والبرنامج. انقر فوق تقديم الآن للبدء وبدء رحلتك الأكاديمية."
    },
    freeConsultation: {
      en: "What is a Free Consultation?",
      ar: "ما هي الاستشارة المجانية؟"
    },
    freeConsultationAnswer: {
      en: "A free consultation is a one-on-one session with our education advisors. We assess your academic background and help you choose the right university and course. This service is offered at no cost and is designed to simplify your study abroad process.",
      ar: "الاستشارة المجانية هي جلسة فردية مع مستشارينا التعليميين. نقيم خلفيتك الأكاديمية ونساعدك في اختيار الجامعة والدورة المناسبة. هذه الخدمة مقدمة بدون تكلفة ومصممة لتبسيط عملية الدراسة في الخارج."
    },
    admissionTime: {
      en: "How many days does it take to get admission?",
      ar: "كم يوم يستغرق الحصول على القبول؟"
    },
    admissionTimeAnswer: {
      en: "Admission timelines vary by university, but most applications are processed within 2–5 days. We help ensure your documents are complete and submitted correctly to avoid delays. Fast-track options may also be available for select universities and programs.",
      ar: "تختلف أوقات القبول حسب الجامعة، ولكن يتم معالجة معظم الطلبات في غضون 2-5 أيام. نساعد في التأكد من اكتمال مستنداتك وتقديمها بشكل صحيح لتجنب التأخير. قد تكون هناك أيضًا خيارات سريعة متاحة لبعض الجامعات والبرامج المحددة."
    },
    servicesFree: {
      en: "Are your Services Free?",
      ar: "هل خدماتكم مجانية؟"
    },
    servicesFreeAnswer: {
      en: "Yes, all our student counseling and application support services are 100% free. We are funded by partner universities, so you never pay for our expert guidance. From choosing a course to securing admission, there are no hidden fees involved.",
      ar: "نعم، جميع خدمات الإرشاد الطلابي ودعم التقديم لدينا مجانية بنسبة 100٪. نحن ممولون من قبل الجامعات الشريكة، لذلك لا تدفع أبدًا مقابل إرشاداتنا الخبيرة. من اختيار الدورة إلى الحصول على القبول، لا توجد رسوم خفية."
    },
    stillQuestions: {
      en: "Still have questions?",
      ar: "لا تزال لديك أسئلة؟"
    },
    hereToHelp: {
      en: "We're here to help",
      ar: "نحن هنا لمساعدتك"
    },
    contactSupport: {
      en: "CONTACT SUPPORT",
      ar: "اتصل بالدعم"
    }
  };

  // Data arrays with translations
  const stats = [
    {
      icon: <FaUserGraduate className="text-4xl text-[#F5891B] mx-auto mb-4" />,
      value: "500+",
      label: translations.studentsPlaced[language],
    },
    {
      icon: <FaUniversity className="text-4xl text-[#F5891B] mx-auto mb-4" />,
      value: "10+",
      label: translations.partnerUniversities[language],
    },
    {
      icon: <FaHandshake className="text-4xl text-[#F5891B] mx-auto mb-4" />,
      value: "100%",
      label: translations.freeServices[language],
    },
  ];

  const reasons = [
    {
      icon: <FaUniversity className="text-white text-2xl" />,
      title: translations.reliableAgency[language],
      desc: translations.agencyDesc[language],
    },
    {
      icon: <FaCheckCircle className="text-white text-2xl" />,
      title: translations.freeServicesTitle[language],
      desc: translations.freeServicesDesc[language],
    },
    {
      icon: <FaGift className="text-white text-2xl" />,
      title: translations.scholarshipsTitle[language],
      desc: translations.scholarshipsDesc[language],
    },
  ];

  const faqs = [
    {
      question: translations.howToApply[language],
      answer: translations.howToApplyAnswer[language],
    },
    {
      question: translations.freeConsultation[language],
      answer: translations.freeConsultationAnswer[language],
    },
    {
      question: translations.admissionTime[language],
      answer: translations.admissionTimeAnswer[language],
    },
    {
      question: translations.servicesFree[language],
      answer: translations.servicesFreeAnswer[language],
    },
  ];

  return (
    <div className={`text-gray-800 ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section with enhanced animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,8,81,0.7), rgba(10,8,81,0.7)), url('./about.jpg')",
        }}
      >
        <div className="text-center px-4 z-10">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
              },
            }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {translations.heroTitle[language]}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              },
            }}
            className="text-xl text-white opacity-90 max-w-2xl mx-auto"
          >
            {translations.heroSubtitle[language]}
          </motion.p>
        </div>
      </motion.div>

      {/* Company Info with enhanced animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          },
        }}
        className="py-10 px-6 md:px-12 lg:px-24 bg-white"
      >
        <div className="max-w-6xl sm:py-10 mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: language === 'ar' ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            <span className="text-sm text-[#F5891B] font-semibold tracking-wider mb-2 inline-block">
              {translations.aboutCompany[language]}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0851] mb-6 leading-tight">
              {translations.trustedAgency[language]}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {translations.welcomeText[language]}
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#F5891B",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-[#0A0851] text-white font-medium py-3 px-8 rounded-md shadow-md"
            >
              {translations.contactUs[language]}
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ x: language === 'ar' ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="bg-gradient-to-br from-[#0A0851] to-[#F5891B] p-1 rounded-xl shadow-xl"
          >
            <div className="bg-white p-8 rounded-lg h-full">
              <h3 className="text-xl font-bold text-[#0A0851] mb-4">
                {translations.ourCommitment[language]}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {translations.commitmentText[language]}
              </p>
              <div className="space-y-4">
                {[
                  translations.exclusiveAgents[language],
                  translations.privilegedAccess[language],
                  translations.comprehensiveSupport[language],
                ].map((text, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaCheckCircle className="text-[#F5891B] mt-1" style={language === 'ar' ? { marginLeft: '0.75rem' } : { marginRight: '0.75rem' }} />
                    </motion.div>
                    <p className="text-gray-600">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section with enhanced animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          },
        }}
        className="py-10 bg-gradient-to-r from-[#0A0851] to-[#1a1685] text-white"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 text-center">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-3xl font-bold mb-2">{item.value}</h3>
              <p className="text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Reasons Section with enhanced animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          },
        }}
        className="py-10 px-6 md:px-12 lg:px-24 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-sm text-[#F5891B] font-semibold tracking-wider">
            {translations.whyChooseUs[language]}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0851] mt-2 mb-4">
            {translations.reasonsTitle[language]}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {translations.reasonsSubtitle[language]}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className="bg-[#0A0851] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-bold text-xl text-[#0A0851] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ + Contact with enhanced animations */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          },
        }}
        className="py-10 px-6 md:px-12 lg:px-24 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-[#F5891B] font-semibold tracking-wider">
              {translations.haveQuestions[language]}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0851] mt-2 mb-4">
              {translations.faqTitle[language]}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {translations.faqSubtitle[language]}
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Support Banner with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0,
              type: "spring",
              stiffness: 100,
            }}
            className="mt-12 bg-[#F5891B] bg-opacity-10 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between"
          >
            <motion.div
              className="flex items-center mb-4 md:mb-0"
              whileHover={{ x: 5 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <FaHeadset className="text-3xl text-[#F5891B]" style={language === 'ar' ? { marginLeft: '1rem' } : { marginRight: '1rem' }} />
              </motion.div>
              <div>
                <h4 className="font-bold text-[#0A0851] text-2xl">
                  {translations.stillQuestions[language]}
                </h4>
                <p className="text-gray-600 text-xl">{translations.hereToHelp[language]}</p>
              </div>
            </motion.div>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#F5891B",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0A0851] border-1 border-[#0A0851] text-white text-sx font-medium py-2 px-4 sm:px-6 transition hover:scale-105 shadow-md"
            >
              {translations.contactSupport[language]}
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;