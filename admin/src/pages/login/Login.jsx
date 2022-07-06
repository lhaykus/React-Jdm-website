import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../../redux/apiCalls';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        //prevent page from refreshing
        e.preventDefault();
        login(dispatch, { username, password });
    }

    
  return (
    <div className='admin-login'>
        <input type='text' placeholder='username' onChange={e => setUsername(e.target.value)}></input>
        <input type='text' placeholder='password' onChange={e => setpassword(e.target.value)}></input>
        <button onClick={handleClick} className='admin-login-btn'>Login</button>

    </div>
  )
}

export default Login;