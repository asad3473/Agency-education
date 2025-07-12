import React from 'react'
import RenderHeader from './RenderHeader'
import SuperEastHeader from '../Components/Campuses/NewEastUniversity/SuperEastHeader'
import SuperMedetrianHeader from '../Components/Campuses/MedeterianUniversity.jsx/SuperMedetrianHeader'


export default function MediteraninUni() {
  return (
    <div>
        <RenderHeader title='Eastern Mediterranean University' subtitle="EMU" img="https://img.freepik.com/free-photo/three-friends-studying-from-documents-laptop-library_23-2149283306.jpg?ga=GA1.1.1282045916.1738737306&semt=ais_hybrid&w=740"/>
        <SuperMedetrianHeader/>
    </div>
  )
}






