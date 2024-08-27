import React from 'react'
import '../styles/Footer.css'
import insta from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twite from '../assets/twitter.png'
import pinterest from '../assets/pinterest.png'
import spotify from '../assets/spotify.png'
import appstore from '../assets/AppStore.png'
import googlepay from '../assets/Google-Play-Logo.png'









const Footer = () => {
  return (
    <div className='Footersection'>

        <div className='footer'>

            <div className='footer-left'>
                <h6>Follow Us</h6>
              
                <div className='icon-collection'>

                    <a> <img className='socialmeadiaicons'  src={insta}  alt='insta'/></a>
                    <a> <img className='socialmeadiaicons'  src={facebook}  alt='facebook'/></a>
                    <a> <img className='socialmeadiaicons'  src={twite}  alt='twite'/></a>
                    <a> <img className='socialmeadiaicons'  src={pinterest}  alt='pinterest'/></a>
                    <a> <img className='socialmeadiaicons'  src={spotify}  alt='spotify'/></a>

                </div>
            </div>

            <div className='footer-right'>

                <div className='footer-right-grid'>

                    <div className='footer-right-grid-card'> 
                        <h6>Company</h6>
                        <div className='atagalign'>
                            <a><p>About</p></a>
                            <a><p>Shine at Work</p></a>
                            <a><p>Poadcasts</p></a>
                        </div>
                        
                    </div>

                    <div className='footer-right-grid-card'>
                        <h6>Resources</h6>
                        <div className='atagalign'>
                            <a><p>Get Advice</p></a>
                        </div>
                    </div>

                    <div className='footer-right-grid-card'>
                        <h6>Help</h6>
                        <div className='atagalign'>

                            <a><p>FAQ</p></a>
                            <a><p>Contact</p></a>
                        </div>

                    </div>
                </div>

                <div className='downloadapps-section'>
                    <h6>Download Shine</h6>
                    <div className='downloadApps'>
                        <a> <img className='downloadAppsimage'  src={appstore}  alt='appstore'/></a>
                        <a> <img className='downloadAppsimage'  src={googlepay}  alt='googlepay'/></a>
                        
                    </div>
                </div>


            </div>
       
        
        </div> 

        <hr className='line'></hr>
        
        <div className='copyright-section'>
         
          <p>© 2024 The Shine App. All rights reserved</p>

        </div>

    </div>
  )
}

export default Footer