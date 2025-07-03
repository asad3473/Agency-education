import { Link } from 'react-router-dom'
import { GiConvergenceTarget } from "react-icons/gi";

export default function CyprusIntroduction() {
    return (
        <div className=' w-full mx-auto sm:w-11/12 p-3'>
            <div className=' flex flex-wrap  justify-between'>
                <div className='w-full sm:w-[65%]  '>
                    <p className=' text-md  text-justify'>Founded in 1997, CIU is a private, English language university located near North Nicosia, the capital of Northern Cyprus.It began with just 81 students and 45 staff, and has since grown to accommodate around 14,000 18,000 students from over 110 countries.CIU is organized into 12 faculties, 8 schools, and hosts around 62 undergraduate and 94 postgraduate programs, spanning fields like health sciences, engineering, business and law. It aims to build "center of excellence with distinction," focusing on academic quality, research, and student employability.
                    </p>

                    <p className=' mt-2 text-md text-justify'>
                        The university is accredited by YÖDAK (Northern Cyprus), YÖK (Turkey), and various international bodies. It offers modern campus amenities from a sports complex with indoor swimming pool, squash courts, and gym, to a radio station (CIU FM107.2), numerous clubs, cafés, a library, and on campus dormitories.CIU actively supports sustainability efforts utilizing renewable energy for around 30% of its electricity, reducing plastic use by 80%, and ranking 64th globally in the UI GreenMetric sustainability index.
                    </p>
                    <p className=' mt-2 text-md text-justify'>
                        Furthermore, the university encourages experiential learning, offering a Work & Life Skills Development program in collaboration with brands like NovaBank and K‑Pet, along with extensive extracurricular activities 30+ student societies, 50+ clubs, and 200+ annual events.
                    </p>


                    <div className=' mt-4 w-full mb-4'>
                        <iframe className='w-full' height="360" src="https://www.youtube.com/embed/oKu4GAeGjp8?list=PLsTddL7XG_ksoWGtge2ne09eOYEsShQ1V" title="Cyprus International University-Promotional Video 2018" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className=' w-full p-2  h-auto  lg:h-70 sm:w-[30%] shadow-md   shadow-[#0A0851] '>
                    <div className=' flex sm:justify-center sm:items-center'>
                        <hr className=' h-1 bg-[#F5891B] sm:w-[14%] border-none hidden md:flex' />
                        <h1 className=' px-2 text-md text-nowrap lg:text-xl font-semibold'>Another Universities</h1>
                        <hr className=' h-1 bg-[#F5891B] sm:w-[14%] border-none hidden md:flex' />
                    </div>
                    <ol className=' mt-4 px-3 flex flex-col gap-3'>
                        <Link to='' className=' flex items-center gap-2' ><GiConvergenceTarget /><li>Cyprus-International-University</li></Link>
                        <Link to='' className=' flex items-center gap-2' ><GiConvergenceTarget /><li>Cyprus-International-University</li></Link>
                        <Link to='' className=' flex items-center gap-2' ><GiConvergenceTarget /><li>Cyprus-International-University</li></Link>
                        <Link to='' className=' flex items-center gap-2' ><GiConvergenceTarget /><li>Cyprus-International-University</li></Link>
                        <Link to='' className=' flex items-center gap-2' ><GiConvergenceTarget /><li>Cyprus-International-University</li></Link>
                        <Link to='' className=' flex items-center gap-2' ><GiConvergenceTarget /><li>Cyprus-International-University</li></Link>
                    </ol>
                </div>
            </div>
        </div>
    )
}
