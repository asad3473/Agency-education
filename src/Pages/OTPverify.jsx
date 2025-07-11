import React from "react";

const OTPverify = () => {
  return (
    <div className="p-10 text-white inset-0 bg-gradient-to-r from-blue-900/90 via-orange-400/80 to-blue-900/90 ">
      <h1 className="text-4xl text-center font-bold">OTP Verfication</h1>
      <div className="flex flex-col items-center mt-10">
        <div>
          <h1 className="text-xl font-semibold" type="Email" placeholder="" >
            Default Email@email.com
          </h1>
        </div>
        <div className="mt-4">
          <label htmlFor="" className="block text-lg font-semibold mb-3">
            Enter OTP Code
          </label>
          <input type="text" placeholder="___________" className="px-2 py-3 text-lg  border-2 border-gray-700 rounded-sm focus:outline-none" />
        </div>
         <div className="text-3xl  bg-[rgba(245,136,27,0.7)] hover:bg-[rgb(245,137,27)] cursor-pointer text-white rounded-sm mt-10 min-w-xs font-semibold px-4 py-2  text-center">
        Verify
      </div>
      </div>
     
    </div>
  );
};

export default OTPverify;
