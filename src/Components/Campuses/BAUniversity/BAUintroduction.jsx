import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";

export default function BAUintroduction() {
  return (
    <div className=" w-full mx-auto sm:w-11/12 p-3">
      <div className=" flex flex-wrap justify-between">
        <div className="w-full sm:w-[65%]">
          <p className=" text-md text-justify">
            Bahçeşehir Cyprus University (BAU Cyprus) initiated education in the
            2017-2018 academic year and is located in Nicosia, the capital city.
            BAU Cyprus is officially recognised by the Turkish Higher Education
            Council (YOK) in Turkey, while all the programmes are accredited by
            the National Education and the Higher Education Accreditation
            Commission (YODAK) of the Turkish Republic of Northern Cyprus.
          </p>

          <p className=" mt-2 text-md text-justify">
            BAU Cyprus is a member of the BAU Global Education Network, and
            comprises several universities like Bahçeşehir University – Istanbul
            (Turkey), Bay Atlantic University – Washington (USA), Berlin
            International University of Applied Sciences – Berlin (GERMANY), BAU
            International University Batumi – Batumi (Georgia), and Bahçeşehir
            Cyprus University, Nicosia, which educate students from around the
            world in different undergraduate and graduate programmes.
          </p>

          <p className=" mt-2 text-md text-justify">
            BAU Cyprus aims at providing opportunity for students to benefit
            from academic means having an equal level located in different
            continents and countries and getting education on different campuses
            to enable them to have an international vision.
          </p>

          <div className=" mt-4 w-full mb-4">
            <iframe
              className="w-full"
              height="360"
              src="https://www.youtube.com/embed/oKu4GAeGjp8?list=PLsTddL7XG_ksoWGtge2ne09eOYEsShQ1V"
              title="Cyprus International University-Promotional Video 2018"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className=" w-full p-2 h-auto lg:h-70 sm:w-[30%] shadow-md shadow-[#0A0851]">
          <div className=" flex sm:justify-center sm:items-center">
            <hr className=" h-1 bg-[#F5891B] sm:w-[14%] border-none hidden md:flex" />
            <h1 className=" px-2 text-md text-nowrap lg:text-xl font-semibold">
              Another Universities
            </h1>
            <hr className=" h-1 bg-[#F5891B] sm:w-[14%] border-none hidden md:flex" />
          </div>
          <ol className="mt-4 px-3 flex flex-col gap-3">
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Cyprus International University</li>
            </Link>
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Near East University</li>
            </Link>
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Eastern Mediterranean University</li>
            </Link>
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Kyrenia University</li>
            </Link>
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Bahcesehir Cyprus University</li>
            </Link>
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Final International University</li>
            </Link>
          </ol>
        </div>
      </div>
    </div>
  );
}
