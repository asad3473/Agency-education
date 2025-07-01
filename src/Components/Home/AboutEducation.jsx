import React from 'react';


const AboutEducation = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 md:px-8 lg:px-10">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Text Content */}
                <div className="md:w-3/5">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Agency Education</h2>
                    <p className="text-lg font-semibold text-gray-700 mb-6">
                        Agency Education is a trusted & reliable Platform
                    </p>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Agency Education is an innovative platform dedicated to providing students in Qatar with expert
                        counseling for choosing the right study locations and universities worldwide. We are committed
                        to transforming the educational landscape by providing comprehensive support services to students
                        aspiring to study abroad.
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed">
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
                <div className="md:w-2/5 relative h-96 md:h-auto">
                    <img
                        src="/Homeimages/ouruni/one.avif"
                        alt="Education counseling"
                        className="absolute w-3/4 rounded-lg shadow-md z-10 top-0 right-0 h-60 object-cover"
                    />
                    <img
                        src="/Homeimages/ouruni/two.avif"
                        alt="University selection"
                        className="absolute w-3/4 rounded-lg shadow-md z-20 top-1/4 right-1/4 h-60 object-cover opacity-90"
                    />
                   
                </div>
            </div>
        </div>
    );
};

export default AboutEducation;