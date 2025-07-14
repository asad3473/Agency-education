import { useState, useEffect } from 'react';
import { useAuth } from '../../contextApi/contextApi';

export const HomeHeader = () => {
  const { language } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = {
    en: [
      {
        image: "/Homeimages/homeheader/un2.jpg",
        title: "Nearby: Qatar University, a leading educational institution known for academic excellence and innovation.",
      },
      {
        image: "/Homeimages/homeheader/uni.jpg",
        title: "Close to Qatar University, offering a vibrant campus life and high-quality education in the heart of Doha.",
      },
      {
        image: "/Homeimages/homeheader/clas.png",
        title: "Enjoy proximity to Qatar University – a hub for research, culture, and student diversity.",
      }
    ],
    ar: [
      {
        image: "/Homeimages/homeheader/un2.jpg",
        title: "بالقرب من جامعة قطر، وهي مؤسسة تعليمية رائدة معروفة بالتميز الأكاديمي والابتكار.",
      },
      {
        image: "/Homeimages/homeheader/uni.jpg",
        title: "قريب من جامعة قطر، مع حياة جامعية نابضة بالتنوع وتعليم عالي الجودة في قلب الدوحة.",
      },
      {
        image: "/Homeimages/homeheader/clas.png",
        title: "استمتع بالقرب من جامعة قطر - مركز للبحث والثقافة وتنوع الطلاب.",
      }
    ]
  };

  const currentSlides = slides[language] || slides.en;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === currentSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? currentSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlides]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden shadow-xl" dir={language === "ar" ? "rtl" : "ltr"}>
      {currentSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-orange-400/80 to-blue-900/90"></div>
          <div className="absolute h-full bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white flex flex-col items-center justify-center text-center p-8 pt-16">
            <h2 className={`text-2xl sm:text-4xl w-full sm:w-8/12 font-semibold mb-4 transition-all duration-500 ease-out ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: index === currentSlide ? '300ms' : '0ms' }}>
              {slide.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Prev & Next Buttons */}
      <button
        className="absolute top-1/2 sm:flex hidden left-5 transform -translate-y-1/2 bg-white/30 text-white text-2xl p-4 cursor-pointer transition-all duration-300 hover:bg-white/50 z-10"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute sm:flex hidden top-1/2 right-5 transform -translate-y-1/2 bg-white/30 text-white text-2xl p-4 cursor-pointer transition-all duration-300 hover:bg-white/50 z-10"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex z-10">
        {currentSlides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomeHeader;
