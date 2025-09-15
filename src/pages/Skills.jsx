import React, { useState } from 'react'
import './Skills.css'
import SkillCard from '../components/SkillCard';
import LinesMove from '../components/LinesMove';


const Skills = () => {

    const skills=[
      {title:'Frontend',name:["HTML","CSS","Javascript","Bootstrap","React.Js","Vite","Next.Js",]},
      {title:'Backend',name:["Node.Js","Express.Js","Django","RESTful API",]},
      {title:'Databases',name:["MySQL","MongoDB"]},
      {title:'Languages',name:["C","C++ Basic","Javascript","Core Java","Python"]},
      {title:'Other Tools',name:["Amazon Web Services (AWS)","Git/GitHub","VS Code"]},
      {title:'Learning',name:["Machine learning","Artificial Intelligence"]},
      
    ]

    

  return (
    <>
       <div className='skillsMain' >
          <LinesMove/>
        <div className="cardMain">
           { skills.map((item, index)=>{
            return <SkillCard item={item} key={index}  />

           }) }
        </div>
       </div>         
    </>
  )
}

export default Skills