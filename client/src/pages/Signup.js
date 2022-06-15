import { Box, TextField, Button } from '@material-ui/core';
import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <section id='signup-container'>
        <h1>Create an Account</h1>
       <Box component='form' className='signup-form'>
        <TextField id='signup-input' label='First Name' variant='outlined' />
        <br />
        <TextField id='signup-input' label='Last Name' variant='outlined' />
        <br />
        <TextField id='signup-input' label='email' variant='outlined' />
        <br />
        <TextField id='signup-input' label='password' variant='outlined' />
        <br />
        <Button className='signup-btn' variant='contained' color='primary'>Create Account</Button>
       </Box>
      
      
    </section>
  )
}

export default Signup;