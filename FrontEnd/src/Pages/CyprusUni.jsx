import React from 'react'
import RenderHeader from './RenderHeader'
import CyprusHeader from '../Components/Campuses/CyprusUniversity/CyprusHeader'
import { useAuth } from '../contextApi/contextApi'

export default function CyprusUni() {
  const{language,setLanguage}=useAuth()
  return (
    <div>
        <RenderHeader title='Cyprus International University' subtitle="CIU" img="https://img.freepik.com/free-photo/three-friends-studying-from-documents-laptop-library_23-2149283306.jpg?ga=GA1.1.1282045916.1738737306&semt=ais_hybrid&w=740"/>
        <CyprusHeader/>
    </div>
  )
}
