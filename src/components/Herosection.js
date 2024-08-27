import React from 'react'
import '../styles/Herosection.css';
import AppleBest from '../assets/applebest.svg'
import heroimage from '../assets/herobackgroundimage.jpg'

const Herosection = () => {
  return (
    <div className='herosection'>

      <img className='herosectionimage'  src={heroimage} alt="heroimage" />

        <div className='herocontentgradient'>
 
            <div className='herocontent'>

             <h1 className="title">Daily mental wellness for all</h1>
             <p className="subtitle">The mental wellness app for better mornings, brighter days, and the truest you.</p>
             <img src={AppleBest} alt="AppleBest" className="AppleBestlogo" />

            </div>
       </div>
    </div>

  )
}

export default Herosection