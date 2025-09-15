import React from 'react'
import './Education.css'
import LinesMove from '../components/LinesMove'
import Amity from '../assets/amity.png'
import Glocal from '../assets/glocal.jpg'
import DBRAU from '../assets/dbrau.jpeg'

const Education = () => {
  return (
    <>
      <LinesMove />
      <div className="educationMain">
        <div className="course">
          <h1 >MCA - ( Master of Computer Application ) <span>( Online )</span> </h1>
          <div className='university' >
            <img src={Amity} alt="Loading..." />
            <div>
              <h3>Amity University - Noida <span>( 01-2025 to 01-2027 )</span> <span>( Pursuing )</span> </h3>
              <h4>Specialization (ML & AI)</h4>
            </div>
          </div>
        </div>
        <div className="course bca">
          <h1>BCA - ( Bachelor of Computer Application ) <span> ( Online )</span> </h1>
          <div className='university' >
            <img src={Glocal} alt="Loading..." />
            <h3>Glocal University <span>( 2020 to 2023 )</span> </h3>

          </div>
        </div>
        <div className="course bed">
          <h1>B.Ed - ( Bachelor of Education )  </h1>
          <div className='university' >
            <img src={DBRAU} alt="Loading..." />
            <h3> DBRAU -Agra <span>( 2020 to 2022 )</span> </h3>

          </div>
        </div>
        <div className="course BSc">
          <h1>B.Sc - ( Bachelor of Science )  </h1>
          <div className='university' >
            <img src={DBRAU} alt="Loading..." />
            <h3> DBRAU -Agra <span>( 2017 to 2020 )</span> </h3>

          </div>
        </div>

      </div>
      <div>

      </div>
    </>
  )
}

export default Education