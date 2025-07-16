import React from 'react';
import { FaWifi, FaTv, FaUtensils, FaBed, FaChair, FaBook, FaPhone } from 'react-icons/fa';
import { GiHomeGarage, GiKitchenScale } from 'react-icons/gi';
import { useAuth } from "../../../contextApi/contextApi";

const MedeterianAccomodation = () => {
  const { language } = useAuth();
  const isArabic = language === "ar";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" dir={isArabic ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#0A0851] mb-2">
          {isArabic ? "السكن داخل الحرم الجامعي" : "On-Campus Living"}
        </h1>
        <p className="text-lg text-gray-600">
          {isArabic ? "سكن مريح مصمم لنجاح الطلاب" : "Comfortable housing designed for student success"}
        </p>
      </div>

      {/* Overview */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-[#0A0851] mb-3">
          {isArabic ? "17 مبنى سكني حديث" : "17 Modern Dormitory Buildings"}
        </h2>
        <p className="text-gray-700">
          {isArabic
            ? "توفر مهاجعنا المصممة خصيصًا بيئة هادئة ومريحة مع جميع وسائل الراحة التي تحتاجها للتركيز على دراستك."
            : "Our specially designed dormitories provide a quiet, comfortable environment with all the amenities you need to focus on your studies."}
        </p>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#0A0851] mb-4">
          {isArabic ? "تشمل جميع الغرف:" : "All Rooms Include:"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="flex items-center">
            <FaWifi className="text-blue-500 mr-2" />
            <span>{isArabic ? "واي فاي مجاني" : "Free WiFi"}</span>
          </div>
          <div className="flex items-center">
            <FaTv className="text-blue-500 mr-2" />
            <span>{isArabic ? "تلفاز LCD" : "LCD TV"}</span>
          </div>
          <div className="flex items-center">
            <FaChair className="text-blue-500 mr-2" />
            <span>{isArabic ? "مكتب دراسة" : "Study Desk"}</span>
          </div>
          <div className="flex items-center">
            <FaBed className="text-blue-500 mr-2" />
            <span>{isArabic ? "سرير مريح" : "Comfortable Bed"}</span>
          </div>
          <div className="flex items-center">
            <GiHomeGarage className="text-blue-500 mr-2" />
            <span>{isArabic ? "ثلاجة صغيرة" : "Mini-Fridge"}</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-blue-500 mr-2" />
            <span>{isArabic ? "اتصال هاتفي" : "Phone Connection"}</span>
          </div>
        </div>
      </div>

      {/* Dorm Types */}
      <div className="space-y-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-[#0A0851] mb-2 flex items-center">
            <GiHomeGarage className="text-blue-500 mr-2" />
            {isArabic ? "سكن استوديو" : "Studio Dormitories"}
          </h3>
          <p className="text-gray-700 mb-2">
            {isArabic
              ? "اختر من بين وحدات فردية أو مزدوجة أو 4 غرف نوم بتصميم عصري. يتميز سكن Soli بهندسة معمارية فائقة الحداثة."
              : "Choose from single, double, or 4-bedroom units with modern design. The Soli dormitory features ultra-modern architecture."}
          </p>
          <p className="text-sm text-blue-600">
            {isArabic
              ? "تشمل الباقات: السكن + عضوية كافيتريا لمدة عام"
              : "Packages include accommodation + 1-year cafeteria membership"}
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-[#0A0851] mb-2 flex items-center">
            <GiKitchenScale className="text-blue-500 mr-2" />
            {isArabic ? "سكن شقق" : "Apartment Dormitories"}
          </h3>
          <p className="text-gray-700">
            {isArabic
              ? "شقق مكونة من 2-3 غرف نوم مع غرفة معيشة مشتركة ومطبخ مجهز بالكامل - مثالية للطلاب الذين يرغبون في الطهي."
              : "2-3 bedroom apartments with shared living room and fully equipped kitchen - perfect for students who want to cook."}
          </p>
        </div>
      </div>

      {/* Loyalty Program */}
      <div className="bg-[#0A0851] text-white p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-3">
          {isArabic ? "برنامج خصم الولاء" : "Loyalty Discount Program"}
        </h2>
        <p className="mb-4">
          {isArabic ? "وفر أكثر كلما بقيت لفترة أطول معنا:" : "Save more the longer you stay with us:"}
        </p>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>{isArabic ? "السنة الثانية:" : "2nd Year:"}</span>
            <span className="font-bold">{isArabic ? "خصم 15٪" : "15% discount"}</span>
          </div>
          <div className="flex justify-between">
            <span>{isArabic ? "السنة الثالثة:" : "3rd Year:"}</span>
            <span className="font-bold">{isArabic ? "خصم 20٪" : "20% discount"}</span>
          </div>
          <div className="flex justify-between">
            <span>{isArabic ? "السنة الرابعة:" : "4th Year:"}</span>
            <span className="font-bold">{isArabic ? "خصم 25٪" : "25% discount"}</span>
          </div>
          <div className="flex justify-between">
            <span>{isArabic ? "السنة الخامسة:" : "5th Year:"}</span>
            <span className="font-bold">{isArabic ? "خصم 30٪" : "30% discount"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedeterianAccomodation;
