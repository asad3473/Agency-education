import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";

export default function FinalUniversityIntro() {
  return (
    <div className="w-full mx-auto sm:w-11/12 p-3">
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-[65%]">
          <p className="text-md text-justify">
            About Final International University Final International University
            (FIU) provides students with the opportunities and support they
            deserve from your university! When you join the Final International
            University (FIU) family, our highly qualified academic staff will
            carefully nurture your path to professional success and a university
            community that always puts you first!
          </p>

          <p className="mt-2 text-md text-justify">
            FIU is a young and innovative university. Founded in 2015, Final
            International University (FIU) aims to provide an internationally
            recognized education of the highest quality, delivered through
            innovative teaching methods to prepare you for the job market and
            make you a future leader in your chosen profession!
          </p>

          <p className="mt-2 text-md text-justify">
            With its global network of partnerships and a unique scholarship
            structure that provides financial access to students around the
            world, FIU has everything you need.
          </p>

          <div className="mt-4 w-full mb-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dwVuqkGdBYU?si=0QZtPlbAXLPRJAnW"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

         <div className="w-full sm:w-[30%] h-96 bg-white rounded-xl shadow-xl border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#0A0851] to-[#1A3D8F] p-4">
            <div className="flex items-center justify-center">
              <hr className="h-1 bg-[#F5891B] w-8 border-none" />
              <h1 className="px-3 text-lg font-bold text-white whitespace-nowrap">
                Another Universities
              </h1>
              <hr className="h-1 bg-[#F5891B] w-8 border-none" />
            </div>
          </div>

          <div className="p-4">
            <ol className="space-y-3">
              <Link
                to="/Cyprus-International-University"
                className="flex items-center gap-2"
              >
                <GiConvergenceTarget />
                <li>Cyprus International University</li>
              </Link>
              <Link
                to="/Near-East-University"
                className="flex items-center gap-2"
              >
                <GiConvergenceTarget />
                <li>Near East University</li>
              </Link>

              <Link
                to="/Eastern-Mediterranean-University"
                className="flex items-center gap-2"
              >
                <GiConvergenceTarget />
                <li>Eastern Mediterranean University</li>
              </Link>
              <Link
                to="/Kyrenia-University"
                className="flex items-center gap-2"
              >
                <GiConvergenceTarget />
                <li>Kyrenia University</li>
              </Link>
              <Link
                to="/Bahcesehir-Cyprus-University"
                className="flex items-center gap-2"
              >
                <GiConvergenceTarget />
                <li>Bahcesehir Cyprus University</li>
              </Link>
              <Link
                to="/Final-International-University"
                className="flex items-center gap-2"
              >
                <GiConvergenceTarget />
                <li>Final International University</li>
              </Link>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
