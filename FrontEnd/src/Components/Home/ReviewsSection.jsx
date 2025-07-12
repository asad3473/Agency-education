import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsSection = () => {
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

   const reviews = [
    {
      name: "Noor Al-Mansoori",
      university: "Qatar University",
      program: "Engineering",
      rating: 5,
      review: "As a Qatari student, Study Gists helped me navigate both local and international options before I chose QU. Their knowledge of Qatar's education system is unmatched!",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      flag: "🇶🇦"
    },
    {
      name: "Ahmed Hassan",
      university: "Texas A&M Qatar",
      program: "Petroleum Engineering",
      rating: 5,
      review: "The transition from my high school in Doha to Texas A&M was seamless thanks to their orientation program and local contacts.",
      photo: "https://randomuser.me/api/portraits/men/22.jpg",
      flag: "🇶🇦"
    },
    {
      name: "Fatima Al-Kuwari",
      university: "Georgetown Qatar",
      program: "International Relations",
      rating: 4,
      review: "Their scholarship advisors knew exactly which funding opportunities were available for Qatari nationals at Education City universities.",
      photo: "https://randomuser.me/api/portraits/women/72.jpg",
      flag: "🇶🇦"
    },
    {
      name: "Mohammed Al-Sulaiti",
      university: "Carnegie Mellon Qatar",
      program: "Computer Science",
      rating: 5,
      review: "Got into CMU Qatar with their help! They understand the competitive admission process at Education City institutions.",
      photo: "https://randomuser.me/api/portraits/men/41.jpg",
      flag: "🇶🇦"
    },
    {
      name: "Aisha Al-Thani",
      university: "Northwestern Qatar",
      program: "Journalism",
      rating: 4,
      review: "Their workshops on personal statement writing were crucial for my successful application to NU-Q.",
      photo: "https://randomuser.me/api/portraits/women/85.jpg",
      flag: "🇶🇦"
    }
  ];

  return (
    <div className="bg-gray-50  mb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Student Success Stories</h2>
        <p className="text-center text-gray-600 mb-12">Hear from students who achieved their academic dreams with our support</p>
        
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-2">
              <div className="bg-white p-6 rounded-lg shadow-md shadow-[#0A0851] h-full">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.photo} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.program} at {review.university}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < review.rating ? "text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                
                <FaQuoteLeft className="text-gray-300 text-xl mb-2" />
                <p className="text-gray-700 italic mb-4">{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewsSection;