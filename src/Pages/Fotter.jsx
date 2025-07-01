import React from "react";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
export default function Fotter() {
  return (
    <div className="bg-color1 pt-10 text-white">
      <div className="w-[90vw] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:gap-15 mx-auto p-5">
        <div>
          <Link to="/"><h1 className="text-2xl mb-3">AgencyEducation</h1></Link>
          <p className="mb-5">
            A Wonderful Education and Tec Skills learning Platform
          </p>
          <Link to="/contact">
            {" "}
            <button className="px-3 py-2 btnbg text-lg bg-color1 cursor-pointer rounded-sm font-semibold">
              Apply Now
            </button>
          </Link>
        </div>
        <div>
          <h1 className="text-xl mb-3">EducationUnlimited</h1>
          <ul className="flex flex-col gap-3">
            <Link to="">
              <li>Home </li>
            </Link>
            <Link to="">
              <li>Universites </li>
            </Link>
            <Link to="">
              <li>About North Cyprus </li>
            </Link>
            <Link to="">
              <li>Gallery </li>
            </Link>
            <Link to="">
              <li>FAQ </li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="text-xl mb-3">Others Links</h1>
          <ul className="flex flex-col gap-3">
            <Link to="">
              Admission Process <li></li>
            </Link>
            <Link to="">
              e-subagent <li></li>
            </Link>
            <Link to="">
              Contact <li></li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="text-xl mb-3">Contact Us</h1>
          <ul className="flex flex-col gap-3">
            <Link to="">
              <li className="flex items-center gap-3">
                <FaSquarePhoneFlip />
                +905338899948
              </li>
            </Link>
            <Link to="">
              <li className="flex items-center gap-3">
                <MdEmail />
                info@studygists.com
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 py-5 items-center">
        <div className=" flex justify-center  gap-5  text-center">
          <Link to="/facebook">
            <div>
              <FaSquareFacebook className="text-3xl cursor-pointer" />
            </div>
          </Link>

          <Link to="/twitter">
            <div>
              <FaTwitterSquare className="text-3xl cursor-pointer" />
            </div>
          </Link>

          <Link to="/instagram">
            <div>
              <FaSquareInstagram className="text-3xl cursor-pointer" />
            </div>
          </Link>
        </div>
        <div>
          <p>Copyright @AgencyEducation Limited.</p>
        </div>
      </div>
    </div>
  );
}
