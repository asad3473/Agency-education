import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";
import { useAuth } from "../../../contextApi/contextApi";

export default function CyprusIntroduction() {
  const { language } = useAuth();
  const isArabic = language === "ar";

  return (
    <div className={`w-full mx-auto sm:w-11/12 p-3 ${isArabic ? 'rtl text-right' : 'ltr text-left'}`}>
      <div className="flex flex-wrap justify-between gap-6">
        {/* Main Content */}
        <div className="w-full sm:w-[65%] bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-[#0A0851] mb-4">
            {isArabic
              ? "حول جامعة قبرص الدولية"
              : "About Cyprus International University"}
          </h1>

          <div className="space-y-4 text-gray-700">
            <p className="text-md text-justify leading-relaxed">
              {isArabic
                ? "تأسست جامعة قبرص الدولية (CIU) في عام 1997، وهي جامعة خاصة تعتمد اللغة الإنجليزية وتقع بالقرب من نيقوسيا الشمالية، عاصمة شمال قبرص. بدأت الجامعة بـ 81 طالبًا و45 موظفًا فقط، ونمت لتضم حوالي 14,000 إلى 18,000 طالب من أكثر من 110 دولة. تضم الجامعة 12 كلية و8 مدارس، وتقدم حوالي 62 برنامجًا جامعيًا و94 برنامجًا للدراسات العليا في مجالات مثل العلوم الصحية والهندسة والأعمال والقانون."
                : "Founded in 1997, CIU is a private, English language university located near North Nicosia, the capital of Northern Cyprus. It began with just 81 students and 45 staff, and has since grown to accommodate around 14,000-18,000 students from over 110 countries. CIU is organized into 12 faculties, 8 schools, and hosts around 62 undergraduate and 94 postgraduate programs, spanning fields like health sciences, engineering, business and law."}
            </p>

            <p className="text-md text-justify leading-relaxed">
              {isArabic
                ? "الجامعة معترف بها من قبل YÖDAK (قبرص الشمالية)، وYÖK (تركيا)، والعديد من الهيئات الدولية الأخرى. تضم الجامعة مرافق حديثة مثل مجمع رياضي، مسبح داخلي، ملاعب اسكواش، صالة ألعاب رياضية، محطة إذاعية (CIU FM107.2)، مكتبة، مقاهي، مساكن طلابية، والعديد من الأندية الطلابية. كما تدعم الجامعة الاستدامة من خلال استخدام الطاقة المتجددة بنسبة 30% تقريبًا، وتقليل استخدام البلاستيك بنسبة 80%، وتحتل المرتبة 64 عالميًا في مؤشر UI GreenMetric."
                : "The university is accredited by YÖDAK (Northern Cyprus), YÖK (Turkey), and various international bodies. It offers modern campus amenities from a sports complex with indoor swimming pool, squash courts, and gym, to a radio station (CIU FM107.2), numerous clubs, cafés, a library, and on campus dormitories. CIU actively supports sustainability efforts utilizing renewable energy for around 30% of its electricity, reducing plastic use by 80%, and ranking 64th globally in the UI GreenMetric sustainability index."}
            </p>

            <p className="text-md text-justify leading-relaxed">
              {isArabic
                ? "تُشجع الجامعة أيضًا على التعلم التجريبي من خلال برنامج تطوير مهارات العمل والحياة بالتعاون مع علامات تجارية مثل NovaBank وK‑Pet، بالإضافة إلى أنشطة لا منهجية واسعة تضم أكثر من 30 جمعية طلابية، و50 ناديًا، وأكثر من 200 فعالية سنويًا."
                : "Furthermore, the university encourages experiential learning, offering a Work & Life Skills Development program in collaboration with brands like NovaBank and K‑Pet, along with extensive extracurricular activities 30+ student societies, 50+ clubs, and 200+ annual events."}
            </p>
          </div>

          <div className="mt-6 w-full rounded-xl overflow-hidden shadow-lg">
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

        {/* Sidebar */}
        <div className="w-full sm:w-[30%] h-96 bg-white rounded-xl shadow-xl border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#0A0851] to-[#1A3D8F] p-4">
            <div className="flex items-center justify-center">
              <hr className="h-1 bg-[#F5891B] w-8 border-none" />
              <h1 className="px-3 text-lg font-bold text-white whitespace-nowrap">
                {isArabic ? "جامعات أخرى" : "Another Universities"}
              </h1>
              <hr className="h-1 bg-[#F5891B] w-8 border-none" />
            </div>
          </div>

          <div className="p-4">
            <ol className="space-y-3">
              <Link to="/Cyprus-International-University" className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <GiConvergenceTarget />
                <li>{isArabic ? "جامعة قبرص الدولية" : "Cyprus International University"}</li>
              </Link>
              <Link to="/Near-East-University" className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <GiConvergenceTarget />
                <li>{isArabic ? "جامعة الشرق الأدنى" : "Near East University"}</li>
              </Link>
              <Link to="/Eastern-Mediterranean-University" className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <GiConvergenceTarget />
                <li>{isArabic ? "جامعة شرق البحر المتوسط" : "Eastern Mediterranean University"}</li>
              </Link>
              <Link to="/Kyrenia-University" className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <GiConvergenceTarget />
                <li>{isArabic ? "جامعة كيرينيا" : "Kyrenia University"}</li>
              </Link>
              <Link to="/Bahcesehir-Cyprus-University" className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <GiConvergenceTarget />
                <li>{isArabic ? "جامعة بهجيشهير قبرص" : "Bahcesehir Cyprus University"}</li>
              </Link>
              <Link to="/Final-International-University" className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <GiConvergenceTarget />
                <li>{isArabic ? "جامعة فاينال الدولية" : "Final International University"}</li>
              </Link>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
}
