import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";

export default function KyreniaINtroduc() {
  return (
    <div className="w-full mx-auto sm:w-11/12 p-3">
      <div className="flex flex-wrap justify-between">
        {/* Main Content */}
        <div className="w-full sm:w-[65%]">
          <p className="text-md text-justify">
            University of Kyrenia is a prestigious higher education institution
            located in Kyrenia, one of the most beautiful and historic cities in
            Cyprus which is founded on the mission of “training critical and
            innovative research-focused scholars, who will create knowledge and
            value in an international educational background and who will
            develop an appreciation of ethical and moral values, with a sense of
            social responsibility”.
          </p>

          <p className="mt-2 text-md text-justify">
            The roots of the University lie in the establishment of the first
            Maritime Studies Faculty in Cyprus at our sister university, Near
            East University, in 1978, and this history gives us thirty-five
            years of expertise in the field. The University has the approval of
            the TRNC’s Ministry of National Education and received its
            accreditation from the Higher Education Planning, Evaluation
            Accreditation and Coordination Council (YODAK). The university also
            has been accreditation approval from Turkey’s Council of Higher
            Education (YOK).
          </p>

          <p className="mt-2 text-md text-justify">
            Faculties of Maritime Studies; Maritime Management and
            Administration, and Marine Sciences, Marine Transportation and
            Management, Faculty of Aviation and Space Sciences, to offer
            undergraduate degree programs in the Departments of Civil Air
            Logistics; Aviation Management (Civil Air Transport Management), and
            Professional Pilot Training (Pilotage). Education; Law; Economics
            and Administrative Sciences; Architecture; Engineering; Health
            Sciences and Medicine are other faculties also provided to students
            by the University Kyrenia. Our university has a total of 14
            Faculties, 1 Academy, 2 Vocational Schools, 4 Postgraduate programs
            and 45 programs.
          </p>

          <p className="mt-2 text-md text-justify">
            University of Kyrenia is recognized for its international approach,
            attracting students from diverse backgrounds and cultures. This
            diversity enriches the learning experience, creating an inclusive
            and global environment on campus.
          </p>

          <div className="mt-4 w-full mb-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HrDKdsehwWE?si=FbCc31RHsiUwQxwX"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* Sidebar */}
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
