import { Button, TextField, Grid, Container } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner-container'>
            <Container>
                <div className='banner-title'>20% off Deals! Don't miss out!</div>
                <div className='banner-description'>Free Shipping on orders $50 and up</div>
               
                </Container>
            </section>

    )
}

export default Banner;