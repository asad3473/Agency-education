
import { FaWifi, FaTv, FaUtensils, FaBed, FaChair, FaPhone, FaStar, FaShieldAlt } from 'react-icons/fa';
import { GiHomeGarage, GiKitchenScale, GiBookshelf, GiLaurelsTrophy } from 'react-icons/gi';
import { IoIosPeople, IoMdFitness } from 'react-icons/io';
import { MdCleaningServices, MdSecurity } from 'react-icons/md';
import { useAuth } from '../../../contextApi/contextApi';

const CyprusAccommodation = () => {
  const { language } = useAuth();

  // Translations
  const translations = {
    heroTitle: {
      en: "Campus Living",
      ar: "السكن الجامعي"
    },
    heroSubtitle: {
      en: "Premium student accommodation designed for comfort, community, and academic success",
      ar: "سكن طلابي فاخر مصمم للراحة والمجتمع والنجاح الأكاديمي"
    },
    featureTitle: {
      en: "17 Modern Dormitory Buildings",
      ar: "17 مبنى سكني حديث"
    },
    featureDescription: {
      en: "Experience university life in our award-winning residences featuring cutting-edge design, premium amenities, and vibrant student communities. Each building offers study lounges, recreational spaces, and 24/7 support services.",
      ar: "جرب الحياة الجامعية في مساكننا الحاصلة على جوائز والتي تتميز بتصميم حديث ومرافق فاخرة ومجتمعات طلابية نابضة بالحياة. كل مبنى يوفر صالات دراسة ومساحات ترفيهية وخدمات دعم على مدار الساعة."
    },
    security: {
      en: "24/7 Security",
      ar: "أمن على مدار الساعة"
    },
    cleaning: {
      en: "Weekly Cleaning",
      ar: "تنظيف أسبوعي"
    },
    fitness: {
      en: "Fitness Access",
      ar: "وصول لمرافق اللياقة"
    },
    amenitiesTitle: {
      en: "Premium Amenities",
      ar: "مرافق فاخرة"
    },
    amenitiesSubtitle: {
      en: "Everything you need for comfortable living and academic success",
      ar: "كل ما تحتاجه للعيش المريح والنجاح الأكاديمي"
    },
    highSpeedWifi: {
      en: "High-Speed WiFi",
      ar: "واي فاي عالي السرعة"
    },
    smartTV: {
      en: "Smart TV",
      ar: "تلفزيون ذكي"
    },
    ergonomicFurniture: {
      en: "Ergonomic Furniture",
      ar: "أثاث مريح"
    },
    premiumBedding: {
      en: "Premium Bedding",
      ar: "فراش فاخر"
    },
    miniFridge: {
      en: "Mini-Fridge",
      ar: "ثلاجة صغيرة"
    },
    directPhoneLine: {
      en: "Direct Phone Line",
      ar: "خط هاتف مباشر"
    },
    mealPlans: {
      en: "Meal Plans",
      ar: "خطط وجبات"
    },
    socialEvents: {
      en: "Social Events",
      ar: "فعاليات اجتماعية"
    },
    optionsTitle: {
      en: "Living Options",
      ar: "خيارات السكن"
    },
    optionsSubtitle: {
      en: "Choose the perfect space for your university journey",
      ar: "اختر المساحة المثالية لرحلتك الجامعية"
    },
    studioTitle: {
      en: "Studio Dormitories",
      ar: "غرف الاستوديو"
    },
    studioDescription: {
      en: "Modern single, double, or 4-bedroom units with private bathrooms and premium furnishings. The Soli dormitory features soundproof walls and designer interiors.",
      ar: "وحدات حديثة فردية أو مزدوجة أو بغرف نوم 4 مع حمامات خاصة وأثاث فاخر. يتميز سكن سولي بجدران عازلة للصوت وديكورات مصممة."
    },
    studioFeature1: {
      en: "Private bathroom in each unit",
      ar: "حمام خاص في كل وحدة"
    },
    studioFeature2: {
      en: "Weekly professional cleaning",
      ar: "تنظيف أسبوعي محترف"
    },
    studioFeature3: {
      en: "24/7 academic support",
      ar: "دعم أكاديمي على مدار الساعة"
    },
    studioIncludes: {
      en: "Includes accommodation + 1-year cafeteria membership",
      ar: "يشمل السكن + عضوية الكافتيريا لمدة عام"
    },
    apartmentTitle: {
      en: "Apartment Dormitories",
      ar: "شقق سكنية"
    },
    apartmentDescription: {
      en: "2-3 bedroom apartments with shared living room, balcony, and fully equipped kitchen - perfect for students who value independence and community living.",
      ar: "شقق بغرفتي أو 3 غرف نوم مع صالة معيشة مشتركة وشرفة ومطبخ مجهز بالكامل - مثالية للطلاب الذين يقدرون الاستقلالية والعيش المجتمعي."
    },
    apartmentFeature1: {
      en: "Full kitchen with appliances",
      ar: "مطبخ كامل مع أجهزة"
    },
    apartmentFeature2: {
      en: "Spacious common areas",
      ar: "مناطق مشتركة واسعة"
    },
    apartmentFeature3: {
      en: "Private balcony/terrace",
      ar: "شرفة/تراس خاص"
    },
    apartmentIncludes: {
      en: "Optional meal plans available",
      ar: "خطط وجبات اختيارية متاحة"
    },
    loyaltyTitle: {
      en: "Loyalty Rewards Program",
      ar: "برنامج مكافآت الولاء"
    },
    loyaltyDescription: {
      en: "We value your continued stay with us. Enjoy increasing benefits the longer you're part of our campus community.",
      ar: "نقدر بقاءك المستمر معنا. استمتع بفوائد متزايدة كلما طالت مدة انضمامك إلى مجتمع الحرم الجامعي لدينا."
    },
    loyaltyNote: {
      en: "* Discounts apply to consecutive years of residence. All benefits are cumulative.",
      ar: "* تنطبق الخصومات على سنوات الإقامة المتتالية. جميع الفوائد تراكمية."
    },
    secondYear: {
      en: "2nd Year",
      ar: "السنة الثانية"
    },
    thirdYear: {
      en: "3rd Year",
      ar: "السنة الثالثة"
    },
    fourthYear: {
      en: "4th Year",
      ar: "السنة الرابعة"
    },
    fifthYear: {
      en: "5th Year+",
      ar: "السنة الخامسة+"
    },
    prioritySelection: {
      en: "Priority room selection",
      ar: "أولوية اختيار الغرفة"
    },
    freeLaundry: {
      en: "Free laundry package",
      ar: "حزمة غسيل مجانية"
    },
    personalStorage: {
      en: "Personal storage unit",
      ar: "وحدة تخزين شخصية"
    },
    wifiUpgrade: {
      en: "Premium WiFi upgrade",
      ar: "ترقية وايفاي متميزة"
    },
    monthlyCleaning: {
      en: "Monthly cleaning service",
      ar: "خدمة تنظيف شهرية"
    },
    guestPasses: {
      en: "Guest passes",
      ar: "تصاريح ضيوف"
    },
    vipGraduation: {
      en: "VIP graduation package",
      ar: "حزمة تخرج VIP"
    },
    alumniBenefits: {
      en: "Alumni benefits",
      ar: "مزايا الخريجين"
    }
  };

  const amenities = [
    { icon: <FaWifi className="text-3xl" />, text: translations.highSpeedWifi[language], bg: "from-blue-100 to-blue-50" },
    { icon: <FaTv className="text-3xl" />, text: translations.smartTV[language], bg: "from-purple-100 to-purple-50" },
    { icon: <FaChair className="text-3xl" />, text: translations.ergonomicFurniture[language], bg: "from-green-100 to-green-50" },
    { icon: <FaBed className="text-3xl" />, text: translations.premiumBedding[language], bg: "from-amber-100 to-amber-50" },
    { icon: <GiHomeGarage className="text-3xl" />, text: translations.miniFridge[language], bg: "from-cyan-100 to-cyan-50" },
    { icon: <FaPhone className="text-3xl" />, text: translations.directPhoneLine[language], bg: "from-indigo-100 to-indigo-50" },
    { icon: <FaUtensils className="text-3xl" />, text: translations.mealPlans[language], bg: "from-red-100 to-red-50" },
    { icon: <IoIosPeople className="text-3xl" />, text: translations.socialEvents[language], bg: "from-emerald-100 to-emerald-50" }
  ];

  const loyaltyTiers = [
    { 
      years: translations.secondYear[language], 
      discount: "15% OFF", 
      perks: [translations.prioritySelection[language], translations.freeLaundry[language]] 
    },
    { 
      years: translations.thirdYear[language], 
      discount: "20% OFF", 
      perks: [translations.personalStorage[language], translations.wifiUpgrade[language]] 
    },
    { 
      years: translations.fourthYear[language], 
      discount: "25% OFF", 
      perks: [translations.monthlyCleaning[language], translations.guestPasses[language]] 
    },
    { 
      years: translations.fifthYear[language], 
      discount: "30% OFF", 
      perks: [translations.vipGraduation[language], translations.alumniBenefits[language]] 
    }
  ];

  return (
    <div className={`max-w-6xl mx-auto px-4 py-12 ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Header */}
      <div className="text-center mb-16 relative">
        <h1 className="text-5xl font-extrabold text-[#0A0851] mb-4 relative">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#0A0851] to-blue-500">
            {translations.heroTitle[language]}
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          {translations.heroSubtitle[language].split('comfort')[0]}
          <span className="font-semibold text-[#0A0851]">
            {language === 'en' ? 'comfort' : 'راحة'}
          </span>
          {language === 'en' ? ', ' : '، '}
          <span className="font-semibold text-[#0A0851]">
            {language === 'en' ? 'community' : 'مجتمع'}
          </span>
          {language === 'en' ? ', and ' : '، و '}
          <span className="font-semibold text-[#0A0851]">
            {language === 'en' ? 'academic success' : 'نجاح أكاديمي'}
          </span>
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-[#0A0851] mx-auto rounded-full mb-8"></div>
      </div>

      {/* Feature Highlight */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-16 relative overflow-hidden border border-blue-200 shadow-sm">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="bg-[#0A0851] p-2 rounded-lg" style={language === 'ar' ? { marginLeft: '1rem' } : { marginRight: '1rem' }}>
              <GiLaurelsTrophy className="text-white text-2xl" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0851]">
              {translations.featureTitle[language]}
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl">
            {translations.featureDescription[language]}
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-xs" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <MdSecurity className="text-blue-500" style={language === 'ar' ? { marginLeft: '0.5rem' } : { marginRight: '0.5rem' }} />
              <span className="text-sm font-medium">{translations.security[language]}</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-xs" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <MdCleaningServices className="text-blue-500" style={language === 'ar' ? { marginLeft: '0.5rem' } : { marginRight: '0.5rem' }} />
              <span className="text-sm font-medium">{translations.cleaning[language]}</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-xs" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <IoMdFitness className="text-blue-500" style={language === 'ar' ? { marginLeft: '0.5rem' } : { marginRight: '0.5rem' }} />
              <span className="text-sm font-medium">{translations.fitness[language]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A0851] mb-3">{translations.amenitiesTitle[language]}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{translations.amenitiesSubtitle[language]}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((item, index) => (
            <div key={index} className={`bg-gradient-to-br ${item.bg} p-6 rounded-2xl shadow-xs text-center transition-all hover:shadow-md hover:-translate-y-1`}>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-white shadow-sm`}>
                <div className="text-blue-500">{item.icon}</div>
              </div>
              <h3 className="font-semibold text-[#0A0851]">{item.text}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Accommodation Options */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A0851] mb-3">{translations.optionsTitle[language]}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{translations.optionsSubtitle[language]}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Studio Option */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="bg-[#0A0851] p-6 text-white">
              <div className="flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div className="bg-white bg-opacity-20 p-3 rounded-full" style={language === 'ar' ? { marginLeft: '1rem' } : { marginRight: '1rem' }}>
                  <GiHomeGarage className="text-2xl text-yellow-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{translations.studioTitle[language]}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">{translations.studioDescription[language]}</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <FaStar className="text-yellow-400" style={language === 'ar' ? { marginLeft: '0.75rem' } : { marginRight: '0.75rem' }} />
                  <span>{translations.studioFeature1[language]}</span>
                </div>
                <div className="flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <FaStar className="text-yellow-400" style={language === 'ar' ? { marginLeft: '0.75rem' } : { marginRight: '0.75rem' }} />
                  <span>{translations.studioFeature2[language]}</span>
                </div>
                <div className="flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <FaStar className="text-yellow-400" style={language === 'ar' ? { marginLeft: '0.75rem' } : { marginRight: '0.75rem' }} />
                  <span>{translations.studioFeature3[language]}</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-600 font-medium text-center">
                  <GiHomeGarage className="inline" style={language === 'ar' ? { marginLeft: '0.5rem' } : { marginRight: '0.5rem' }} />
                  {translations.studioIncludes[language]}
                </p>
              </div>
            </div>
          </div>
          
          {/* Apartment Option */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
              <div className="flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div className="bg-white bg-opacity-20 p-3 rounded-full" style={language === 'ar' ? { marginLeft: '1rem' } : { marginRight: '1rem' }}>
                  <GiKitchenScale className="text-2xl text-yellow-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{translations.apartmentTitle[language]}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">{translations.apartmentDescription[language]}</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <FaStar className="text-yellow-400" style={language === 'ar' ? { marginLeft: '0.75rem' } : { marginRight: '0.75rem' }} />
                  <span>{translations.apartmentFeature1[language]}</span>
                </div>
                <div className="flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <FaStar className="text-yellow-400" style={language === 'ar' ? { marginLeft: '0.75rem' } : { marginRight: '0.75rem' }} />
                  <span>{translations.apartmentFeature2[language]}</span>
                </div>
                <div className="flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <FaStar className="text-yellow-400" style={language === 'ar' ? { marginLeft: '0.75rem' } : { marginRight: '0.75rem' }} />
                  <span>{translations.apartmentFeature3[language]}</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-600 font-medium text-center">
                  <GiKitchenScale className="inline" style={language === 'ar' ? { marginLeft: '0.5rem' } : { marginRight: '0.5rem' }} />
                  {translations.apartmentIncludes[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loyalty Program */}
      <div className="bg-gradient-to-br from-[#0A0851] to-blue-800 rounded-2xl p-10 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0C44.8 0 0 44.8 0 100C0 155.2 44.8 200 100 200C155.2 200 200 155.2 200 100C200 44.8 155.2 0 100 0ZM100 180C56 180 20 144 20 100C20 56 56 20 100 20C144 20 180 56 180 100C180 144 144 180 100 180Z" fill="white"/>
          </svg>
        </div>
        <div className="relative z-10">
          <div className="flex items-center mb-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="bg-white bg-opacity-20 p-3 rounded-full" style={language === 'ar' ? { marginLeft: '1rem' } : { marginRight: '1rem' }}>
              <GiLaurelsTrophy className="text-2xl text-yellow-300" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">{translations.loyaltyTitle[language]}</h2>
          </div>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl">
            {translations.loyaltyDescription[language]}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loyaltyTiers.map((tier, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex justify-between items-start mb-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <h3 className="text-xl text-blue-900 font-bold">{tier.years}</h3>
                  <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                    {tier.discount}
                  </span>
                </div>
                <ul className="space-y-2">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="flex items-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                      <FaShieldAlt className="text-blue-500 text-sm" style={language === 'ar' ? { marginLeft: '0.75rem' } : { marginRight: '0.75rem' }} />
                      <span className="text-blue-500">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center text-blue-200 text-sm">
            {translations.loyaltyNote[language]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyprusAccommodation;