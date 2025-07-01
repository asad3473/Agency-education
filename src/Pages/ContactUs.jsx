import React from "react";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <div className="w-full min-h-screen bg-color2 py-16 px-4">
      <div className="bg-white w-[80vw] mx-auto p-5 rounded-xl">
        <div className="max-w-[80vw] mx-auto py-10 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-10">
            {/* Text Section */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
                Contact Us
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Feel free to share your contact information. You can also
                contact us directly at the details provided below. We’re happy
                to help!
              </p>
            </div>

            {/* Image Section */}
            <div className="w-[300px] h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2t8ZW58MHx8MHx8fDA%3D"
                alt="Support agent"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  clipPath:
                    "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                }}
                className="transition duration-500 "
              />
            </div>
          </div>

          <div></div>
        </div>
        <hr className="my-5" />
        <div>
          <ul className="flex flex-col gap-3">
            <Link to="">
              <li className="flex items-center gap-3">
                <FaSquarePhoneFlip className="text-4xl" />
                +9080808008088
              </li>
            </Link>
            <Link to="">
              <li className="flex items-center gap-3">
                <MdEmail className="text-4xl" />
                info@AgencyEducation.com
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-full sm:w-[50%]  mt-4 p-2">
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="w-full text-xl font-semibold ">
              Name and Surname
            </label>
            <div className="flex flex-col sm:flex-row gap-3 text-white">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  className="px-3 py-4  text-black focus:outline-gray-300 focus:bg-white focus:border-2  bg-gray-300 w-full"
                />
              </div>
              <div className=" w-full sm:w-1/2">
                <input
                  type="text"
                  className="px-3 py-4  text-black focus:outline-gray-300 focus:bg-white focus:border-2  bg-gray-300 w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="w-full text-xl font-semibold ">
              Email{" "}
            </label>
            <div className="flex gap-3 text-white">
              <div className="w-full">
                <input
                  type="email"
                  className="px-3 py-4  text-black focus:outline-gray-300 focus:bg-white focus:border-2  bg-gray-300 w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="w-full text-xl font-semibold ">
              Phone Number{" "}
            </label>
            <div className="flex gap-3 text-white">
              <div className="w-full">
                <input
                  type="phone number"
                  className="px-3 py-4  text-black focus:outline-gray-300 focus:bg-white focus:border-2  bg-gray-300 w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="" className="w-full font-semibold text-xl">
            Message
          </label>
          <textarea
            name=""
            id=""
            className="h-40 mt-5 px-2 py-1  text-black focus:outline-gray-300 focus:bg-white focus:border-2  bg-gray-300 w-full"
          ></textarea>
          <button className="px-3 py-2 btnbg text-lg text-white bg-color1 cursor-pointer rounded-sm font-semibold">
            Submit Now
          </button>
        </div>
        <div className="w-full h-[400px] my-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.59449676682!2d71.60760926905601!3d29.37706456688667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Pakistan!5e0!3m2!1sen!2s!4v1751369887948!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
