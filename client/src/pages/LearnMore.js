import { Container, Box } from '@material-ui/core';
import React from 'react';
import drifting from '../assets/images/drift-cars.gif';
import './LearnMore.css';


const LearnMore = () => {
  return (
    <Container>
      <h1 align-text='center'>Who Are We</h1>
      <p align-text='center'>description about website and services and have pic/gif</p>

      <div>
      
        <h1 align-text='center'>JDM Culture</h1>
        <img className='learnmore-img' src={drifting} ></img>
        <p align-text='center'>Description of jdm culture, drifting, cars etc. gifs/pics</p>

      </div>


    </Container>

  )
}

export default LearnMore;