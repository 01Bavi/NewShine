import React from 'react'
import '../styles/Header.css';
import ShineLogo from '../assets/shine-logo.4ccdd0f3.png';
import { useState } from 'react';


const Header = () => {

  const [isNavBar, setNavBar] = useState(false);

  const handletoggle = () => {
    setNavBar(!isNavBar);
  };
  return (
    <div className='header'>
        
        <img src={ShineLogo} alt="ShineLogo" className="logo" />

        <button className="nav-toggle" onClick={handletoggle}>
        
      </button>

           <div className={`navbar ${isNavBar ? 'visible' : ''}`}>
           
               <a href="#">About</a> 
               <a href="#">Shine At Work</a> 
               <a href="#">Poadcasts</a> 
           
           </div>

           
          
           


    </div>
  )
}

export default Header