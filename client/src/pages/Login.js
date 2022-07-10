import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { Button, TextField, Box } from '@material-ui/core';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    //prevent page from refreshing when login button is pressed
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <section id='login-container'>
      <h1>Login In</h1>
      <Box component='form' className='login-form'>
        <TextField id='login-input' label='Username' variant='outlined' onChange={(e) => setUsername(e.target.value)} />
        <br />
        <TextField id='login-input' label='Password' variant='outlined' type='password' onChange={(e) => setPassword(e.target.value)} />
        <br />
        <Button className='login-btn' variant='contained' color='secondary' onClick= {handleClick} disabled = {isFetching} >Log In</Button>
      {error && <alert>Something went wrong.....</alert>}
        <br/>
        <Link to='/signup'>
        <Button className='register-btn' variant='contained' color='primary'>Sign Up</Button>
        </Link>
        <br />
        <Link to='/admin'>
        <Button className='register-btn' variant='contained' color='primary'>Admin Log In</Button>
        </Link>
      </Box>

      


    </section>
  )
}

export default Login;