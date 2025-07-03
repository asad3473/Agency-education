import React from 'react'
import RenderHeader from './RenderHeader'
import CyprusHeader from '../Components/Campuses/CyprusUniversity/CyprusHeader'
import SuperFinalunivesity from '../Components/Campuses/FinaliNternationUniversity/SuperFinalunivesity'

export default function FinalUni() {
  return (
    <div>
        <RenderHeader title='Final International University' subtitle="FIU" img="https://img.freepik.com/free-photo/three-friends-studying-from-documents-laptop-library_23-2149283306.jpg?ga=GA1.1.1282045916.1738737306&semt=ais_hybrid&w=740"/>
        <SuperFinalunivesity/>
    </div>
  )
}


;