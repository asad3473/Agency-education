import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuth } from "../../contextApi/contextApi";

const ReviewsSection = () => {
  const { language } = useAuth();
  const isArabic = language === 'ar';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      name: isArabic ? "نور المنصوري" : "Noor Al-Mansoori",
      university: isArabic ? "جامعة قطر" : "Qatar University",
      program: isArabic ? "الهندسة" : "Engineering",
      rating: 5,
      review: isArabic
        ? "بصفتي طالبة قطرية، ساعدني ستادي جيستس في التنقل بين الخيارات المحلية والدولية قبل أن أختار جامعة قطر. معرفتهم بنظام التعليم في قطر لا مثيل لها!"
        : "As a Qatari student, Study Gists helped me navigate both local and international options before I chose QU. Their knowledge of Qatar's education system is unmatched!",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      flag: "🇶🇦",
    },
    {
      name: isArabic ? "أحمد حسن" : "Ahmed Hassan",
      university: isArabic ? "جامعة تكساس إيه آند إم قطر" : "Texas A&M Qatar",
      program: isArabic ? "هندسة البترول" : "Petroleum Engineering",
      rating: 5,
      review: isArabic
        ? "كان الانتقال من مدرستي الثانوية في الدوحة إلى جامعة تكساس إيه آند إم سلسًا بفضل برنامج التوجيه وجهات الاتصال المحلية."
        : "The transition from my high school in Doha to Texas A&M was seamless thanks to their orientation program and local contacts.",
      photo: "https://randomuser.me/api/portraits/men/22.jpg",
      flag: "🇶🇦",
    },
    {
      name: isArabic ? "فاطمة الكواري" : "Fatima Al-Kuwari",
      university: isArabic ? "جامعة جورجتاون قطر" : "Georgetown Qatar",
      program: isArabic ? "العلاقات الدولية" : "International Relations",
      rating: 4,
      review: isArabic
        ? "كان مستشارو المنح الدراسية لديهم على دراية تامة بفرص التمويل المتاحة للمواطنين القطريين في جامعات المدينة التعليمية."
        : "Their scholarship advisors knew exactly which funding opportunities were available for Qatari nationals at Education City universities.",
      photo: "https://randomuser.me/api/portraits/women/72.jpg",
      flag: "🇶🇦",
    },
    {
      name: isArabic ? "محمد السليطي" : "Mohammed Al-Sulaiti",
      university: isArabic ? "جامعة كارنيجي ميلون قطر" : "Carnegie Mellon Qatar",
      program: isArabic ? "علوم الحاسوب" : "Computer Science",
      rating: 5,
      review: isArabic
        ? "تم قبولي في جامعة كارنيجي ميلون قطر بمساعدتهم! فهمهم لعملية القبول التنافسية في مؤسسات المدينة التعليمية رائع."
        : "Got into CMU Qatar with their help! They understand the competitive admission process at Education City institutions.",
      photo: "https://randomuser.me/api/portraits/men/41.jpg",
      flag: "🇶🇦",
    },
    {
      name: isArabic ? "عائشة آل ثاني" : "Aisha Al-Thani",
      university: isArabic ? "جامعة نورثويسترن قطر" : "Northwestern Qatar",
      program: isArabic ? "الصحافة" : "Journalism",
      rating: 4,
      review: isArabic
        ? "كانت ورش العمل الخاصة بهم حول كتابة البيان الشخصي حاسمة لقبولي الناجح في جامعة نورثويسترن قطر."
        : "Their workshops on personal statement writing were crucial for my successful application to NU-Q.",
      photo: "https://randomuser.me/api/portraits/women/85.jpg",
      flag: "🇶🇦",
    }
  ];

  return (
    <div className="bg-gray-50 mb-10 px-4">
      <div className={`max-w-6xl mx-auto ${isArabic ? "rtl text-right" : "ltr text-left"}`}>
        <h2 className="text-3xl font-bold text-center mb-4">
          {isArabic ? "قصص نجاح الطلاب" : "Student Success Stories"}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          {isArabic
            ? "استمع إلى تجارب الطلاب الذين حققوا أحلامهم الأكاديمية بدعمنا"
            : "Hear from students who achieved their academic dreams with our support"}
        </p>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-2 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md shadow-[#0A0851] h-[260px] flex flex-col justify-between">
                <div>
                  <div className={`flex items-center mb-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <img
                      src={review.photo}
                      alt={review.name}
                      className={`w-12 h-12 rounded-full object-cover ${isArabic ? "ml-4" : "mr-4"}`}
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-gray-600">
                        {review.program} {isArabic ? "في" : "at"} {review.university}
                      </p>
                    </div>
                  </div>

                  <div className={`flex mb-3 ${isArabic ? "justify-end" : ""}`}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>

                  <FaQuoteLeft
                    className={`text-gray-300 text-xl mb-2 ${isArabic ? "ml-auto" : ""}`}
                  />
                  <p className="text-gray-700 italic min-h-[120px] overflow-hidden">
                    {review.review.length > 230
                      ? review.review.slice(0, 230) + "..."
                      : review.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewsSection;
