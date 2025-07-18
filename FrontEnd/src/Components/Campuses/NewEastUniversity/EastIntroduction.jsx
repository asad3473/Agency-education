import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";
import { useAuth } from "../../../contextApi/contextApi";

export default function EastIntroduction() {
  const { language } = useAuth();
  const isArabic = language === "ar";

  const content = {
    paragraphs: [
      {
        en: "Near East University, established in 1988 is a premier institution of higher learning located in Northern Cyprus. This university is renowned for its commitment to academic excellence, innovation, research, and global outreach. It offers a wide range of undergraduate, graduate, and doctoral programs in various fields of study extensive undergraduate and postgraduate education opportunities to over 26 thousand students coming from over 100 countries.",
        ar: "تأسست جامعة الشرق الأدنى في عام 1988، وهي مؤسسة تعليمية مرموقة تقع في شمال قبرص. تشتهر الجامعة بالتفوق الأكاديمي، والابتكار، والبحث العلمي، والانفتاح العالمي. تقدم مجموعة واسعة من برامج البكالوريوس والماجستير والدكتوراه، وتوفر فرص تعليمية لأكثر من 26 ألف طالب من أكثر من 100 دولة."
      },
      {
        en: "The Near East University has 20 faculties comprising 220 departments and programs, 8 graduate schools with around 218 graduate and postgraduate programs, and 3 high schools, 28 research institutes.",
        ar: "تضم جامعة الشرق الأدنى 20 كلية تشمل 220 قسماً وبرنامجاً، و8 كليات للدراسات العليا بحوالي 218 برنامج دراسات عليا، بالإضافة إلى 3 مدارس ثانوية و28 معهداً بحثياً."
      },
      {
        en: "The university has received accreditation from The Turkish Republic Higher Education Board (YÖK)” and “The Turkish Republic of Northern Cyprus Board of Higher Education Planning Accreditation and Coordination Board (YÖDAK)” which has acceptance globally as academic qualification.",
        ar: "حصلت الجامعة على الاعتماد من مجلس التعليم العالي في جمهورية تركيا (YÖK) ومجلس اعتماد وتخطيط التعليم العالي في جمهورية شمال قبرص التركية (YÖDAK)، مما يمنحها اعترافًا عالميًا كمؤهل أكاديمي."
      }
    ],
    universities: {
      title: {
        en: "Other Universities",
        ar: "جامعات أخرى"
      },
      list: [
        {
          en: "Cyprus International University",
          ar: "الجامعة القبرصية الدولية"
        },
        {
          en: "Near East University",
          ar: "جامعة الشرق الأدنى"
        },
        {
          en: "Eastern Mediterranean University",
          ar: "جامعة شرق المتوسط"
        },
        {
          en: "Kyrenia University",
          ar: "جامعة كيرينيا"
        },
        {
          en: "Bahcesehir Cyprus University",
          ar: "جامعة بهشة شهير قبرص"
        },
        {
          en: "Final International University",
          ar: "الجامعة الدولية النهائية"
        }
      ]
    }
  };

  return (
    <div className={`w-full mx-auto sm:w-11/12 p-3 ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
      {/* Main Flex Container: sidebar position changes here */}
      <div className={`flex flex-col sm:flex-row ${isArabic ? "flex-row" : "flex-row-reverse"} gap-6`}>
        
        {/* Sidebar */}
        <div className="w-full sm:w-[30%] h-96 bg-white rounded-xl shadow-xl border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#0A0851] to-[#1A3D8F] p-4">
            <div className="flex items-center justify-center">
              <hr className="h-1 bg-[#F5891B] w-8 border-none" />
              <h1 className="px-3 text-lg font-bold text-white whitespace-nowrap">
                {content.universities.title[language]}
              </h1>
              <hr className="h-1 bg-[#F5891B] w-8 border-none" />
            </div>
          </div>

          <div className={`p-4 ${isArabic ? "text-right" : "text-left"}`}>
            <ol className="space-y-3">
              {content.universities.list.map((university, index) => {
                const path = [
                  "/Cyprus-International-University",
                  "/Near-East-University",
                  "/Eastern-Mediterranean-University",
                  "/Kyrenia-University",
                  "/Bahcesehir-Cyprus-University",
                  "/Final-International-University"
                ][index];

                return (
                  <Link
                    key={index}
                    to={path}
                    className={`flex items-center gap-2 hover:text-[#F5891B] transition-all duration-200 ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <GiConvergenceTarget />
                    <li>{university[language]}</li>
                  </Link>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full sm:w-[65%]">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-md leading-relaxed mt-2 first:mt-0">
              {paragraph[language]}
            </p>
          ))}

          {/* YouTube Video */}
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
      </div>
    </div>
  );
}
