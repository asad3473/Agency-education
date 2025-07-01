import React, { useState } from "react";

import { FaWhatsapp } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

export default function Navbar() {
  const [first, setfirst] = useState(false);
  const [menu, setmenu] = useState(false);
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
        {/* <!-- ========== First Section ========== --> */}
        <div className="p-5 border-b gap-3 border-gray-400 flex flex-col justify-center items-center sm:flex-row sm:justify-between ">
          <div className="flex gap-4 items-center">
            <FaWhatsapp className="text-2xl text-color2" />
            <span className="text-lg font-semibold">+9080808008088</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative z-20 text-sm block lg:hidden cursor-pointer font-semibold group">
              <input
                type="text"
                readOnly
                value="Select Language"
                className="bg-transparent rounded-4xl border border-gray-500 text-white px-3 py-2  focus:outline-none"
              />
              <ul className="absolute bg-[#0A0851] text-white mt-2 w-full rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                <li className="px-4 py-2 hover:bg-color1">English</li>
                <li className="px-4 py-2 hover:bg-color1">French</li>
                <li className="px-4 py-2 hover:bg-color1">Arabic</li>
                <li className="px-4 py-2 hover:bg-color1">Spanish</li>
              </ul>
            </div>

            <div className="hidden lg:block">
              {" "}
              <div className="flex gap-5    lg:flex">
                <div>
                  <FaSquareFacebook className="text-3xl cursor-pointer" />
                </div>
                <div>
                  <FaTwitterSquare className="text-3xl cursor-pointer" />
                </div>
                <div>
                  <FaSquareInstagram className="text-3xl cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- =========First Section ========== --> */}

        {/* <!-- ========== second  Section ========== --> */}
        <div className="flex whitespace-nowrap justify-between items-center py-10 ">
          <div className=" w-15 h-15 sm:w-25 sm:h-25 ">
            <img
              className="w-full rounded-full cursor-pointer h-full object-cover bg-center"
              src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="text-4xl lg:hidden " onClick={showMobile}>
            <MdOutlineMenuBook />
          </div>
          {/* <!-- ========== Mobile Side Bar Section ========== --> */}
          {cross && (
            <div
              className="absolute z-55 top-5 right-5 text-white"
              onClick={minusMobile}
            >
              <MdOutlineCancel className="text-4xl" />
            </div>
          )}

          {first && (
            <div className="z-33 absolute top-0 min-h-screen right-0 w-full lg:hidden sm:w-[300px] px-4 py-10 bg-color1 ">
              <div className="flex flex-col  items-center">
                <ul className="flex flex-col items-center  text-lg font-semibold gap-4 mr-5">
                  <li className="cursor-pointer ">Home</li>
                  <li className="cursor-pointer ">Universites</li>
                  <li className="cursor-pointer ">Admission</li>
                  <li className="cursor-pointer ">e-Subagent</li>
                  <li className="cursor-pointer ">North Cyprus</li>
                  <li className="cursor-pointer ">Contact</li>
                  <li className="cursor-pointer ">Login</li>
                </ul>
                <button className="px-3 py-2 text-lg bg-color1 cursor-pointer rounded-sm font-semibold">
                  Apply Now
                </button>
              </div>

              <div className=" flex justify-center mt-5  gap-5  text-center">
                <div>
                  <FaSquareFacebook className="text-3xl cursor-pointer" />
                </div>
                <div>
                  <FaTwitterSquare className="text-3xl cursor-pointer" />
                </div>
                <div>
                  <FaSquareInstagram className="text-3xl cursor-pointer" />
                </div>
              </div>
            </div>
          )}

          {/* <!-- =========Mobile Side Bar Section ========== --> */}

          <div className="hidden lg:block">
            <div className="flex   items-center">
              <ul className="flex text-sm xl:text-lg font-semibold gap-4 mr-5">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Universites</li>
                <li className="cursor-pointer">Admission</li>
                <li className="cursor-pointer">e-Subagent</li>
                <li className="cursor-pointer">North Cyprus</li>
                <li className="cursor-pointer">Contact</li>
                <li className="cursor-pointer">Login</li>
              </ul>
              <button className="px-3 py-2 btnbg text-lg bg-color1 cursor-pointer rounded-sm font-semibold">
                Apply Now
              </button>
            </div>
          </div>
          <div className="relative z-20 text-sm hidden lg:block cursor-pointer font-semibold group">
            <input
              type="text"
              readOnly
              value="Select Language"
              className="bg-transparent rounded-4xl border border-gray-500 text-white px-3 py-2  focus:outline-none"
            />
            <ul className="absolute bg-[#0A0851] text-white mt-2 w-full rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <li className="px-4 py-2 hover:bg-color1">English</li>
              <li className="px-4 py-2 hover:bg-color1">French</li>
              <li className="px-4 py-2 hover:bg-color1">Arabic</li>
              <li className="px-4 py-2 hover:bg-color1">Spanish</li>
            </ul>
          </div>
        </div>

        {/* <!-- =========second  Section ========== --> */}
      </div>
    </div>
  );
}
