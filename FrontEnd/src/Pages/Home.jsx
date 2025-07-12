import React from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import OurUniversity from '../Components/Home/OurUniversity'
import AboutEducation from '../Components/Home/AboutEducation'
import ReviewsSection from '../Components/Home/ReviewsSection'
import LayoutUni from '../Components/Home/LayoutUni'

export default function Home() {
  return (
    <div>
        <HomeHeader/>
        <OurUniversity/>
        <AboutEducation/>
        <ReviewsSection/>
        <LayoutUni/>
    </div>
  )
}
