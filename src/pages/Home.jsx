import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import  {ReactTyped}  from 'react-typed';

import LinesMove from '../components/LinesMove';



const Home = () => {
  return (
    <>
      <div className='home'  >
        <LinesMove/>
        <div className='mainHome' >
          <div className='homeContent' >

              <h1> Hi, I'm Sanjeev Kumar </h1>
            <h3>
              <ReactTyped 
                strings={["Full Stack Web Developer","Expert In Frontend Developer"]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
              
              </h3>
              
            <p><i>“I love building scalable web apps using React, Node.js, MySQL, MongoDB, Python, Django etc. Currently exploring AI/ML to create intelligent solutions.”</i></p>
            <div className='homeButton' >
              <div  className='contactButton'   > <Link to={"/contactMe"} className='contactLink' > <i>Contact Me</i> </Link></div>
              <div className='resumeButton' > <a href='/Sanjeev-cv.pdf' download="Sanjeev-Kumar-CV.pdf" className='resumeLink' > <i>Get Resume  </i> </a></div>

            </div>

          </div>
          <div className='homeSanjeevPhoto' >
            <div className='img' >

            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default Home