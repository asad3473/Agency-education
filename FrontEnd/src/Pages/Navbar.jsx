import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contextApi/contextApi";
import axios from "axios";
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineMenuBook, MdOutlineCancel } from "react-icons/md";

// translations object
const translations = {
  en: {
    home: "Home",
    about: "About",
    universities: "Universities",
    contact: "Contact",
    apply: "Apply",
    login: "Login",
    logout: "Logout",
    selectLanguage: "Select Language",
    menu: "Menu",
  },
  ar: {
    home: "الصفحة الرئيسية",
    about: "حول",
    universities: "الجامعات",
    contact: "اتصل",
    apply: "قدم الآن",
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",
    selectLanguage: "اختر اللغة",
    menu: "القائمة",
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleLang = () => setIsLangOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();
  const { user, setUser, language, toggleLanguage } = useAuth();

  const t = translations[language];

  const logoutHandler = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/users/logout", {}, { withCredentials: true });
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#0A0851] text-white" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="px-10 mx-auto">
        <div className="flex justify-between items-center py-4 relative z-30">
          <Link to="/">
            <div className="w-10 h-10 mr-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=500&auto=format&fit=crop&q=60"
                alt="Logo"
                className="w-full h-full object-cover rounded-xl cursor-pointer"
              />
            </div>
          </Link>

          <div className="hidden lg:flex justify-center w-full">
            <ul className="flex text-sm xl:text-lg font-semibold gap-8">
              <Link to="/"><li className="cursor-pointer hover:text-[#F5891B]">{t.home}</li></Link>
              <Link to="/about"><li className="cursor-pointer hover:text-[#F5891B]">{t.about}</li></Link>
              <Link to="/universities"><li className="cursor-pointer hover:text-[#F5891B]">{t.universities}</li></Link>
              <Link to="/contact"><li className="cursor-pointer hover:text-[#F5891B]">{t.contact}</li></Link>
              <Link to="/applynow"><li className="cursor-pointer hover:text-[#F5891B]">{t.apply}</li></Link>
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-3 ml-6 font-semibold text-sm">
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer border border-gray-500 rounded-4xl px-3 py-2"
                onClick={toggleLang}
              >
                <span className="text-nowrap">{t.selectLanguage}</span>
                <FaChevronDown className={`transition-transform duration-300 ${isLangOpen ? "rotate-180" : "rotate-0"}`} />
              </div>
              {isLangOpen && (
                <ul className="absolute bg-[#0A0851] mt-2 w-full rounded shadow-lg border border-gray-600 z-50">
                  <li onClick={() => { toggleLanguage("en"); setIsLangOpen(false); }} className="px-4 py-2 hover:text-[#F5891B] cursor-pointer">English</li>
                  <li onClick={() => { toggleLanguage("ar"); setIsLangOpen(false); }} className="px-4 py-2 hover:text-[#F5891B] cursor-pointer">Arabic</li>
                </ul>
              )}
            </div>
            {user ? (
              <button onClick={logoutHandler}>
                <li className="list-none px-4 py-2 rounded-md bg-[#F5891B] text-white hover:bg-orange-600 transition">{t.logout}</li>
              </button>
            ) : (
              <Link to="/login">
                <li className="list-none px-4 py-2 rounded-md bg-[#F5891B] text-white hover:bg-orange-600 transition">{t.login}</li>
              </Link>
            )}
          </div>

          <div className="text-3xl lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)}>
            <MdOutlineMenuBook />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 right-0 w-4/5 max-w-[300px] h-full bg-[#0A0851] text-white transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50 shadow-lg`}>
          <div className="flex justify-between items-center px-4 py-4">
            <h2 className="text-lg font-semibold">{t.menu}</h2>
            <MdOutlineCancel className="text-3xl cursor-pointer" onClick={closeMenu} />
          </div>

          <ul className="flex flex-col items-start px-6 text-lg text-center font-medium space-y-4 mt-6">
            <Link to="/" onClick={closeMenu}><li>{t.home}</li></Link>
            <Link to="/about" onClick={closeMenu}><li>{t.about}</li></Link>
            <Link to="/universities" onClick={closeMenu}><li>{t.universities}</li></Link>
            <Link to="/contact" onClick={closeMenu}><li>{t.contact}</li></Link>
            <Link to="/applynow" onClick={closeMenu}><li>{t.apply}</li></Link>

            <div className="relative w-full">
              <div
                className="flex items-center gap-2 cursor-pointer border border-gray-500 rounded-2xl px-3 py-2 w-full"
                onClick={toggleLang}
              >
                <span className="text-nowrap">{t.selectLanguage}</span>
                <FaChevronDown className={`ml-auto transition-transform duration-300 ${isLangOpen ? "rotate-180" : "rotate-0"}`} />
              </div>
              {isLangOpen && (
                <ul className="mt-2 w-full rounded bg-[#0A0851] shadow-md border border-gray-600">
                  <li onClick={() => { toggleLanguage("en"); setIsLangOpen(false); }} className="px-4 py-2 hover:text-[#F5891B] cursor-pointer">English</li>
                  <li onClick={() => { toggleLanguage("ar"); setIsLangOpen(false); }} className="px-4 py-2 hover:text-[#F5891B] cursor-pointer">Arabic</li>
                </ul>
              )}
            </div>

            {user ? (
              <button onClick={logoutHandler}>
                <li className="list-none px-4 py-2 rounded-md bg-[#F5891B] text-white hover:bg-orange-600 transition">{t.logout}</li>
              </button>
            ) : (
              <Link to="/login" onClick={closeMenu}>
                <button className="mt-4 px-4 py-2 w-full text-left bg-[#F5891B] rounded-sm">{t.login}</button>
              </Link>
            )}
          </ul>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu} />
        )}
      </div>
    </div>
  );
}
