import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaSquareFacebook,
  FaSquareInstagram,
  FaChevronDown,
} from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { MdOutlineMenuBook, MdOutlineCancel } from "react-icons/md";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleLang = () => setIsLangOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-[#0A0851] text-white">
      <div className="w-[90vw] mx-auto">
        <div className="flex justify-between items-center py-4 relative z-30">
          {/* Logo */}
          <Link to="/">
            <div className="w-10 h-10 mr-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=500&auto=format&fit=crop&q=60"
                alt="Logo"
                className="w-full h-full object-cover rounded-xl cursor-pointer"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center w-full">
            <ul className="flex text-sm xl:text-lg font-semibold gap-8">
              <Link to="/"><li className="cursor-pointer hover:text-[#F5891B]">Home</li></Link>
              <Link to="/about"><li className="cursor-pointer hover:text-[#F5891B]">About</li></Link>
              <Link to="/cypruspage"><li className="cursor-pointer hover:text-[#F5891B]">Universities</li></Link>
              <Link to="/apply"><li className="cursor-pointer hover:text-[#F5891B]">Apply</li></Link>
              <Link to="/contact"><li className="cursor-pointer hover:text-[#F5891B]">Contact</li></Link>
            </ul>
          </div>

          {/* Language & Login (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-3 ml-6 font-semibold text-sm">
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer border border-gray-500 rounded-4xl px-3 py-2"
                onClick={toggleLang}
              >
                <span className="text-nowrap">Select Language</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    isLangOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {isLangOpen && (
                <ul className="absolute bg-[#0A0851] mt-2 w-full rounded shadow-lg border border-gray-600">
                  <li className="px-4 py-2 hover:text-[#F5891B] cursor-pointer">English</li>
                  <li className="px-4 py-2 hover:text-[#F5891B] cursor-pointer">Arabic</li>
                </ul>
              )}
            </div>

            <Link to="/login">
              <li className="list-none px-4 py-2 rounded-md bg-[#F5891B] text-white hover:bg-orange-600 transition">
                Login
              </li>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="text-3xl lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)}>
            <MdOutlineMenuBook />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 w-4/5 max-w-[300px] h-full bg-[#0A0851] text-white transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
        >
          <div className="flex justify-between items-center px-4 py-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <MdOutlineCancel
              className="text-3xl cursor-pointer"
              onClick={closeMenu}
            />
          </div>

          <ul className="flex flex-col items-start px-6 text-lg text-center font-medium space-y-4 mt-6">
            <Link to="/" onClick={closeMenu}><li>Home</li></Link>
            <Link to="/about" onClick={closeMenu}><li>About</li></Link>
            <Link to="/cypruspage" onClick={closeMenu}><li>Universities</li></Link>
            <Link to="/apply" onClick={closeMenu}><li>Apply</li></Link>
            <Link to="/contact" onClick={closeMenu}><li>Contact</li></Link>

            {/* Mobile Language Selector */}
            <div className="relative w-full">
              <div
                className="flex items-center gap-2 cursor-pointer border border-gray-500 rounded-2xl px-3 py-2 w-full"
                onClick={toggleLang}
              >
                <span className="text-nowrap">Select Language</span>
                <FaChevronDown
                  className={`ml-auto transition-transform duration-300 ${
                    isLangOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {isLangOpen && (
                <ul className="mt-2 w-full rounded bg-[#0A0851] shadow-md border border-gray-600">
                  <li className="px-4 py-2 hover:text-[#F5891B] cursor-pointer">English</li>
                  <li className="px-4 py-2 hover:text-[#F5891B] cursor-pointer">Arabic</li>
                </ul>
              )}
            </div>

            <Link to="/login" onClick={closeMenu}>
              <button className="mt-4 px-4 py-2 w-full text-left bg-[#F5891B] rounded-sm">
                Login
              </button>
            </Link>
          </ul>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={closeMenu}
          />
        )}
      </div>
    </div>
  );
}
