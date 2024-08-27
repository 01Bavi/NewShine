import React from 'react'
import '../styles/Sixthsection.css'
import founders from '../assets/founders.webp'

const Sixthsection = () => {
  return (
    <div className='sixthsection'>

      <div className='sixthsectioncontent'>

           <h6 className='sixthsectionh3'>We made a space with our reality in mind </h6>
           <p className='sixthsectionp'>We know what it's like to feel as if you're the *only* one going through something—and how feeling supported can change everything. </p>
           <button>Learn about us</button>
           <img className='sixthsectionimage'   src={founders} alt='foundersimage'/>

      </div>
        

        
    </div>
  )
}

export default Sixthsection