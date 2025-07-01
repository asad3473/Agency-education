import React from 'react'

export default function OurUniversity() {

    const uni = [
        {
            id: 1,
            title: "Cyprus International University",
            description:
                "Ranked 30th globally and 2nd in Northern Cyprus by the Times World University Rankings 2021, CIU offers an exceptional academic experience with a focus on innovation and global learning.",
            btn: "Read more",
            img: "/Homeimages/ouruni/cyprus.png"
        },
        {
            id: 2,
            title: "Near East University",
            description:
                "One of the top-ranked universities in Cyprus and Turkey. Established in 1992, NEU is recognized as the 2nd best university in North Cyprus, offering world-class education and state-of-the-art facilities for international students.",
            btn: "Read more",
            img: "/Homeimages/ouruni/nearuni.png"
        },
        {
            id: 3,
            title: "Eastern Mediterranean University",
            description:
                "Ranked among the top 5% of universities worldwide by the Times Higher Education World University Rankings, EMU stands out globally for academic excellence and research, being among the best 1,500 institutions worldwide.",
            btn: "Read more",
            img: "/Homeimages/ouruni/virtual.png"
        }
    ];

    return (
        <div className=' w-full'>
            <h1 className=' sm:text-2xl text-color font-semibold text-center mt-4 mb-2'>Choose your University</h1>
            <p className=' text-xl sm:text-3xl font-bold text-center'>One of the Best Universities in the Middle East</p>


            <div className=' grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full sm:w-10/12 mt-4 sm:mt-8 mx-auto'>
                {
                    uni.map((val, ind) => (
                        <div className='group relative shadow-lg shadow-blue-300 flex flex-col h-full' key={ind}>
                            <div
                                className='absolute transition-all ease-in delay-100 text-white text-center right-0 h-14 w-14 group-hover:bg-[#F5891B] bg-[#0A0851]'
                                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 76% 59%, 51% 44%, 33% 54%, 0% 75%)' }}
                            >
                                <span>{val.id}</span>
                            </div>
                            <div className='p-3 flex flex-col h-full'>
                                <img src={val.img} className='w-full h-50' alt={val.title} />
                                <hr />
                                <div className='flex flex-col items-center h-full text-center mt-3'>
                                    <p className='text-color mb-4'>{val.description}</p>
                                    <button className='mt-auto w-fit px-4 py-2 rounded-md bg-[#0A0851] text-white transition-all delay-100 duration-300 hover:text-white hover:w-6/12 cursor-pointer hover:bg-[#F5891B]'>
                                        {val.btn}
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

            <div className=' mt-4 flex justify-center items-center'>
                <button className='mt-auto w-fit px-4 py-2 rounded-md bg-[#0A0851] text-white transition-all delay-100 duration-300 hover:text-white hover:w-2/12 cursor-pointer hover:bg-[#F5891B]'>
                    View all universities
                </button>
            </div>


        </div>
    )
}
