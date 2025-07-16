import React from 'react';
import { FaWifi, FaTv, FaUtensils, FaBed, FaChair, FaBook, FaPhone } from 'react-icons/fa';
import { GiHomeGarage, GiKitchenScale } from 'react-icons/gi';
import { useAuth } from '../../../contextApi/contextApi';

const EastAccomodation = () => {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const t = {
    headerTitle: isArabic ? 'السكن داخل الحرم الجامعي' : 'On-Campus Living',
    headerDesc: isArabic ? 'سكن مريح مصمم لنجاح الطلاب' : 'Comfortable housing designed for student success',
    overviewTitle: isArabic ? '١٧ مبنى سكني حديث' : '17 Modern Dormitory Buildings',
    overviewDesc: isArabic
      ? 'توفر مهاجعنا المصممة خصيصًا بيئة هادئة ومريحة تحتوي على جميع وسائل الراحة التي تحتاجها للتركيز في دراستك.'
      : 'Our specially designed dormitories provide a quiet, comfortable environment with all the amenities you need to focus on your studies.',
    roomTitle: isArabic ? 'تشمل جميع الغرف:' : 'All Rooms Include:',
    amenities: {
      wifi: isArabic ? 'واي فاي مجاني' : 'Free WiFi',
      tv: isArabic ? 'تلفزيون LCD' : 'LCD TV',
      desk: isArabic ? 'مكتب دراسة' : 'Study Desk',
      bed: isArabic ? 'سرير مريح' : 'Comfortable Bed',
      fridge: isArabic ? 'ثلاجة صغيرة' : 'Mini-Fridge',
      phone: isArabic ? 'اتصال هاتفي' : 'Phone Connection',
    },
    dormStudio: isArabic ? 'المهاجع الاستوديو' : 'Studio Dormitories',
    studioDesc: isArabic
      ? 'اختر من بين وحدات بغرفة واحدة أو غرفتين أو أربع غرف نوم بتصميم عصري. يتميز مهجع Soli بهندسة معمارية حديثة للغاية.'
      : 'Choose from single, double, or 4-bedroom units with modern design. The Soli dormitory features ultra-modern architecture.',
    studioNote: isArabic
      ? 'الباقات تشمل السكن وعضوية الكافيتيريا لمدة سنة واحدة'
      : 'Packages include accommodation + 1-year cafeteria membership',
    dormApartment: isArabic ? 'المهاجع الشقق' : 'Apartment Dormitories',
    apartmentDesc: isArabic
      ? 'شقق مكونة من 2-3 غرف نوم مع غرفة معيشة مشتركة ومطبخ مجهز بالكامل - مثالية للطلاب الذين يرغبون في الطهي.'
      : '2-3 bedroom apartments with shared living room and fully equipped kitchen - perfect for students who want to cook.',
    loyaltyTitle: isArabic ? 'برنامج خصم الولاء' : 'Loyalty Discount Program',
    loyaltyDesc: isArabic ? 'وفر أكثر كلما طالت مدة إقامتك معنا:' : 'Save more the longer you stay with us:',
    years: {
      y2: isArabic ? 'السنة الثانية:' : '2nd Year:',
      y3: isArabic ? 'السنة الثالثة:' : '3rd Year:',
      y4: isArabic ? 'السنة الرابعة:' : '4th Year:',
      y5: isArabic ? 'السنة الخامسة:' : '5th Year:',
    },
    discount: isArabic ? 'خصم' : 'discount',
  };

  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 ${isArabic ? 'rtl text-right' : 'text-left'}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#0A0851] mb-2">{t.headerTitle}</h1>
        <p className="text-lg text-gray-600">{t.headerDesc}</p>
      </div>

      {/* Overview */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-[#0A0851] mb-3">{t.overviewTitle}</h2>
        <p className="text-gray-700">{t.overviewDesc}</p>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#0A0851] mb-4">{t.roomTitle}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="flex items-center">
            <FaWifi className="text-blue-500 mr-2" />
            <span>{t.amenities.wifi}</span>
          </div>
          <div className="flex items-center">
            <FaTv className="text-blue-500 mr-2" />
            <span>{t.amenities.tv}</span>
          </div>
          <div className="flex items-center">
            <FaChair className="text-blue-500 mr-2" />
            <span>{t.amenities.desk}</span>
          </div>
          <div className="flex items-center">
            <FaBed className="text-blue-500 mr-2" />
            <span>{t.amenities.bed}</span>
          </div>
          <div className="flex items-center">
            <GiHomeGarage className="text-blue-500 mr-2" />
            <span>{t.amenities.fridge}</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-blue-500 mr-2" />
            <span>{t.amenities.phone}</span>
          </div>
        </div>
      </div>

      {/* Dorm Types */}
      <div className="space-y-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-[#0A0851] mb-2 flex items-center">
            <GiHomeGarage className="text-blue-500 mr-2" />
            {t.dormStudio}
          </h3>
          <p className="text-gray-700 mb-2">{t.studioDesc}</p>
          <p className="text-sm text-blue-600">{t.studioNote}</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-[#0A0851] mb-2 flex items-center">
            <GiKitchenScale className="text-blue-500 mr-2" />
            {t.dormApartment}
          </h3>
          <p className="text-gray-700">{t.apartmentDesc}</p>
        </div>
      </div>

      {/* Loyalty Program */}
      <div className="bg-[#0A0851] text-white p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-3">{t.loyaltyTitle}</h2>
        <p className="mb-4">{t.loyaltyDesc}</p>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>{t.years.y2}</span>
            <span className="font-bold">15% {t.discount}</span>
          </div>
          <div className="flex justify-between">
            <span>{t.years.y3}</span>
            <span className="font-bold">20% {t.discount}</span>
          </div>
          <div className="flex justify-between">
            <span>{t.years.y4}</span>
            <span className="font-bold">25% {t.discount}</span>
          </div>
          <div className="flex justify-between">
            <span>{t.years.y5}</span>
            <span className="font-bold">30% {t.discount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EastAccomodation;
