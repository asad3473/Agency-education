import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { MdOutlineMenuBook, MdOutlineCancel } from "react-icons/md";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMobile = () => setIsMenuOpen(true);
  const closeMobile = () => setIsMenuOpen(false);

  return (
    <div className="bg-[#0A0851] text-white">
      <div className="w-[90vw] mx-auto">
     
        <div className="flex justify-between items-center py-4 relative">
          {/* Logo */}
          <Link to="/">
            <div className="w-10 h-10 sm:w-10 sm:h-10 mr-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=500&auto=format&fit=crop&q=60"
                alt="Logo"
                className="w-full h-full object-cover rounded-xl cursor-pointer"
              />
            </div>
          </Link>

          {/* Hamburger Icon */}
          <div className="text-4xl lg:hidden cursor-pointer" onClick={showMobile}>
            <MdOutlineMenuBook />
          </div>

          {/* Mobile Sidebar */}
          {isMenuOpen && (
            <>
              <div
                className="absolute top-5 right-5 z-50 text-white cursor-pointer"
                onClick={closeMobile}
              >
                <MdOutlineCancel className="text-4xl" />
              </div>

              <div className="z-40 absolute top-0 right-0 min-h-screen w-full sm:w-[300px] px-4 py-10 bg-color1 lg:hidden">
                <div className="flex flex-col items-center gap-4">
                  <ul className="text-lg font-semibold space-y-4">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/universities"><li>Universities</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                  </ul>
                  <Link to="/contact">
                    <button className="px-3 py-2 text-lg bg-color1 rounded-sm font-semibold">
                      Apply Now
                    </button>
                  </Link>
                </div>
                <div className="flex justify-center mt-5 gap-5">
                  <Link to="/facebook"><FaSquareFacebook className="text-3xl" /></Link>
                  <Link to="/twitter"><FaTwitterSquare className="text-3xl" /></Link>
                  <Link to="/instagram"><FaSquareInstagram className="text-3xl" /></Link>
                </div>
              </div>
            </>
          )}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 mr-4">
            <ul className="flex text-sm xl:text-lg font-semibold gap-4">
              <Link to="/"><li>Home</li></Link>
              <Link to="/universities"><li>Universities</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
            <Link to="/contact">
              <button className="px-3 py-2 text-lg bg-color1 rounded-sm font-semibold">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Language + Login (Desktop) */}
          <div className="relative z-20 hidden lg:block font-semibold group text-sm">
            <div className="flex items-center gap-3">
              <input
                type="text"
                readOnly
                value="Select Language"
                className="bg-transparent border border-gray-500 rounded-4xl text-white text-center py-2 focus:outline-none"
              />
              <Link to="/login">
                <li className="list-none px-4 py-2 rounded-md bg-[#F5891B] text-white transition duration-300 hover:bg-orange-600">
                  Login
                </li>
              </Link>
            </div>
            <ul className="absolute bg-[#0A0851] text-white mt-2 w-full rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <li className="px-4 py-2 hover:bg-color1">English</li>
              <li className="px-4 py-2 hover:bg-color1">Arabic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
