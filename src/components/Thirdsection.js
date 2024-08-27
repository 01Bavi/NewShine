import React from 'react'
import '../styles/Thirdsection.css';


const cardItems =[
    {
        audio_file:'/images/purple-track.jpg',
        audio_file_title: 'Tiffany Walker',
        audio_file_subtitle:'Representation Burnout'
    },
    {
        audio_file:'/images/pink-track.jpeg',
        audio_file_title: 'Tiffany Walker',
        audio_file_subtitle:'Focus On What You Can Control'
    },
    {
        audio_file:'/images/brown-track.jpeg',
        audio_file_title: 'Jamila Reddy',
        audio_file_subtitle:'Conquer Your Inner Critic'
    },
    {
        audio_file:'/images/yellow-track.jpeg',
        audio_file_title: 'Mel Chante',
        audio_file_subtitle:'Honor Your Whole Self'
    },
]

const Thirdsection = () => {
  return (
    <div className='thirdsection'>

        <div className='thirdsectionTitle'>

            <h1>Listen to new meditations every day that are relevant to your world. </h1>

        </div>

        <div className='trackcollectionsection'>

        {cardItems.map((card) => (


                <div className='trackcard'> 

                    <div className='trackcard-items'>

                        <div className='trackcardimage'>
                            
                            {card.audio_file && <img src={card.audio_file} alt='{card.audio_file_title}'/>}

                        </div>

                        <div className='trackcarddescription'>

                          <p>{card.audio_file_title}</p>
                          <h1>{card.audio_file_subtitle}</h1>

                        </div>

                    </div>

                </div>


               

           
        ))}
         
        </div>


    </div>
  )
}

export default Thirdsection