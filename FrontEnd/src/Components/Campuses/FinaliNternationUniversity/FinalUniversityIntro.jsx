import { Link } from 'react-router-dom'
import { GiConvergenceTarget } from "react-icons/gi";

export default function FinalUniversityIntro() {
    return (
        <div className='w-full mx-auto sm:w-11/12 p-3'>
            <div className='flex flex-wrap justify-between'>
                <div className='w-full sm:w-[65%]'>
                    <p className='text-md text-justify'>
                        About Final International University
                        Final International University (FIU) provides students with the opportunities and support they deserve from your university! When you join the Final International University (FIU) family, our highly qualified academic staff will carefully nurture your path to professional success and a university community that always puts you first!
                    </p>

                    <p className='mt-2 text-md text-justify'>
                        FIU is a young and innovative university. Founded in 2015, Final International University (FIU) aims to provide an internationally recognized education of the highest quality, delivered through innovative teaching methods to prepare you for the job market and make you a future leader in your chosen profession!
                    </p>

                    <p className='mt-2 text-md text-justify'>
                        With its global network of partnerships and a unique scholarship structure that provides financial access to students around the world, FIU has everything you need.
                    </p>

                    <div className='mt-4 w-full mb-4'>
                        <iframe
                            className='w-full'
                            height="360"
                            src="https://www.youtube.com/embed/oKu4GAeGjp8?list=PLsTddL7XG_ksoWGtge2ne09eOYEsShQ1V"
                            title="Cyprus International University-Promotional Video 2018"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className='w-full p-2 h-auto lg:h-70 sm:w-[30%] shadow-md shadow-[#0A0851]'>
                    <div className='flex sm:justify-center sm:items-center'>
                        <hr className='h-1 bg-[#F5891B] sm:w-[14%] border-none hidden md:flex' />
                        <h1 className='px-2 text-md text-nowrap lg:text-xl font-semibold'>Another Universities</h1>
                        <hr className='h-1 bg-[#F5891B] sm:w-[14%] border-none hidden md:flex' />
                    </div>
                     <ol className="mt-4 px-3 flex flex-col gap-3">
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Cyprus International University</li>
            </Link>
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Near East University</li>
            </Link>
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Eastern Mediterranean University</li>
            </Link>
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Kyrenia University</li>
            </Link>
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Bahcesehir Cyprus University</li>
            </Link>
            <Link to="" className="flex items-center gap-2">
              <GiConvergenceTarget />
              <li>Final International University</li>
            </Link>
          </ol>
                </div>
            </div>
        </div>
    )
}

