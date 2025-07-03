import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function OurUniversity() {
    const location = useLocation();
    const isUniversitiesPage = location.pathname === '/universities';
    const [showAll, setShowAll] = useState(false);

    const uni = [
        {
            title: "Cyprus International University",
            description:
                "Ranked 30th globally and 2nd in Northern Cyprus by the Times World University Rankings 2021...",
            btn: "Read more",
            img: "/Homeimages/ouruni/cyprus.png",
            link: "/Cyprus-International-University"
        },
        {
            title: "Near East University",
            description:
                "One of the top-ranked universities in Cyprus and Turkey...",
            btn: "Read more",
            img: "/Homeimages/ouruni/nearuni.png",
            link: "/Near-East-University"
        },
        {
            title: "Eastern Mediterranean University",
            description:
                "Ranked among the top 5% of universities worldwide...",
            btn: "Read more",
            img: "/Homeimages/ouruni/virtual.png",
            link: '/Eastern-Mediterranean-University'
        },
        {
            title: "Kyrenia University",
            description:
                "Kyrenia University offers outstanding programs...",
            btn: "Read more",
            img: "/Homeimages/ouruni/kyrenia.png",
            link: '/Kyrenia-University'
        },
        {
            title: "Final International University",
            description:
                "Final International University is known for its modern curriculum...",
            btn: "Read more",
            img: "/Homeimages/ouruni/final.png",
            link: '/Final-International-University'
        },
        {
            title: "Bahcesehir Cyprus University",
            description:
                "Bahcesehir Cyprus University is a globally connected institution...",
            btn: "Read more",
            img: "/Homeimages/ouruni/bau.png",
            link: '/Bahcesehir-Cyprus-University'
        },
    ];

    const displayedUniversities = isUniversitiesPage || showAll ? uni : uni.slice(0, 3);

    return (
        <div className='w-full'>
            <h1 className='sm:text-2xl text-color font-semibold text-center mt-4 mb-2'>Choose your University</h1>
            <p className='text-xl sm:text-3xl font-bold text-center'>One of the Best Universities in the Middle East</p>

            <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full sm:w-10/12 mt-4 sm:mt-8 mx-auto mb-5'>
                {
                    displayedUniversities.map((val, ind) => (
                        <div
                            className='group relative shadow-md hover:shadow-amber-50 transition-all ease-in-out delay-100 shadow-[#0A0851] flex flex-col h-full'
                            key={ind}
                        >
                            <div
                                className='absolute transition-all ease-in delay-100 text-white text-center right-0 h-14 w-14 group-hover:bg-[#F5891B] bg-[#0A0851]'
                                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 76% 59%, 51% 44%, 33% 54%, 0% 75%)' }}
                            >
                                <span>{ind + 1}</span>
                            </div>
                            <div className='p-3 flex flex-col h-full'>
                                <img src={val.img} className='w-full h-50' alt={val.title} />
                                <hr />
                                <div className='flex flex-col items-center h-full text-center mt-3'>
                                    <p className='text-color mb-4'>{val.description}</p>
                                    <button className='mt-auto w-fit px-4 py-2 rounded-md bg-[#0A0851] text-white transition-all delay-100 duration-300 hover:text-white hover:w-6/12 cursor-pointer hover:bg-[#F5891B]'>
                                        <Link to={val.link}>{val.btn}</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {
                !isUniversitiesPage && (
                    <div className='mt-4 flex justify-center items-center mb-3'>
                        <button
                            className='w-fit px-4 py-2 rounded-md bg-[#0A0851] text-white transition-all delay-100 duration-300 hover:text-white hover:w-2/12 cursor-pointer hover:bg-[#F5891B]'
                            onClick={() => setShowAll(true)}
                        >
                            <Link to='/universities'>View all universities</Link>
                        </button>
                    </div>
                )
            }
        </div>
    );
}
