import React from 'react';
import '../App.css';
import './HeroImage.css';
import { Link } from 'react-router-dom';
import { Button} from '@material-ui/core';



function HeroImage() {
  return (
    <section className='hero-image-container'>
    
        <h1>The world of JDM Legends</h1>
        <Link to ='/login' className='hero-btn-link'>
        <div className='hero-btn'>
            <Button className='btns'
            variant="contained"
            color='primary'>
                Sign In
            </Button>
            </div>
            </Link>
            <div>
        </div>
    </section>
   
  )
}

export default HeroImage;