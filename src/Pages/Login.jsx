import React from "react";
import { Link } from "react-router-dom";
import img from "/login.jpg";

const Login = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row  justify-around items-center p-5 md:p-10">
      <div className="w-full md:w-1/3 lg:w-1/2 h-120">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover bg-center"
        />
      </div>

      <div className="w-full md:w-1/2  lg:w-1/3 border border-gray-300 shadow-xl pb-5 flex flex-col gap-10">
        <div className="sm:py-10 sm:px-15 flex justify-center items-center lg:p-10  text-2xl lg:6xl w-full h-15 md:h-30 bg-color3">
          <h1 className=" text-3xl lg:text-4xl xl:text-6xl whitespace-nowrap py-2 text-center text-white font-semibold">
            Login Here
          </h1>
        </div>
        <div className="px-5 xl:p-10">
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full border-gray-200 px-3 py-2 focus:outline-gray-300 text-xl bg-color3 focus:bg-white  text-white  border rounded-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-gray-200 px-3 py-2 focus:outline-gray-300 text-xl bg-color3 focus:bg-white  text-white  border rounded-full"
            />
          </div>
          <div className="flex justify-between py-2">
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <div>
              <Link to="/">
                <p className="text-color2 font-semibold">Forgot Password</p>
              </Link>
            </div>
          </div>
          <div className="w-full px-3 py-2 rounded-full bg-color3 text-2xl font-semibold text-white text-center cursor-pointer">
            <Link to="/">
              <span>Login</span>
            </Link>
          </div>
          <div className="flex justify-center py-4">
            <p>
              Not a member ?{" "}
              <Link to="/signup">
                <span className="text-color2 text-xl font-semibold">
                  Signup now
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
