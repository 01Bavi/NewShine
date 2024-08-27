import React from 'react'
import relaximage from '../assets/fourth-section-image.jpg'
import '../styles/Fourthsection.css'


const guidersDetails =[
    {
        profilepic: '/images/guidepic1.webp',
        name:'Joy Ofodu',
        Profession:'Daily Shine Host'

    },
    {
        profilepic: '/images/guidepic2.webp',
        name:'Jamila Reddy',
        Profession:'Meditation Host'

    },
    {
        profilepic: '/images/guidepic3.webp',
        name:'Jor-El Caraballo, L.M.H.C.',
        Profession:'Therapist'

    },
    {
        profilepic: '/images/guidepic4.webp',
        name:'Elisha Mudly, L.M.S.W.',
        Profession:'Mindfulness Teacher'

    },
    {
        profilepic: '/images/guidepic5.webp',
        name:'Jen Kluczkowski',
        Profession:'Yoga & Meditation Teacher, Holistic Health Coach'

    },
    {
        profilepic: '/images/guidepic6.webp',
        name:'Jezz Chung',
        Profession:'DE&I Facilitator & Leader'

    },
]

const Fourthsection = () => {
  return (
    
    <div className='fourthsection'>

        <img className='relaximages'  src={relaximage}  alt='relaximage'></img>


            <div className='cotainerinside'>

            <h1 >Learn From teachers and therapists you can relate to.</h1>

            <div className='mapcollection'>

             {guidersDetails.map((guide) => (

                <div className='guidercard'>
                    

                      <img src={guide.profilepic} alt={guide.name}/>
                      <h3>{guide.name}</h3>
                      <p>{guide.Profession}</p>

                   




                </div>

             ))}

                
            </div>

        </div>
        
    </div>
  )
}

export default Fourthsection