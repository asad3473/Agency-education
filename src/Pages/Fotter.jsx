import React from "react";
import {
  FaSquarePhoneFlip,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-color1 text-white pt-10">
      <div className="w-[90vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 p-5">
        {/* Logo & Description */}
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold mb-4 text-white">
              AgencyEducation
            </h1>
          </Link>
          <p className="mb-4 text-md">
            A Wonderful Education and Tech Skills Learning Platform.
          </p>
          <Link to="/contact">
            <button className="px-4 py-2 bg-[#F5891B] hover:bg-[#db8d3e] text-sm text-color1 rounded cursor-pointer font-medium transition">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">EducationUnlimited</h2>
          <ul className="space-y-2 text-md">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/universities" className="hover:underline">
                Universities
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About North Cyprus
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Other Links</h2>
          <ul className="space-y-2 text-md">
            <li>
              <Link to="/admission" className="hover:underline">
                Admission Process
              </Link>
            </li>
            <li>
              <Link to="/subagent" className="hover:underline">
                e-Subagent
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-md">
            <li className="flex items-center gap-2">
              <FaSquarePhoneFlip className="text-lg" />
              +90 533 889 9948
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-lg" />
              info@studygists.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-700 mt-8" />
      <div className="flex flex-col sm:flex-row justify-between items-center w-[80vw] mx-auto py-5 gap-4 text-sm">
        <p className="text-center">
          &copy; {new Date().getFullYear()} AgencyEducation Limited. All rights
          reserved.
        </p>
        <div className="flex gap-5 text-2xl">
          <Link to="/facebook" className="hover:text-gray-300">
            <FaSquareFacebook className="hover:scale-3d"/>
          </Link>
          <Link to="/twitter" className="hover:text-gray-300">
            <FaTwitterSquare />
          </Link>
          <Link to="/instagram" className="hover:text-gray-300">
            <FaSquareInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
}
