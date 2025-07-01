import React from "react";

import { FaWhatsapp } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div>
      <div className="w-[90vw] mx-auto">
        {/* <!-- ========== First Section ========== --> */}
        <div className="p-5 border-b border-gray-400 flex justify-between ">
          <div className="flex gap-4 items-center">
            <FaWhatsapp className="text-2xl" />
            <span>+9080808008088</span>
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
        <div className="flex justify-between py-10 ">
          <div className="text-3xl">
            Logo
          </div>
          <div className="flex items-center">
            <ul className="flex gap-4 mr-5">
              <li>Home</li>
              <li>Universites</li>
              <li>Admission</li>
              <li>e-Subagent</li>
              <li>North Cyprus</li>
              <li>Contact</li>
              <li>Login</li>
            </ul>
            <button className="px-3 py-2 text-lg  font-semibold">Apply Now</button>
          </div>
          <div>Select Language</div>

        </div>
        {/* <!-- =========second  Section ========== --> */}
      </div>
    </div>
  );
}
