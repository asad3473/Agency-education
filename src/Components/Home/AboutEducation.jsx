import React from 'react';

import { FiCheckCircle } from "react-icons/fi";
import { FaUniversity, FaChalkboardTeacher, FaStar } from 'react-icons/fa'
const AboutEducation = () => {
    const services = [
        {
            title: 'What We Do',
            icon: <FaUniversity className="text-3xl text-white" />,
            list: [
                'University application and admission assistance',
                'Scholarship and financial aid guidance',
                'Career counselling',
                'Visa application support',
                'Flight ticket booking',
                'Airport pick-up services',
            ],
        },
        {
            title: 'Our Approach',
            icon: <FaChalkboardTeacher className="text-3xl text-white" />,
            list: [
                'Personalized academic consulting',
                'Career planning support',
                'Student success stories',
                'Student ambassadors program',
                'Up-to-date info on our website',
            ],
        },
        {
            title: 'Why Choose Us',
            icon: <FaStar className="text-3xl text-white" />,
            list: [
                'High success rate in university placements',
                // 'Full support with documentation and university compliance',
                'Accommodation & orientation assistance',
                'Scholarship opportunities',
                '24/7 student support and guidance',
                'Accredited and experienced consultants',
                'Flexible payment options',
            ],
        },
    ]



    return (
        <div className="w-full sm:max-w-6xl mx-auto p-2 py-12 md:px-8 lg:px-10 ">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2  w-full">
                {/* Text Content */}
                <div className="w-full order-2 sm:order-0">
                    <h2 className="text-2xl text-nowrap sm:text-3xl font-bold text-gray-800 mb-4">About Agency Education</h2>
                    <p className="text-lg font-semibold text-gray-700 mb-6">
                        Agency Education is a trusted & reliable Platform
                    </p>

                    <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                        Agency Education is an innovative platform dedicated to providing students in Qatar with expert
                        counseling for choosing the right study locations and universities worldwide. We are committed
                        to transforming the educational landscape by providing comprehensive support services to students
                        aspiring to study abroad.
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                        At Agency Education, we understand the challenges that Qatari students face when deciding
                        which country to choose for their higher education. Our team of experienced counselors provides
                        personalized guidance to help students make informed decisions about their academic future.
                    </p>

                    <div className=' mt-4 flex items-start'>
                        <button className='mt-auto w-fit px-4 py-2 rounded-md bg-[#0A0851] text-white transition-all delay-100 duration-300 hover:text-white hover:w-3/12 cursor-pointer hover:bg-[#F5891B]'>
                            Read More
                        </button>
                    </div>
                </div>

                {/* Images */}
                <div className="w-full relative h-96 md:h-auto">
                    <img
                        src="/Homeimages/ouruni/one.avif"
                        alt="Education counseling"
                        className="absolute w-3/4 rounded-lg shadow-md z-10 top-0 right-0 h-60 object-cover"
                    />
                    <img
                        src="/Homeimages/ouruni/two.avif"
                        alt="University selection"
                        className="absolute w-3/4 rounded-lg shadow-md z-20 top-1/4 sm:top-2/4 right-1/4 h-60 object-cover opacity-90"
                    />

                </div>
            </div>



            {/* cards */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 sm:mt-18 w-full">
                {services.map((service, index) => (
                    <div key={index} className="bg-white w-full  group shadow-md hover:shadow-amber-50 transition-all ease-in-out delay-100  shadow-[#0A0851] rounded-2xl p-6 border border-gray-200">
                        <div className="flex flex-col justify-center items-center gap-3 mb-4">
                            <span className=' p-4 bg-[#0A0851] rounded-4xl transition-all ease-in-out delay-100 group-hover:bg-[#F5891B]'>{service.icon}</span>
                            <h2 className="text-2xl font-semibold border-l-2 px-2">{service.title}</h2>
                        </div>
                        <ul className="space-y-5">
                            {service.list.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <FiCheckCircle className="text-[#0A0851] mt-1" />
                                    <span className=' text-md'>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>




        </div>
    );
};

export default AboutEducation;