import React from 'react'
import FInalHeader from '../Components/Campuses/FinalUniversity/FInalHeader'
import RenderHeader from './RenderHeader'
import CyprusHeader from '../Components/Campuses/CyprusUniversity/CyprusHeader'

export default function FinalUni() {
  return (
    <div>
       <RenderHeader title='FInal International University' subtitle="FIU" img="https://img.freepik.com/free-photo/three-friends-studying-from-documents-laptop-library_23-2149283306.jpg?ga=GA1.1.1282045916.1738737306&semt=ais_hybrid&w=740"/>
      <FInalHeader/>
      <CyprusHeader/>
    </div>
  )
}
