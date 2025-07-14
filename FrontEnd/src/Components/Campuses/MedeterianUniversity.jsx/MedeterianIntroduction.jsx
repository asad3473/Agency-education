import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";

export default function MedeterianIntroduction() {
  return (
    <div className="w-full mx-auto sm:w-11/12 p-3">
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-[65%]">
          <p className="text-md text-justify">
            Eastern Mediterranean University (EMU), located in Northern Cyprus
            the Mediterranean island of Cyprus, is a renowned institution known
            for its high academic standards, diverse community, and vibrant
            campus life. Founded in 1979, EMU has grown into a hub of education,
            research, and cultural exchange, attracting students from all over
            the world.
          </p>

          <p className="mt-2 text-md text-justify">
            Eastern Mediterranean University (EMU) was established in the
            Turkish Republic of Northern Cyprus to educate and build human
            resources for a newly established country and it grew exponentially
            to become an internationally recognized state university of the
            Turkish Republic of Northern Cyprus with more than 64,000 graduates
            and currently educating more than 16,000 students, but it has also
            earned its place as a renowned university worldwide, where the
            medium of conduct is English. With EMU offering quality education
            through 107 undergraduate programs and 103 postgraduate programs and
            giving up to 100% Scholarships for international students, this
            world ranking university is not only the ideal place to take your
            next step towards your future international career, but also
            provides a unique experience of earning a prestigious degree from a
            world-class institution.
          </p>

          <p className="mt-2 text-md text-justify">
            Eastern Mediterranean University (EMU) is proud of the quality
            education it offers to each student who has passed through its
            doors. We are proud to be ranked in the 501-600 band in the Times
            Higher Education University Ranking and are simultaneously ranked in
            the 251-300 Young Universities band. These world ranking university
            is particularly known for its strong engineering and business
            programs amongst many programs, which are accredited by
            international bodies. EMU also offers a range of postgraduate
            programs, including masters and doctoral degrees. These programs are
            designed to help students specialize in their chosen fields and
            conduct in-depth research.
          </p>

          <div className="mt-4 w-full mb-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uuOL_mPvbcU?si=nmkTIM5ov4o6xist"
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
