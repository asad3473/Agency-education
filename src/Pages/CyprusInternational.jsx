import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const CyprusInternational = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[40vh] bg-color3 text-white flex justify-center items-center">
        <div className="">
          <h1 className="text-3xl">Cyprus International University</h1>
          <p className="text-center flex justify-center items-center gap-2 pt-3">
            <Link to="/">
              <span>Home</span>
            </Link>{" "}
            <FaAngleRight />
            <Link to="/">
              <span className="text-color3 font-semibold text-xl">CIU</span>
            </Link>{" "}
          </p>
        </div>
      </div>

      <div className="p-10 flex  ">
        <div className="w-[90vw] mx-auto  flex justify-between">
          {/* <!-- ========== First Image  Section ========== --> */}
          <div className="p-5  w-full border border-gray-300 ">
            <div className="w-full h-100">
              <img
                src="https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                alt=""
                className="w-full h-full boject-cover bg-center"
              />
            </div>
            <div>
              <h1 className="text-3xl my-4 text-color2 font-semibold">
                About Cyprus International University
              </h1>
              <p>
                Cyprus International University (CIU), established in 1997 is a
                leading educational institution located in the heart of Northern
                Cyprus, offering a wide range of academic programs and degrees.
                The university is renowned for its commitment to academic
                excellence, innovative teaching methods, and a vibrant campus
                life. Cyprus International University (CIU) provides students
                with excellent opportunities to achieve their academic and
                career goals. The university emphasizes global education and
                fosters a diverse atmosphere that promotes cultural exchange.
                All undergraduate Academic Programs of the university are
                designed to equip students with the necessary knowledge and
                skills to excel in their chosen field while its postgraduate
                programs are designed to provide a deeper understanding of the
                subject matter, with a focus on research and practical
                application. Cyprus international university is recognized for
                the quality of education offered, its state-of-the-art
                infrastructure, and its advanced research facilities which has
                earned the university accreditation of its academic programs
                from various bodies including “The Turkish Republic Higher
                Education Board (YÖK)” and “The Turkish Republic of Northern
                Cyprus Board of Higher Education Planning Accreditation and
                Coordination Board (YÖDAK)” amongst others and has become a
                member of many organizations to improve the quality of education
                it offers.
              </p>
            </div>
            <div className="w-full grid grid-cols-2 gap-10 mt-20 ">
              <div>
                {/* Asociate Degree Program  */}
                <div>
                  <h1 className="text-xl  text-color2 font-semibold my-3">
                    Associate Degree Programs
                  </h1>
                  <ul>
                    <li>Computer Technologies and Programming</li>
                    <li>Construction Technology</li>
                    <li>First and Emergency Aid</li>
                    <li>Public Relations and Advertising</li>
                    <li>Radio & Tv Programming</li>
                  </ul>
                </div>
                {/* Undergraduate Program  */}
                <div>
                  <h1 className="text-xl  text-color2 font-semibold my-3">
                    Undergraduate Programs
                  </h1>
                  <ul>
                    <li className="font-semibold text-md mb-2 text-color2">
                      Faculty of Agricultural Sciences & Technologies
                    </li>
                    <li>Plant Production and Technologies (BSc)</li>

                    <li className="font-semibold text-md mb-2 text-color2">
                      Faculty of Arts and Sciences
                    </li>
                    <li>Molecular Biology & Genetics (BSc)</li>
                    <li>Psychology (BA)</li>
                    <li>Translation and Interpretation (BA)</li>

                    <li className="font-semibold text-md mb-2 text-color2">
                      Faculty of Communication
                    </li>
                    <li>Advertising and Public Relations (BA)</li>
                    <li>Journalism (BA)</li>
                    <li>Radio and Television (BA)</li>
                    <li>Visual Communication Design (BA)</li>

                    <li className="font-semibold text-md mb-2 text-color2">
                      Faculty of Economics & Administrative Sciences
                    </li>
                    <li>Accounting and Finance (BSc)</li>
                    <li>Business Administration (BA)</li>
                    <li>International Relations (BA)</li>
                    <li>Digital Media and Marketing (BA)</li>
                    <li>Economics (BSc)</li>

                    <li className="font-semibold text-md mb-2 text-color2">
                      Faculty of Education
                    </li>
                    <li>English Language Teaching (BA)</li>
                    <li>
                      Computer and Instructional Technology Teaching Education
                      (BSc)
                    </li>
                    <li>Pre School Teaching (BA)</li>

                    <li className="font-semibold text-md mb-2 text-color2">
                      Faculty of Engineering
                    </li>
                    <li>Artificial Intelligence Engineering</li>
                    <li>Bioengineering (BSc)</li>
                    <li>Biomedical Engineering (BSc)</li>
                    <li>Civil Engineering (BSc)</li>
                    <li>Computer Engineering (BSc)</li>
                    <li>Electrical and Electronics Engineering (BSc)</li>
                  </ul>
                </div>
                {/* Master Program  */}
                <div>
                  <h1 className="text-xl  text-color2 font-semibold my-3">
                    Masters Programs
                  </h1>
                  <ul>
                    <li>Accounting and Finance (MSc/MAF)</li>
                    <li>Architecture (MArch)</li>
                    <li>Bioengineering (MSc)</li>
                    <li>Business Administration (MBA)</li>
                    <li>Business Administration* (Dual MBA program with EU)</li>
                    <li>Chemistry (MSc)</li>
                    <li>Civil Engineering (MSc)</li>
                    <li>Communication and Media Studies (MA)</li>
                    <li>Computer Engineering (MSc)</li>
                    <li>Economy (MSc)</li>
                    <li>Educational Administration and Planning (MA)</li>
                    <li>Electrical and Electronics Engineering (MSc)</li>
                    <li>Energy Systems Engineering (MSc)</li>
                    <li>Engineering Management (MSc)</li>
                    <li>English Language and Literature (MA)</li>
                    <li>English Language Teaching (MA)</li>
                    <li>Environmental Engineering (MSc)</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-xl  text-color2 font-semibold my-3">
                    Doctoral Programs (PhD)
                  </h1>
                  <ul>
                    <li>Architecture s</li>
                    <li>Bioengineering</li>
                    <li>Business Administration</li>
                    <li>Civil Engineering</li>
                    <li>Communication and Media Studies</li>
                    <li>Computer Engineering</li>
                    <li>Electrical and Electronics Engineering</li>
                    <li>Energy Systems Engineering</li>
                    <li>Health Care Organizations Management</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-xl  text-color2 font-semibold my-3">
                    Professional Doctorates (DBA)
                  </h1>
                  <ul>
                    <li>Business Administration</li>
                    <li>Health Care Organizations Management</li>
                  </ul>
                </div>
              </div>
              <div>
                <ul>
                  <li>Energy Systems Engineering (BSc)</li>
                  <li>Environmental Engineering (BSc)</li>
                  <li>Information Systems Engineering (BSc)</li>
                  <li>Management Engineering (BSc)</li>
                  <li>Mechanical Engineering (BSc)</li>
                  <li>Mechatronics Engineering (BSc)</li>
                  <li>Medical Engineering (BSc)</li>
                  <li>Petroleum & Natural Gas Engineering (BSc)</li>
                  <li>Software Engineering (BSc)</li>
                  <li>
                    <span className="font-semibold text-md mb-2 text-color2">
                      Faculty of Fine Arts, Design and Architecture
                    </span>
                  </li>
                  <li>Architecture (BA)</li>
                  <li>Graphic Design (BA)</li>
                  <li>Interior Design (BA)</li>
                  <li>
                    <span className="font-semibold text-md mb-2 text-color2">
                      Faculty of Health Sciences
                    </span>
                  </li>
                  <li>Midwifery</li>
                  <li>Nutrition and Dietetics</li>
                  <li>Nursing (BSc)</li>
                  <li>Social Work (BA)</li>
                  <li>Physiotherapy and Rehabilitation (BSc)</li>
                  <li>
                    <span className="font-semibold text-md mb-2 text-color2">
                      Faculty of Law
                    </span>
                  </li>
                  <li>International Law (LLB)</li>
                  <li>
                    <span className="font-semibold text-md mb-2 text-color2">
                      Faculty of Medicine
                    </span>
                  </li>
                  <li>Medicine</li>
                  <li>
                    <span className="font-semibold text-md mb-2 text-color2">
                      Faculty of Dentistry
                    </span>
                  </li>
                  <li>Dentistry (Dent)</li>
                  <li>
                    <span className="font-semibold text-md mb-2 text-color2">
                      Faculty of Pharmacy
                    </span>
                  </li>
                  <li>Pharmacy (MPharm)</li>
                  <li>Pharmacy (Pharm D.)</li>
                  <li>School of Applied Sciences</li>
                  <li>Information Technologies (BSc)</li>
                  <li>Information Security Technologies (BSc)</li>
                  <li>Management Information Systems (BSc)</li>
                  <li>Computer Technologies and Programming (Technician)</li>
                  <li>School of Tourism & Hotel Management</li>
                  <li>Tourism and Hotel Management (BA)</li>
                  <li>Gastronomy and Culinary Arts (BA)</li>
                  <li>Masters Programs</li>
                  <li>Accounting and Finance (MSc/MAF)</li>
                  <li>Architecture (MArch)</li>
                  <li>Bioengineering (MSc)</li>
                  <li>Business Administration(MBA)</li>
                  <li>Business Administration*(Dual MBA program with EU)</li>
                  <li>Chemistry (MSc)</li>
                  <li>Civil Engineering (MSc)</li>
                  <li>Communication and Media Studies (MA)</li>
                  <li>Computer Engineering (MSc)</li>
                  <li>Economy (MSc)</li>
                  <li>Educational Administration and Planning (MA)</li>
                  <li>Electrical and Electronics Engineering (MSc)</li>
                  <li>Energy Systems Engineering (MSc)</li>
                  <li>Engineering Management (MSc)</li>
                  <li>English Language and Literature (MA)</li>
                  <li>English Language Teaching (MA)</li>
                  <li>Environmental Engineering (MSc)</li>
                  <li>Graphic Design (MA)</li>
                  <li>Guidance and Psychological Counseling (MA)</li>
                  <li>Health Care Organizations Management (MA)</li>
                  <li>
                    Information and Communication Technologies in Education
                    (MSc)
                  </li>
                  <li>Information Systems Engineering (MSc)</li>
                  <li>Information Technologies (MSc)</li>
                  <li>Interior Architecture (MID)</li>
                  <li>Interior Design (MID)</li>
                  <li>International Banking and Finance (MA)</li>
                  <li>International Law (LLM)</li>
                  <li>International Relations (MA)</li>
                  <li>Management Information Systems (MSc)</li>
                  <li>Marketing Management (MSc)</li>
                  <li>Mechanical Engineering (MSc)</li>
                  <li>Pharmacognosy (MSc)</li>
                  <li>Plant Sciences and Technologies (MSc)</li>
                  <li>Social Work</li>
                  <li>Tourism and Hospitality Management (MA)</li>
                  <li>Doctoral Programs (PhD)</li>
                  <li>Architecture</li>
                  <li>Bioengineering</li>
                  <li>Business Administration</li>
                  <li>Civil Engineering</li>
                  <li>Communication and Media Studies</li>
                  <li>Computer Engineering</li>
                  <li>Electrical and Electronics Engineering</li>
                  <li>Energy Systems Engineering</li>
                  <li>Health Care Organizations Management</li>
                  <li>English Language Teaching</li>
                  <li>Environmental Engineering</li>
                  <li>Environmental Sciences</li>
                  <li>International Relations</li>
                  <li>Management Information Systems</li>
                  <li>Pharmaceutical Sciences</li>
                  <li>Tourism Management</li>
                  <li>Professional Doctorates (DBA)</li>
                  <li>Business Administration</li>
                </ul>
              </div>
            </div>
        
            <div className="p-2 flex flex-col sm:flex-row sm:justify-between gap-4  mt-20">
              <Link to="/">
                <h1 className="text-2xl mb-3 hover:underline text-color2 font-semibold ">
                  Check This Out
                </h1>
              </Link>
              <Link to="/">
                <h1 className="text-2xl mb-3 hover:underline text-color2 font-semibold">
                  Research Opportunities
                </h1>
              </Link>
              <Link to="/">
                <h1 className="text-2xl mb-3 hover:underline text-color2 font-semibold ">Campus Life</h1>
              </Link>
            </div>
            <div className="px-2 py-4 mt-20">
              <h1 className="text-2xl mb-3 text-color2 font-semibold">OTHER UNIVERSITES</h1>
              <ul className="grid grid-cols-4 gap-2">
                <Link>
                  <li>Near East University</li>
                </Link>
                <Link>
                  <li>Eastern Mediterranean University</li>
                </Link>
                <Link>
                  <li>Kyrenia University</li>
                </Link>
                <Link>
                  <li>Bahçeşehir Cyprus University</li>
                </Link>
                <Link>
                  <li>Final International University</li>
                </Link>
                <Link>
                  <li>Cyprus Science University</li>
                </Link>
                <Link>
                  <li>European University of Lefke</li>
                </Link>
                <Link>
                  <li>Rauf Denktas University</li>
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
