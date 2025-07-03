import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { MdOutlineMenuBook, MdOutlineCancel } from "react-icons/md";

export default function Navbar() {
  const [first, setfirst] = useState(false);
  const [cross, setcross] = useState(false);

  const showMobile = () => {
    setfirst(true);
    setcross(true);
  };

  const minusMobile = () => {
    setfirst(false);
    setcross(false);
  };

  return (
    <div className="bg-[#0A0851] text-white">
      <div className="w-[90vw] mx-auto">
        {/* Top Contact Bar */}
        <div className="p-5 border-b gap-3 border-gray-400 flex flex-col justify-center items-center sm:flex-row sm:justify-between ">
          <div className="flex gap-4 items-center">
            <Link to="/">
              <FaWhatsapp className="text-2xl text-color2" />
            </Link>
            <span className="text-lg font-semibold">+9080808008088</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative z-20 text-sm block lg:hidden cursor-pointer font-semibold group">
              <input
                type="text"
                readOnly
                value="Select Language"
                className="bg-transparent rounded-4xl border border-gray-500 text-white px-3 py-2 focus:outline-none"
              />
              <ul className="absolute bg-[#0A0851] text-white mt-2 w-full rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                <li className="px-4 py-2 hover:bg-color1">English</li>
                <li className="px-4 py-2 hover:bg-color1">French</li>
                <li className="px-4 py-2 hover:bg-color1">Arabic</li>
                <li className="px-4 py-2 hover:bg-color1">Spanish</li>
              </ul>
            </div>

            <div className="hidden lg:flex gap-5">
              <Link to="/facebook">
                <FaSquareFacebook className="text-3xl cursor-pointer" />
              </Link>
              <Link to="/twitter">
                <FaTwitterSquare className="text-3xl cursor-pointer" />
              </Link>
              <Link to="/instagram">
                <FaSquareInstagram className="text-3xl cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center py-4 relative">
          {/* Logo */}
          <Link to="/">
            <div className="w-10 h-10 sm:w-10 sm:h-10 mr-3">
              <img
                className="w-full h-full object-cover rounded-xl cursor-pointer"
                src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=500&auto=format&fit=crop&q=60"
                alt="Logo"
              />
            </div>
          </Link>

          {/* Hamburger Menu */}
          <div className="text-4xl lg:hidden" onClick={showMobile}>
            <MdOutlineMenuBook />
          </div>

          {/* Mobile Sidebar */}
          {cross && (
            <div className="absolute z-50 top-5 right-5 text-white" onClick={minusMobile}>
              <MdOutlineCancel className="text-4xl" />
            </div>
          )}

          {first && (
            <div className="z-40 absolute top-0 right-0 w-full sm:w-[300px] min-h-screen px-4 py-10 bg-color1 lg:hidden">
              <div className="flex flex-col items-center">
                <ul className="flex flex-col items-center text-lg font-semibold gap-4">
                  <Link to="/"><li className="cursor-pointer">Home</li></Link>
                  <Link to="/universities"><li className="cursor-pointer">Universities</li></Link>
                  <Link to="/contact"><li className="cursor-pointer">Contact</li></Link>
                  <Link to="/login"><li className="cursor-pointer">Login</li></Link>
                </ul>
                <Link to="/applynow">
                  <button className="px-3 my-3 py-2 btnbg text-lg bg-color1 cursor-pointer rounded-sm font-semibold">
                    Apply Now
                  </button>
                </Link>
              </div>
              <div className="flex justify-center mt-5 gap-5">
                <Link to="/facebook"><FaSquareFacebook className="text-3xl cursor-pointer" /></Link>
                <Link to="/twitter"><FaTwitterSquare className="text-3xl cursor-pointer" /></Link>
                <Link to="/instagram"><FaSquareInstagram className="text-3xl cursor-pointer" /></Link>
              </div>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center mr-4">
            <ul className="flex text-sm xl:text-lg font-semibold gap-4 mr-5">
              <Link to="/"><li className="cursor-pointer">Home</li></Link>
              <Link to="/cypruspage"><li className="cursor-pointer">Universities</li></Link>
              <Link to="/contact"><li className="cursor-pointer">Contact</li></Link>
            </ul>
            <Link to="/applynow">
              <button className="px-3 py-2 btnbg text-lg bg-color1 cursor-pointer rounded-sm font-semibold">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Language & Login */}
          <div className="relative z-20 text-sm hidden lg:block cursor-pointer font-semibold group">
            <div className="flex items-center gap-3">
              <input
                type="text"
                readOnly
                value="Select Language"
                className="bg-transparent rounded-4xl border border-gray-500 text-white text-center py-2 focus:outline-none"
              />
              <Link to="/login">
                <li className="list-none px-4 py-2 rounded-md bg-[#F5891B] text-white transition duration-300 hover:bg-[#f47f09] cursor-pointer">
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
