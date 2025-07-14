import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";
import { useAuth } from "../../../contextApi/contextApi";

export default function EastIntroduction() {
  const { language } = useAuth();
  const isArabic = language === "ar";

  return (
    <div className={`w-full mx-auto sm:w-11/12 p-3 ${isArabic ? "rtl" : ""}`}>
      <div className="flex flex-wrap justify-between gap-6">
        {/* Main Content */}
        <div className={`w-full sm:w-[65%] ${isArabic ? "text-right" : "text-left"}`}>
          <p className="text-md leading-relaxed">
            {isArabic
              ? "تأسست جامعة الشرق الأدنى في عام 1988، وهي مؤسسة تعليمية مرموقة تقع في شمال قبرص. تشتهر الجامعة بالتفوق الأكاديمي، والابتكار، والبحث العلمي، والانفتاح العالمي. تقدم مجموعة واسعة من برامج البكالوريوس والماجستير والدكتوراه، وتوفر فرص تعليمية لأكثر من 26 ألف طالب من أكثر من 100 دولة."
              : "Near East University, established in 1988 is a premier institution of higher learning located in Northern Cyprus. This university is renowned for its commitment to academic excellence, innovation, research, and global outreach. It offers a wide range of undergraduate, graduate, and doctoral programs in various fields of study extensive undergraduate and postgraduate education opportunities to over 26 thousand students coming from over 100 countries."}
          </p>

          <p className="mt-2 text-md leading-relaxed">
            {isArabic
              ? "تضم جامعة الشرق الأدنى 20 كلية تشمل 220 قسماً وبرنامجاً، و8 كليات للدراسات العليا بحوالي 218 برنامج دراسات عليا، بالإضافة إلى 3 مدارس ثانوية و28 معهداً بحثياً."
              : "The Near East University has 20 faculties comprising 220 departments and programs, 8 graduate schools with around 218 graduate and postgraduate programs, and 3 high schools, 28 research institutes."}
          </p>

          <p className="mt-2 text-md leading-relaxed">
            {isArabic
              ? "حصلت الجامعة على الاعتماد من مجلس التعليم العالي في جمهورية تركيا (YÖK) ومجلس اعتماد وتخطيط التعليم العالي في جمهورية شمال قبرص التركية (YÖDAK)، مما يمنحها اعترافًا عالميًا كمؤهل أكاديمي."
              : "The university has received accreditation from The Turkish Republic Higher Education Board (YÖK)” and “The Turkish Republic of Northern Cyprus Board of Higher Education Planning Accreditation and Coordination Board (YÖDAK)” which has acceptance globally as academic qualification."}
          </p>

          {/* YouTube Embed */}
          <div className="mt-4 w-full mb-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/PhK_tioBixo?si=A6JYdT-ye_iIAd6j"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
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
