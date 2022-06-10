import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroImage.css';
import { Link } from 'react-router-dom';


function HeroImage() {
  return (
    <div className='hero-image-container'>
    
        <h1>The world of JDM Legends</h1>
        <Link to ='/' className='hero-btn-link'>
        <div className='hero-btn'>
            <Button className='btns' 
            buttonStyle= 'btn--outline'
            buttonSize ='btn-large'>
                Sign In
            </Button>
            </div>
            </Link>
            <div>
        </div>
      
        

    </div>
   
  )
}

export default HeroImage;