import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <section className='login'>
        <div className='login-container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type = 'email'/>
                <br /><br />
                <h5>Password</h5>
                <input type="password" />
                <button type='submit' className='login-btn'>Sign In</button>
            </form>
            <button className='signup-btn'>Sign Up</button>

        </div>
    </section>
  )
}

export default Login;