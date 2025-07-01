import React from "react";

import { FaWhatsapp } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="bg-[#0A0851] text-white">
      <div className="w-[90vw] mx-auto">
        {/* <!-- ========== First Section ========== --> */}
        <div className="p-5 border-b gap-3 border-gray-400 flex flex-col justify-center items-center sm:flex-row sm:justify-between ">
          <div className="flex gap-4 items-center">
            <FaWhatsapp className="text-2xl text-color2" />
            <span className="text-lg font-semibold">+9080808008088</span>
          </div>
          <div className="flex gap-5 items-center">
            <div>
              <FaSquareFacebook className="text-3xl cursor-pointer" />
            </div>
            <div>
              <FaTwitterSquare className="text-3xl cursor-pointer"  />
            </div>
            <div>
              <FaSquareInstagram className="text-3xl cursor-pointer"  />

            </div>
          </div>
        </div>

        {/* <!-- =========First Section ========== --> */}

        {/* <!-- ========== second  Section ========== --> */}
        <div className="flex whitespace-nowrap justify-between items-center py-10 ">
          <div className="text-3xl w-15 h-15 sm:w-25 sm:h-25 ">
            <img className="w-full rounded-full cursor-pointer h-full object-cover bg-center" src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <div className="text-4xl lg:hidden ">
            <MdOutlineMenuBook  />

          </div>
      {/* <!-- ========== Mobile Side Bar Section ========== --> */}

      <div>
      <div className="flex flex-col  items-center">
            <ul className="flex flex-col items-center gap-4 text-lg font-semibold gap-4 mr-5">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Universites</li>
              <li className="cursor-pointer">Admission</li>
              <li className="cursor-pointer">e-Subagent</li>
              <li className="cursor-pointer">North Cyprus</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Login</li>
            </ul>
            <button className="px-3 py-2 text-lg bg-color1 cursor-pointer rounded-sm font-semibold">Apply Now</button>
          </div>
      </div>
      
      {/* <!-- =========Mobile Side Bar Section ========== --> */}
      

          <div className="hidden lg:block">
            <div className="flex  hidden items-center">
            <ul className="flex text-lg font-semibold gap-4 mr-5">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Universites</li>
              <li className="cursor-pointer">Admission</li>
              <li className="cursor-pointer">e-Subagent</li>
              <li className="cursor-pointer">North Cyprus</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Login</li>
            </ul>
            <button className="px-3 py-2 text-lg bg-color1 cursor-pointer rounded-sm font-semibold">Apply Now</button>
          </div>
          </div>
          <div className="text-lg hidden lg:block cursor-pointer font-semibold">Select Language</div>

        </div>
        {/* <!-- =========second  Section ========== --> */}
      </div>
    </div>
  );
}
