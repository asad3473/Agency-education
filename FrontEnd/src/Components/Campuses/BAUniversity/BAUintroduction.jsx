import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";
import { useAuth } from "../../../contextApi/contextApi";

export default function BAUintroduction() {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  return (
    <div className={`w-full mx-auto sm:w-11/12 p-3`} dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-[65%]">
          <p className="text-md text-justify">
            {isArabic
              ? "بدأت جامعة بهتشه شهير قبرص (BAU Cyprus) التعليم في العام الأكاديمي 2017-2018 وتقع في نيقوسيا، عاصمة البلاد. جامعة BAU Cyprus معترف بها رسميًا من قبل مجلس التعليم العالي التركي (YOK) في تركيا، بينما جميع البرامج معتمدة من التعليم الوطني ولجنة الاعتماد للتعليم العالي (YODAK) في جمهورية شمال قبرص التركية."
              : "Bahçeşehir Cyprus University (BAU Cyprus) initiated education in the 2017-2018 academic year and is located in Nicosia, the capital city. BAU Cyprus is officially recognised by the Turkish Higher Education Council (YOK) in Turkey, while all the programmes are accredited by the National Education and the Higher Education Accreditation Commission (YODAK) of the Turkish Republic of Northern Cyprus."}
          </p>

          <p className="mt-2 text-md text-justify">
            {isArabic
              ? "تعد جامعة BAU Cyprus عضوًا في شبكة التعليم العالمية BAU Global Education Network، وتشمل عدة جامعات مثل جامعة بهتشه شهير – اسطنبول (تركيا)، جامعة باي أتلانتيك – واشنطن (الولايات المتحدة)، الجامعة الدولية التطبيقية في برلين – برلين (ألمانيا)، جامعة BAU الدولية في باتومي – باتومي (جورجيا)، وجامعة بهتشه شهير قبرص، نيقوسيا، التي تقوم بتعليم الطلاب من جميع أنحاء العالم في برامج البكالوريوس والدراسات العليا المختلفة."
              : "BAU Cyprus is a member of the BAU Global Education Network, and comprises several universities like Bahçeşehir University – Istanbul (Turkey), Bay Atlantic University – Washington (USA), Berlin International University of Applied Sciences – Berlin (GERMANY), BAU International University Batumi – Batumi (Georgia), and Bahçeşehir Cyprus University, Nicosia, which educate students from around the world in different undergraduate and graduate programmes."}
          </p>

          <p className="mt-2 text-md text-justify">
            {isArabic
              ? "تهدف جامعة BAU Cyprus إلى توفير الفرصة للطلاب للاستفادة من الوسائل الأكاديمية ذات المستوى المتساوي الموجودة في قارات وبلدان مختلفة والحصول على التعليم في حُرُم جامعية مختلفة لتمكينهم من امتلاك رؤية دولية."
              : "BAU Cyprus aims at providing opportunity for students to benefit from academic means having an equal level located in different continents and countries and getting education on different campuses to enable them to have an international vision."}
          </p>

          <div className="mt-4 w-full mb-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KItGnLjdI9Q?si=1QEKb5CDPn7B2caS"
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
                {isArabic ? "جامعات أخرى" : "Another Universities"}
              </h1>
              <hr className="h-1 bg-[#F5891B] w-8 border-none" />
            </div>
          </div>

          <div className="p-4">
            <ol className="space-y-3">
              <Link to="/Cyprus-International-University" className="flex items-center gap-2">
                <GiConvergenceTarget />
                <li>{isArabic ? "جامعة قبرص الدولية" : "Cyprus International University"}</li>
              </Link>
              <Link to="/Near-East-University" className="flex items-center gap-2">
                <GiConvergenceTarget />
                <li>{isArabic ? "جامعة الشرق الأدنى" : "Near East University"}</li>
              </Link>
              <Link to="/Eastern-Mediterranean-University" className="flex items-center gap-2">
                <GiConvergenceTarget />
                <li>{isArabic ? "جامعة البحر الأبيض المتوسط الشرقية" : "Eastern Mediterranean University"}</li>
              </Link>
              <Link to="/Kyrenia-University" className="flex items-center gap-2">
                <GiConvergenceTarget />
                <li>{isArabic ? "جامعة كيرينيا" : "Kyrenia University"}</li>
              </Link>
              <Link to="/Bahcesehir-Cyprus-University" className="flex items-center gap-2">
                <GiConvergenceTarget />
                <li>{isArabic ? "جامعة بهتشه شهير قبرص" : "Bahcesehir Cyprus University"}</li>
              </Link>
              <Link to="/Final-International-University" className="flex items-center gap-2">
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
