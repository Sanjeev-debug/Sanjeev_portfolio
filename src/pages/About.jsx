import React from 'react'
import './About.css'
import LinesMove from '../components/LinesMove'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Sanjeev from '../assets/Sanjeev.jpeg'

const About = () => {
  return (
    <>
      <LinesMove />
      <div className="aboutMain">
        <div className='aboutAvatar' >
          <Stack direction="row" spacing={2}>

            <Avatar className='avatar'
              alt="Remy Sharp"
              src={Sanjeev}
              sx={{ width: 200, height: 200 }}
            />
          </Stack>
          <p><i>"Hi, I’m Sanjeev Kumar, a Full-Stack Developer with skills in React.js, Node.js, MySQL, and MongoDB. I am currently doing my MCA and enjoy creating simple, scalable, and user-friendly web applications. I am also learning AI and Machine Learning to bring smart features into web development. My goal is to grow as a developer and work on meaningful projects. Apart from coding, I like exploring new tools, solving problems, and keeping up with the latest tech trends."</i></p>


        </div>
       <div className='downloadMain' > <a className='download' href="/Sanjeev_portfolio/Sanjeev_kumar_FullStackDeveloper.pdf" download="Sanjeev_kumar_FullStackDeveloper.pdf" > Resume - Download</a></div>
      </div>
    </>
  )
}

export default About