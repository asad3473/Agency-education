import  { useState, useEffect } from 'react';

export const HomeHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/Homeimages/homeheader/un2.jpg",
      title: "Nearby: Qatar University, a leading educational institution known for academic excellence and innovation."
    },
    {
      image: "/Homeimages/homeheader/uni.jpg",
      title: "Close to Qatar University, offering a vibrant campus life and high-quality education in the heart of Doha."
    },
    {
      image: "/Homeimages/homeheader/clas.png",
      title: "Enjoy proximity to Qatar University – a hub for research, culture, and student diversity."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden shadow-xl">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute h-full bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white  flex flex-col items-center justify-center text-center p-8 pt-16">
            <h2 className={`text-4xl  w-8/12 font-semibold mb-4 transition-all duration-500 ease-out ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: index === currentSlide ? '300ms' : '0ms' }}>
              {slide.title}
            </h2>
            <p className={`text-xl transition-all duration-500 ease-out ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: index === currentSlide ? '500ms' : '0ms' }}>
              {slide.description}
            </p>
          </div>
        </div>
      ))}
      
      <button 
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white/30 text-white text-2xl p-4 cursor-pointer transition-all duration-300 hover:bg-white/50 z-10"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button 
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white/30 text-white text-2xl p-4 cursor-pointer transition-all duration-300 hover:bg-white/50 z-10"
        onClick={nextSlide}
      >
        &#10095;
      </button>
      
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex z-10">
        {slides.map((_, index) => (
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