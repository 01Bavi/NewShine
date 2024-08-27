import React from 'react'
import '../styles/Secondsection.css'
import phoneimage from '../assets/mobilephone.png'

const contentItems = [
    {
        icon: '/images/hand.png',
        title: 'Daily Meditations',
        description: 'Listen and learn a new self-care skill every weekday with the Daily Shine'
    },
    {
        icon: '/images/bookpen.png', 
        title: 'Self-Care Courses',
        description: 'Go deeper on topics like stress, boundaries, and more with audio courses hosted by experts'
    },
    {
        icon: '/images/mail.png',
        title: 'Personalized Support',
        description: 'Get recommendations from a library of 1,000+ meditations with representation at the forefront'
    },
    {
        icon: '/images/handshake.png', 
        title: 'Virtual Community Workshops',
        description: 'Join monthly virtual workshops to get support from experts and our inclusive community'
    }
];



const Secondsection = () => {
  return (
    <div className='secondcontainer' >
        <div className='secondcontent'>

            <div className='secondcontent-leftside'>

             <p>Named Best of the Year by Apple</p>
             <h2>Start your mental wellness journey with Shine Premium</h2>

       
             {contentItems.map((item) => (
                <div className='iconitems'>
            
                 {item.icon && <img src={item.icon} alt={item.title} />}

                    <div className='description'>

                     <strong>{item.title}</strong>
                     <p>{item.description}</p>

                    </div>

            
                </div>
             ))}

            </div>

                <div className='secondcontent-rightside'>

                   <img src={phoneimage} alt="phone" className="rightphone" />

                </div>
       
        </div>
    </div>
  )
}

export default Secondsection