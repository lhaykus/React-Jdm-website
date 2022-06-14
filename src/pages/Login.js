import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { Button, TextField, Box } from '@material-ui/core';


function Login() {
  return (
    <section id='login-container'>
      <h1>Login In</h1>
      <Box component='form' className='login-form'>
        <TextField id='login-input' label='Email' variant='outlined' />
        <br />
        <TextField id='login-input' label='Password' variant='outlined' />
        <br />
        <Button className='login-btn' variant='contained' color='secondary'>Sign In</Button>
        <br/>
        <Link to='/signup'>
        <Button className='register-btn' variant='contained' color='primary'>Sign Up</Button>
        </Link>
      </Box>

      


    </section>
  )
}

export default Login;