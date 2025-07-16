import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";
import { useAuth } from "../../../contextApi/contextApi";

export default function KyreniaINtroduc() {
  const { language } = useAuth();

  return (
    <div className="w-full mx-auto sm:w-11/12 p-3">
      <div className="flex flex-wrap justify-between">
        {/* Main Content */}
        <div className="w-full sm:w-[65%]">
          <p
            className={`text-md mt-2 ${
              language === "ar" ? "text-right" : "text-justify"
            }`}
          >
            {language === "ar"
              ? "تقع جامعة كيرينيا في واحدة من أجمل المدن التاريخية في قبرص، وتُعد مؤسسة مرموقة للتعليم العالي. تأسست بهدف إعداد باحثين ناقدين ومبدعين يركزون على البحث، يخلقون المعرفة والقيمة في بيئة تعليمية دولية، ويطورون تقديراً للقيم الأخلاقية والاجتماعية مع الشعور بالمسؤولية المجتمعية."
              : "University of Kyrenia is a prestigious higher education institution located in Kyrenia, one of the most beautiful and historic cities in Cyprus which is founded on the mission of “training critical and innovative research-focused scholars, who will create knowledge and value in an international educational background and who will develop an appreciation of ethical and moral values, with a sense of social responsibility”."}
          </p>

          <p
            className={`text-md mt-2 ${
              language === "ar" ? "text-right" : "text-justify"
            }`}
          >
            {language === "ar"
              ? "ترجع جذور الجامعة إلى تأسيس أول كلية للدراسات البحرية في قبرص في جامعة الشرق الأدنى الشقيقة عام 1978، مما يمنح الجامعة أكثر من 35 سنة من الخبرة في هذا المجال. الجامعة معترف بها من قبل وزارة التربية والتعليم في جمهورية شمال قبرص التركية (TRNC) وحصلت على الاعتماد من مجلس التخطيط والتقييم والاعتماد والتنسيق للتعليم العالي (YODAK)، وكذلك من مجلس التعليم العالي في تركيا (YOK)."
              : "The roots of the University lie in the establishment of the first Maritime Studies Faculty in Cyprus at our sister university, Near East University, in 1978, and this history gives us thirty-five years of expertise in the field. The University has the approval of the TRNC’s Ministry of National Education and received its accreditation from the Higher Education Planning, Evaluation Accreditation and Coordination Council (YODAK). The university also has been accreditation approval from Turkey’s Council of Higher Education (YOK)."}
          </p>

          <p
            className={`text-md mt-2 ${
              language === "ar" ? "text-right" : "text-justify"
            }`}
          >
            {language === "ar"
              ? "تشمل كليات جامعة كيرينيا: الدراسات البحرية؛ إدارة الأعمال البحرية؛ علوم البحار؛ النقل والإدارة البحرية؛ كلية الطيران وعلوم الفضاء؛ إدارة الطيران (إدارة النقل الجوي المدني)؛ تدريب الطيارين المحترفين؛ بالإضافة إلى كليات التربية، القانون، الاقتصاد والعلوم الإدارية، العمارة، الهندسة، العلوم الصحية والطب. تقدم الجامعة 14 كلية، أكاديمية واحدة، مدرستين مهنيتين، 4 برامج دراسات عليا، و45 برنامجًا أكاديميًا."
              : "Faculties of Maritime Studies; Maritime Management and Administration, and Marine Sciences, Marine Transportation and Management, Faculty of Aviation and Space Sciences, to offer undergraduate degree programs in the Departments of Civil Air Logistics; Aviation Management (Civil Air Transport Management), and Professional Pilot Training (Pilotage). Education; Law; Economics and Administrative Sciences; Architecture; Engineering; Health Sciences and Medicine are other faculties also provided to students by the University Kyrenia. Our university has a total of 14 Faculties, 1 Academy, 2 Vocational Schools, 4 Postgraduate programs and 45 programs."}
          </p>

          <p
            className={`text-md mt-2 ${
              language === "ar" ? "text-right" : "text-justify"
            }`}
          >
            {language === "ar"
              ? "تُعرف جامعة كيرينيا بنهجها الدولي، حيث تجذب الطلاب من خلفيات وثقافات متنوعة، مما يثري تجربة التعلم ويخلق بيئة شاملة وعالمية داخل الحرم الجامعي."
              : "University of Kyrenia is recognized for its international approach, attracting students from diverse backgrounds and cultures. This diversity enriches the learning experience, creating an inclusive and global environment on campus."}
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
                {language === "ar"
                  ? "جامعات أخرى"
                  : "Another Universities"}
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
                <li>
                  {language === "ar"
                    ? "جامعة قبرص الدولية"
                    : "Cyprus International University"}
                </li>
              </Link>
              <Link to="/Near-East-University" className="flex items-center gap-2">
                <GiConvergenceTarget />
                <li>
                  {language === "ar"
                    ? "جامعة الشرق الأدنى"
                    : "Near East University"}
                </li>
              </Link>
              <Link
                to="/Eastern-Mediterranean-University"
                className="flex items-center gap-2"
              >
                <GiConvergenceTarget />
                <li>
                  {language === "ar"
                    ? "جامعة شرق البحر المتوسط"
                    : "Eastern Mediterranean University"}
                </li>
              </Link>
              <Link
                to="/Kyrenia-University"
                className="flex items-center gap-2"
              >
                <GiConvergenceTarget />
                <li>
                  {language === "ar" ? "جامعة كيرينيا" : "Kyrenia University"}
                </li>
              </Link>
              <Link
                to="/Bahcesehir-Cyprus-University"
                className="flex items-center gap-2"
              >
                <GiConvergenceTarget />
                <li>
                  {language === "ar"
                    ? "جامعة بهشة شهير قبرص"
                    : "Bahcesehir Cyprus University"}
                </li>
              </Link>
              <Link
                to="/Final-International-University"
                className="flex items-center gap-2"
              >
                <GiConvergenceTarget />
                <li>
                  {language === "ar"
                    ? "جامعة فينال الدولية"
                    : "Final International University"}
                </li>
              </Link>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
