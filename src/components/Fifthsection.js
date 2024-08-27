import React from 'react'
import '../styles/Fifthsection.css'
import star from '../assets/stars.png'
import quote from '../assets/quote.svg'



const Fifthsection = () => {
  return (
    <div className='fifthsection'>
        <div className='fifthsectionlayout'>
            <div className='ratingstar'>
                <img src={star} alt='ratingstarimage'/>


            </div>
            <div className='ratingtitle'>
                <h2>1 in 3 reviews refer to Shine as life-changing </h2>

            </div>

              <div className='imagewithpara'>

                <div className='paraimage'>
                    
                <img src={quote} alt='quoteimage'/>
                <p>All the mental health tools I was searching for put together into one amazing app. It's a gratitude journal, inspirational podcast library, meditation library, daily affirmation subscription, and community of mental health positive people. Please give this a try!</p>

                </div>
                <div className='para'>

                </div>


              </div>

        </div>
        
    </div>
  )
}

export default Fifthsection