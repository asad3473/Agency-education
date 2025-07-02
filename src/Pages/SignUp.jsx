import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { RiIdCardFill } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";


const SignUp = () => {
  const [password, setpassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [setConfirmPass, setsetConfirmPass] = useState(false);
  const [popDiv, setpopDiv] = useState(false);
  const navigate = useNavigate();

  const showPopDiv = () => {
    setpopDiv(true);
  };
  const hidePopDiv = () => {
    setpopDiv(false);
  };
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setpopDiv(true);
    setTimeout(() => {
      setpopDiv(false);
      navigate("/login");
    }, 5000);
  };

  return (
    <div className="flex bg-color1 justify-center items-center p-10">
      <div className="border border-gray-400  bg-white shadow-xl rounded-sm  ">
        <div className=" flex justify-center items-center lg:p-10 sm:h-32 bg-color3">
          <h1 className="text-2xl lg:text-3xl whitespace-nowrap py-2 text-center text-white font-semibold">
            SignUp Here
          </h1>
        </div>

        <form className="p-5" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-2 py-2">
            <input
              type="text"
              placeholder="First Name"
              className=" focus:outline-gray-300 border-b border-gray-400 px-2 py-3 w-full"
            />

            <input
              type="text "
              placeholder="Last Name"
              className=" focus:outline-gray-300 border-b border-gray-400 px-2 py-3 w-full "
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-2 py-2">
            <select className=" focus:outline-gray-300 text-gray-400 border-b border-gray-400 px-2 py-2 w-full ">
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female </option>
              <option>Others</option>
            </select>

            <select className=" focus:outline-gray-300 text-gray-400 border-b border-gray-400 px-2 py-2 w-full ">
              <option value="">Martial Status </option>
              <option>Single </option>
              <option>Married </option>
              <option>None</option>
            </select>
          </div>
          <div className=" flex flex-col items-center sm:flex-row justify-between gap-2 py-2">
            <div className="relative px-2  w-full">
              <RiIdCardFill className="absolute top-5 right-4 text-lg" />
              <input
                type="cnic"
                placeholder="CNIC"
                className=" focus:outline-gray-300 border-b border-gray-400 px-2 py-3 w-full "
              />
            </div>

            <input
              type="date"
              placeholder="Date of Birth"
              className=" focus:outline-gray-300 text-gray-500 border-b border-gray-400 px-2 py-3 w-full "
            />
          </div>
          <div className="flex justify-between gap-2 py-2">
            <input
              type="Nationality"
              placeholder="Type Nationality"
              className=" focus:outline-gray-300 border border-gray-200 px-2 py-3 w-full "
            />

            <input
              type="contact"
              placeholder="Contact No."
              className=" focus:outline-gray-300 border border-gray-200 px-2 py-3 w-full "
            />
          </div>
          <div className="w-full gap-2 py-2">
            <input
              type="text"
              placeholder="Permanent Address"
              className=" w-full focus:outline-gray-300 border-b border-gray-400 px-2 py-3 "
            />
          </div>
          <div className="w-full  gap-2 py-2">
            <input
              type="text"
              placeholder="Email Address"
              className=" w-full focus:outline-gray-300 border-b border-gray-400 px-2 py-3 "
            />
          </div>
          <div className="flex justify-between gap-2 py-2">
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="focus:outline-gray-300 border-2 border-gray-200 px-2 py-3 w-full"
                ref={passwordRef}
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
              <FaRegEye
                className="absolute top-5 right-2 text-lg cursor-pointer"
                onClick={() => setshowPassword(!showPassword)}
              />
            </div>

            <div className="relative w-full">
              <input
                type={setConfirmPass ? "text" : "password"}
                placeholder="Confirm Password"
                className="focus:outline-gray-300 border-2 border-gray-200 px-2 py-3 w-full"
                ref={confirmPasswordRef}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={ConfirmPassword}
              />
              <FaEye
                className="absolute top-5 right-5 text-lg cursor-pointer"
                onClick={() => setsetConfirmPass(!setConfirmPass)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="px-3 w-full  py-2 text-lg bg-color3 text-white cursor-pointer rounded-sm font-semibold"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>

     {popDiv && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center z-50">
          <div className="bg-white p-10 rounded shadow-lg text-center relative">
            <GiCrossedBones
              className="absolute top-3 right-3 text-xl cursor-pointer"
              onClick={() => setpopDiv(false)}
            />
            <h2 className="text-2xl font-bold text-green-600">
              🎉 SignUp Successful!
            </h2>
            <p className="mt-2 text-gray-700">Redirecting to Login...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
