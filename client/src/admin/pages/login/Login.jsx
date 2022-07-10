import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Topbar from '../../components/topbar/Topbar';
import { login } from '../../redux/apiCalls';
import './login.css';
import { Link } from 'react-router-dom';
import { Button, TextField, Box } from '@material-ui/core';



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

    return (
        <section id='login-container'>
            <Topbar />
            <br />
      <h1>Login In</h1>
      <Box component='form' className='login-form'>
        <TextField id='login-input' label='Username' variant='outlined' onChange={(e) => setUsername(e.target.value)} />
        <br />
        <TextField id='login-input' label='Password' variant='outlined' type='password' onChange={(e) => setPassword(e.target.value)} />
        <br />
        <Button className='login-btn' variant='contained' color='secondary' onClick= {handleClick}>Log In</Button>
        <br/>
        <Link to='/signup'>
        <Button className='register-btn' variant='contained' color='primary'>Sign Up</Button>
        </Link>
      </Box>
    </section>
    )
}

export default Login;