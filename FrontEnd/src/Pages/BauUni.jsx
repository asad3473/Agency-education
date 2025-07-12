import React from 'react'
import RenderHeader from './RenderHeader'
import SuperBAUheader from '../Components/Campuses/BAUniversity/SuperBAUheader'



export default function BauUni() {
  return (
    <div>
        <RenderHeader title='Bahcesehir Cyprus University' subtitle="BCU" img="https://img.freepik.com/free-photo/three-friends-studying-from-documents-laptop-library_23-2149283306.jpg?ga=GA1.1.1282045916.1738737306&semt=ais_hybrid&w=740"/>
        <SuperBAUheader/>
    </div>
  )
}


