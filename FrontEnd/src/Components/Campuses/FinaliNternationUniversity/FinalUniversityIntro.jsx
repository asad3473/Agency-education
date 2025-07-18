import { Link } from "react-router-dom";
import { GiConvergenceTarget } from "react-icons/gi";
import { useAuth } from "../../../contextApi/contextApi";

export default function FinalUniversityIntro() {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  return (
    <div className="w-full mx-auto sm:w-11/12 p-3" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-[65%]">
          <p className="text-md text-justify">
            {isArabic
              ? "عن جامعة فاينال الدولية توفر جامعة فاينال الدولية (FIU) للطلاب الفرص والدعم الذي يستحقونه من جامعتهم! عند انضمامك إلى عائلة جامعة فاينال الدولية، سيقوم طاقمنا الأكاديمي المؤهل تأهيلاً عالياً برعاية مسارك نحو النجاح المهني داخل مجتمع جامعي يضعك دائمًا في المقام الأول!"
              : "About Final International University Final International University (FIU) provides students with the opportunities and support they deserve from your university! When you join the Final International University (FIU) family, our highly qualified academic staff will carefully nurture your path to professional success and a university community that always puts you first!"}
          </p>

          <p className="mt-2 text-md text-justify">
            {isArabic
              ? "FIU هي جامعة شابة ومبتكرة. تأسست في عام 2015، وتهدف جامعة فاينال الدولية إلى تقديم تعليم عالي الجودة معترف به دوليًا، يتم تقديمه من خلال أساليب تدريس مبتكرة لإعدادك لسوق العمل وجعلك قائدًا مستقبليًا في مهنتك المختارة!"
              : "FIU is a young and innovative university. Founded in 2015, Final International University (FIU) aims to provide an internationally recognized education of the highest quality, delivered through innovative teaching methods to prepare you for the job market and make you a future leader in your chosen profession!"}
          </p>

          <p className="mt-2 text-md text-justify">
            {isArabic
              ? "بفضل شبكتها العالمية من الشراكات وهيكل المنح الدراسية الفريد الذي يوفر وصولًا ماليًا للطلاب حول العالم، تمتلك FIU كل ما تحتاجه."
              : "With its global network of partnerships and a unique scholarship structure that provides financial access to students around the world, FIU has everything you need."}
          </p>

          <div className="mt-4 w-full mb-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dwVuqkGdBYU?si=0QZtPlbAXLPRJAnW"
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
                <li>{isArabic ? "جامعة شرق البحر الأبيض المتوسط" : "Eastern Mediterranean University"}</li>
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
