import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const CyprusInternational = () => {
  return (
    <div className="w-full">
      

      <div className=" flex  ">
        <div className="w-full mx-auto  flex justify-between">
          {/* <!-- ========== First Image  Section ========== --> */}
          <div className="p-5  w-full border border-gray-300 ">
            <div
              className="w-full h-100 flex justify-center items-center"
              style={{
                backgroundImage:"url('https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8')",
                width: "full",
                height: "full",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat:"no-repeat"
              }}
            >
              <div className="">
                <h1 className="text-3xl md:text-5xl text-center">
                  Cyprus International University
                </h1>
                <p className="text-center flex justify-center items-center gap-2 pt-3">
                  <Link to="/">
                    <span>Home</span>
                  </Link>{" "}
                  <FaAngleRight />
                  <Link to="/">
                    <span className="text-color3 font-semibold text-xl">
                      CIU
                    </span>
                  </Link>{" "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-5 text-center">
              <div className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                Introdction
              </div>
              <div className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                Introdction
              </div>
              <div className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                Introdction
              </div>
              <div className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                Introdction
              </div>
              <div className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                Introdction
              </div>
            </div>

            <div className="p-2 grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3 sm:flex-row sm:justify-between sm:gap-4 mt-5  sm:mt-20">
              <Link to="/">
                <h1 className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                  Check This Out
                </h1>
              </Link>
              <Link to="/">
                <h1 className="px-4 whitespace-nowrap py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                  Research Opportunities
                </h1>
              </Link>
              <Link to="/">
                <h1 className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                  Campus Life
                </h1>
              </Link>
            </div>
            <div className="px-2 py-4 mt-5 sm:mt-20">
              <h1 className="text-2xl mb-3 text-color2 font-semibold">
                OTHER UNIVERSITES
              </h1>
              <ul className="grid grid-cols-1 whitespace-nowrap md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                <Link>
                  <li className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-lg text-color1 rounded cursor-pointer font-medium transition">
                    Near East University
                  </li>
                </Link>
                <Link>
                  <li className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e]  md:text-md text-color1 rounded cursor-pointer font-medium transition">
                    Eastern Mediterranean University
                  </li>
                </Link>
                <Link>
                  <li className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                    Kyrenia University
                  </li>
                </Link>
                <Link>
                  <li className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                    Bahçeşehir Cyprus University
                  </li>
                </Link>
                <Link>
                  <li className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                    Final International University
                  </li>
                </Link>
                <Link>
                  <li className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                    Cyprus Science University
                  </li>
                </Link>
                <Link>
                  <li className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                    European University of Lefke
                  </li>
                </Link>
                <Link>
                  <li className="px-4 py-2 text-white bg-[#F5891B] hover:bg-[#db8d3e] text-xl text-color1 rounded cursor-pointer font-medium transition">
                    Rauf Denktas University
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- =========End Image  Section ========== --> */}

        {/* <!-- ========== SEcond Content  Section ========== --> */}

        {/* <!-- =========End Content  Section ========== --> */}
      </div>
    </div>
  );
};

export default CyprusInternational;
