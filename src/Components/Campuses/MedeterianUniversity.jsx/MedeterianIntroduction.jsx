import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";

export default function MedeterianIntroduction() {
  return (
    <div className="w-full mx-auto sm:w-11/12 p-3">
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-[65%]">
          <p className="text-md text-justify">
            Eastern Mediterranean University (EMU), located in Northern Cyprus the Mediterranean island of Cyprus, is a renowned institution known for its high academic standards, diverse community, and vibrant campus life. Founded in 1979, EMU has grown into a hub of education, research, and cultural exchange, attracting students from all over the world.
          </p>

          <p className="mt-2 text-md text-justify">
            Eastern Mediterranean University (EMU) was established in the Turkish Republic of Northern Cyprus to educate and build human resources for a newly established country and it grew exponentially to become an internationally recognized state university of the Turkish Republic of Northern Cyprus with more than 64,000 graduates and currently educating more than 16,000 students, but it has also earned its place as a renowned university worldwide, where the medium of conduct is English. With EMU offering quality education through 107 undergraduate programs and 103 postgraduate programs and giving up to 100% Scholarships for international students, this world ranking university is not only the ideal place to take your next step towards your future international career, but also provides a unique experience of earning a prestigious degree from a world-class institution.
          </p>

          <p className="mt-2 text-md text-justify">
            Eastern Mediterranean University (EMU) is proud of the quality education it offers to each student who has passed through its doors. We are proud to be ranked in the 501-600 band in the Times Higher Education University Ranking and are simultaneously ranked in the 251-300 Young Universities band. These world ranking university is particularly known for its strong engineering and business programs amongst many programs, which are accredited by international bodies. EMU also offers a range of postgraduate programs, including masters and doctoral degrees. These programs are designed to help students specialize in their chosen fields and conduct in-depth research.
          </p>

          <div className="mt-4 w-full mb-4">
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

        <div className="w-full p-2 h-auto lg:h-70 sm:w-[30%] shadow-md shadow-[#0A0851]">
          <div className="flex sm:justify-center sm:items-center">
            <hr className="h-1 bg-[#F5891B] sm:w-[14%] border-none hidden md:flex" />
            <h1 className="px-2 text-md text-nowrap lg:text-xl font-semibold">
              Another Universities
            </h1>
            <hr className="h-1 bg-[#F5891B] sm:w-[14%] border-none hidden md:flex" />
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
