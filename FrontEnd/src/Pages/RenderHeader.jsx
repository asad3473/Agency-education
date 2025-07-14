import React from 'react'
import { BiLeftArrow, BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function RenderHeader({ title, subtitle, img }) {
    return (
        <div className="relative h-96 w-full overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-orange-400/80 to-blue-900/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {title}
                </h1>
                <div className=' flex items-baseline justify-center gap-1'>
                    <Link to='/' className=' text-xl'>Home</Link>
                    <span> <BiRightArrowAlt /></span>
                    <span className=" text-black font-semibold text-xl max-w-2xl drop-shadow-md">
                        {subtitle}
                    </span>
                </div>


            </div>
        </div>
    )
}
