import { Button, TextField, Grid, Container } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className='newsletter-container'>
            <div>
                <div className='newsletter-title'>Sign up for our newsletter!</div>
                <div className='newsletter-description'>Get the latest updates from us!</div>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <TextField id="standard-basic" label="Email Address" />
                
                    <Button className='newsletter-btn' color='pink'>
                        <Send />
                    </Button>
                    </Grid>
                </div>
            </section>

    )
}

export default Newsletter;