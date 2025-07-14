import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../contextApi/contextApi";


export default function Footer() {
  const {language}=useAuth()
  const isArabic = language === "ar";

  const usefulLinks = [
    { name: isArabic ? "الصفحة الرئيسية" : "Home", to: "/" },
    { name: isArabic ? "الجامعات" : "Universities", to: "/universities" },
    { name: isArabic ? "عن شمال قبرص" : "About North Cyprus", to: "/about" },
    { name: isArabic ? "المعرض" : "Gallery", to: "/gallery" },
    { name: isArabic ? "الأسئلة الشائعة" : "FAQ", to: "/faq" },
  ];

  const otherLinks = [
    { name: isArabic ? "عملية القبول" : "Admission Process", to: "/admission" },
    { name: isArabic ? "وكيل فرعي إلكتروني" : "E-Subagent", to: "/subagent" },
    { name: isArabic ? "تواصل معنا" : "Contact", to: "/contact" },
  ];

  const contactInfo = [
    { icon: <FaPhone className="text-lg" />, text: "+90 533 889 9948" },
    { icon: <MdEmail className="text-lg" />, text: "info@studygists.com" },
  ];

  const socialLinks = [
    { icon: <FaSquareFacebook />, to: "/facebook" },
    { icon: <FaTwitterSquare />, to: "/twitter" },
    { icon: <FaSquareInstagram />, to: "/instagram" },
  ];

  return (
    <div className="bg-color1 text-white pt-10">
      <div className={`w-[90vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 p-5 ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
        {/* Logo & Description */}
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold mb-4 text-white">
              {isArabic ? "وكالة التعليم" : "AgencyEducation"}
            </h1>
          </Link>
          <p className="mb-4 text-md">
            {isArabic
              ? "منصة رائعة لتعلم التعليم والمهارات التقنية."
              : "A Wonderful Education and Tech Skills Learning Platform."}
          </p>
          <Link to="/applynow">
            <button className="px-4 py-2 bg-[#F5891B] hover:bg-[#db8d3e] text-sm text-color1 rounded cursor-pointer font-medium transition">
              {isArabic ? "قدّم الآن" : "Apply Now"}
            </button>
          </Link>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">
            {isArabic ? "روابط مفيدة" : "EducationUnlimited"}
          </h2>
          <ul className="space-y-2 text-md">
            {usefulLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.to} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">
            {isArabic ? "روابط أخرى" : "Other Links"}
          </h2>
          <ul className="space-y-2 text-md">
            {otherLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.to} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">
            {isArabic ? "اتصل بنا" : "Contact Us"}
          </h2>
          <ul className="space-y-2 text-md">
            {contactInfo.map((info, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-2 ${isArabic ? "justify-end flex-row-reverse" : ""}`}
              >
                {info.icon}
                {info.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-700 mt-8" />
      <div
        className={`flex flex-col sm:flex-row justify-between items-center w-[80vw] mx-auto py-5 gap-4 text-sm ${
          isArabic ? "rtl text-right" : "ltr text-left"
        }`}
      >
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          {isArabic
            ? "وكالة التعليم. جميع الحقوق محفوظة."
            : "AgencyEducation Limited. All rights reserved."}
        </p>
        <div className={`flex gap-5 text-2xl ${isArabic ? "justify-end" : ""}`}>
          {socialLinks.map((social, idx) => (
            <Link
              key={idx}
              to={social.to}
              className="hover:text-[#F5891B] transform transition-transform duration-300 hover:scale-110"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
