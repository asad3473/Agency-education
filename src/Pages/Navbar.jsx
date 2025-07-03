import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

export default function Navbar() {
  const [first, setfirst] = useState(false);
  // const [menu, setmenu] = useState(false);
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
            </div>
          </div>
        </div>

        {/* <!-- =========First Section ========== --> */}

        {/* <!-- ========== second  Section ========== --> */}
        <div className="flex whitespace-nowrap justify-between items-center py-3 ">


        <div className="flex whitespace-nowrap justify-between items-center py-4 ">
          <Link to="/">
            {" "}
            <div className=" w-15 mr-3 h-15 sm:w-20 sm:h-15 ">
            <div className=" w-10 mr-3 h-10 sm:w-10 sm:h-10 ">
              <img
                className="w-full rounded-xl cursor-pointer h-full object-cover bg-center"
                src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />

            </div>
          </Link>
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
            <div className="z-33   absolute top-0 min-h-screen right-0 w-full lg:hidden sm:w-[300px] px-4 py-10 bg-color1  ">
              <div className="flex flex-col  items-center">
                <ul className="flex flex-col items-center  text-lg font-semibold gap-4 mr-5">
                  <Link to="/">
                    <li className="cursor-pointer">Home</li>
                  </Link>
                  <Link to="/universities">
                    <li className="cursor-pointer">Universites</li>
                  </Link>

                  <Link to="/contact">
                    <li className="cursor-pointer">Contact</li>
                  </Link>
                  <Link to="/login">
                    <li className="cursor-pointer">Login</li>
                  </Link>
                </ul>
                <Link to="/applynow">
                  {" "}
                  <button className="px-3 my-3 py-2 btnbg text-lg bg-color1 cursor-pointer rounded-sm font-semibold">
                    Apply Now
                  </button>
                </Link>
              </div>

              <div className=" flex justify-center mt-5  gap-5  text-center">
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
            </div>
          )}

          {/* <!-- =========Mobile Side Bar Section ========== --> */}

          <div className="hidden lg:block">
            <div className="flex  mr-4  items-center">
              <ul className="flex text-sm xl:text-lg font-semibold gap-4 mr-5">
                <Link to="/">
                  <li className="cursor-pointer">Home</li>
                </Link>
                <Link to="/cypruspage">
                  <li className="cursor-pointer">Universites</li>
                </Link>

                <Link to="/contact">
                  <li className="cursor-pointer">Contact</li>
                </Link>

              </ul>
<<<<<<< HEAD
              <Link to="/applynow">
                {" "}
                <button className="px-3 py-2 btnbg text-lg bg-color1 cursor-pointer rounded-sm font-semibold">
                  Apply Now
                </button>
              </Link>
=======
              <Link to="/contact"> <button className="px-3 py-2 btnbg text-lg bg-color1 cursor-pointer rounded-sm font-semibold">
                Apply Now
              </button></Link>
>>>>>>> 864dc455b0e60230c69c13bc96a38cb5993db571
            </div>
          </div>
          <div className="relative z-20 text-sm hidden lg:block cursor-pointer font-semibold group">
            <div className=" flex  items-center gap-3 ">
              <input
                type="text"
                readOnly
                value="Select Language"
                className="bg-transparent rounded-4xl border border-gray-500 text-white text-center py-2  focus:outline-none"
              />
              <Link to="/login">
                <li className="list-none  px-4 py-2 rounded-md bg-[#F5891B] text-white transition-all delay-100 duration-300 hover:text-white cursor-pointer hover:bg-[#F5891B]">Login</li>
              </Link>
            </div>
            <ul className="absolute bg-[#0A0851] text-white mt-2 w-full rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <li className="px-4 py-2 hover:bg-color1">English</li>
              <li className="px-4 py-2 hover:bg-color1">Arabic</li>
            </ul>
          </div>
        </div>

        {/* <!-- =========second  Section ========== --> */}
      </div>
    </div>
  );
}
