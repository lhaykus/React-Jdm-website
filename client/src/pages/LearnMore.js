import { Container, Box } from '@material-ui/core';
import React from 'react';
import drifting from '../assets/images/drift-cars.gif';
import jdmcrew from '../assets/images/jdmcrew.jpg';
import Newsletter from '../components/Newsletter';
import './LearnMore.css';


const LearnMore = () => {
  return (
    <Container>
      <h1 align-text='center'>Who Are We</h1>
      <p align-text='center'>Car parts and merch sold and created by car enthusiasts like you! We are a team of artists, mechanics, 
      car lovers, and JDM fans here to bring the widest selection of performance parts and accessores needed for JDM cars.</p>

      <Box>
      
        <h1 align-text='center'>JDM Culture</h1>
        <img className='learnmore-img' src={jdmcrew} ></img>
        <p>JDM, also known as Japanese Domestic Market, refers to vehicles prodcued in Japan. However the culture of JDM is
        another world full of tuning and modificatons to cars. </p>

      </Box>

      <Newsletter />
    </Container>
  

  )
}

export default LearnMore;