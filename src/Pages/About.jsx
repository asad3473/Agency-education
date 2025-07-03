import React, { useState } from "react";
import { FaPlus, FaMinus, FaCheckCircle, FaUniversity, FaGift, FaHeadset, FaHandshake, FaUserGraduate } from "react-icons/fa";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0A0851] hover:shadow-lg transition-shadow duration-300">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="font-semibold text-lg text-gray-800">{question}</h3>
        {isOpen ? (
          <FaMinus className="text-[#F5891B] text-lg" />
        ) : (
          <FaPlus className="text-[#F5891B] text-lg" />
        )}
      </div>
      {isOpen && <div className="mt-4 text-gray-600 leading-relaxed">{answer}</div>}
    </div>
  );
};

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center" 
           style={{ backgroundImage: "linear-gradient(rgba(10, 8, 81, 0.7), rgba(10, 8, 81, 0.7)), url('./about.jpg')" }}>
        <div className="text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Our Agency</h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            Your trusted partner for academic success in North Cyprus
          </p>
        </div>
      </div>

      {/* Company Info Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm text-[#F5891B] font-semibold tracking-wider mb-2 inline-block">ABOUT COMPANY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0851] mb-6 leading-tight">
              Trusted Academic Agency for North Cyprus Universities
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to our agency, dedicated to helping students navigate higher education in
              North Cyprus. With exclusive agents in all universities, we provide seamless
              registration services. Our experienced team offers personalized guidance to ensure a
              smooth application process, visa support, and accommodation assistance.
            </p>
            <button className="bg-[#0A0851] hover:bg-[#F5891B] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer">
              CONTACT US
            </button>
          </div>
          <div className="bg-gradient-to-br from-[#0A0851] to-[#F5891B] p-1 rounded-xl shadow-xl">
            <div className="bg-white p-8 rounded-lg h-full">
              <h3 className="text-xl font-bold text-[#0A0851] mb-4">Our Commitment</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At our agency, we understand the importance of personalized assistance and expert
                knowledge in the university application process.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCheckCircle className="text-[#F5891B] mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">Exclusive agents for various universities</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-[#F5891B] mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">Privileged access to resources</p>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-[#F5891B] mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">Comprehensive support from application to accommodation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#0A0851] to-[#1a1685] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <FaUserGraduate className="text-4xl text-[#F5891B] mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">500+</h3>
            <p className="text-gray-300">Students Placed</p>
          </div>
          <div className="p-6">
            <FaUniversity className="text-4xl text-[#F5891B] mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">10+</h3>
            <p className="text-gray-300">Partner Universities</p>
          </div>
          <div className="p-6">
            <FaHandshake className="text-4xl text-[#F5891B] mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">100%</h3>
            <p className="text-gray-300">Free Services</p>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-sm text-[#F5891B] font-semibold tracking-wider">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0851] mt-2 mb-4">Reasons For Choosing Our Agency</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We stand out from the competition with our exceptional services and student-focused approach
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-[#0A0851] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUniversity className="text-[#F5891B] text-2xl" />
            </div>
            <h3 className="font-bold text-xl text-[#0A0851] mb-3">Reliable Agency</h3>
            <p className="text-gray-600">
              Officially recognized by all major universities in North Cyprus with years of proven success
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-[#0A0851] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-[#F5891B] text-2xl" />
            </div>
            <h3 className="font-bold text-xl text-[#0A0851] mb-3">100% Free Services</h3>
            <p className="text-gray-600">
              No hidden charges - our consultation, application, and visa services are completely free
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="bg-[#0A0851] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaGift className="text-[#F5891B] text-2xl" />
            </div>
            <h3 className="font-bold text-xl text-[#0A0851] mb-3">Exclusive Scholarships</h3>
            <p className="text-gray-600">
              Access to special scholarships and discounts available only through our agency
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-[#F5891B] font-semibold tracking-wider">HAVE QUESTIONS?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0851] mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and the application process
            </p>
          </div>
          <div className="space-y-6">
            <FaqItem
              question="How To Apply?"
              answer={
                <>
                  You can apply for your desired program in just a few easy steps, taking less than 3
                  minutes. Simply click on{" "}
                  <span className="text-[#0A0851] font-semibold">Apply Now</span>, upload your passport
                  and school diploma copies, and select your preferred program hassle-free.
                </>
              }
            />
            <FaqItem
              question="What is a Free Consultation?"
              answer="Our free consultation is a personalized session where we assess your academic background, discuss your goals, and recommend the best universities and programs for your needs. We'll guide you through the entire process with expert advice at no cost to you."
            />
            <FaqItem
              question="How many days does it take to get admission?"
              answer="Admissions are typically processed within 2–5 working days after submitting all required documents. Some universities may respond even faster during non-peak periods. We'll keep you updated throughout the process."
            />
            <FaqItem
              question="Are your Services Free?"
              answer="Yes, all our services including consultation, application submission, visa guidance, and accommodation assistance are completely free for students. We're compensated directly by our partner universities, so you never pay for our support."
            />
          </div>
          <div className="mt-12 bg-[#F5891B] bg-opacity-10 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <FaHeadset className="text-3xl text-[#F5891B] mr-4" />
              <div>
                <h4 className="font-bold text-[#0A0851]">Still have questions?</h4>
                <p className="text-gray-600">We're here to help</p>
              </div>
            </div>
            <button className="bg-[#0A0851] hover:bg-[#F5891B] text-white font-medium py-2 px-6 transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer">
              CONTACT SUPPORT
            </button>
          </div> 
        </div>
      </section>
    </div>
  );
};

export default About