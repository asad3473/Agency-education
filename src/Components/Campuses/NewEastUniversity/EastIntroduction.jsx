import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";

export default function EastIntroduction() {
  return (
    <div className=" w-full mx-auto sm:w-11/12 p-3">
      <div className=" flex flex-wrap  justify-between">
        <div className="w-full sm:w-[65%]  ">
          <p className=" text-md  text-justify">
            Near East University, established in 1988 is a premier institution
            of higher learning located in Northern Cyprus. This university is
            renowned for its commitment to academic excellence, innovation,
            research, and global outreach. It offers a wide range of
            undergraduate, graduate, and doctoral programs in various fields of
            study extensive undergraduate and postgraduate education
            opportunities to over 26 thousand students coming from over 100
            countries.
          </p>

          <p className=" mt-2 text-md text-justify">
            The Near East University has 20 faculties comprising 220 departments
            and programs, 8 graduate schools with around 218 graduate and
            postgraduate programs, and 3 high schools, 28 research institutes.
          </p>
          <p className=" mt-2 text-md text-justify">
            The university has received accreditation from The Turkish Republic
            Higher Education Board (YÖK)” and “The Turkish Republic of Northern
            Cyprus Board of Higher Education Planning Accreditation and
            Coordination Board (YÖDAK)” which has acceptance globally as
            academic qualification.
          </p>

          <div className=" mt-4 w-full mb-4">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/PhK_tioBixo?si=A6JYdT-ye_iIAd6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <div className=" w-full p-2  h-auto  lg:h-70 sm:w-[30%] shadow-md   shadow-[#0A0851] ">
          <div className=" flex sm:justify-center sm:items-center">
            <hr className=" h-1 bg-[#F5891B] sm:w-[14%] border-none hidden md:flex" />
            <h1 className=" px-2 text-md text-nowrap lg:text-xl font-semibold">
              Another Universities
            </h1>
            <hr className=" h-1 bg-[#F5891B] sm:w-[14%] border-none hidden md:flex" />
          </div>
          <ol className=" mt-4 px-3 flex flex-col gap-3">
            <Link to="" className=" flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Cyprus International University</li>
            </Link>
            <Link to="" className=" flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Near East University</li>
            </Link>
            <Link to="" className=" flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Eastern Mediterranean University</li>
            </Link>
            <Link to="" className=" flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Kyrenia University</li>
            </Link>
            <Link to="" className=" flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Bahcesehir Cyprus University</li>
            </Link>
            <Link to="" className=" flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Final International University</li>
            </Link>
          </ol>
        </div>
      </div>
    </div>
  );
}
