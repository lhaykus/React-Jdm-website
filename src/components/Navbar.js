import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import '../App.css';
import styled from 'styled-components';



const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closedMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    }

  return (
    <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo'>JDM
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closedMobileMenu}>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/shop' className='nav-links' onClick={closedMobileMenu}>Shop</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/learnmore' className='nav-links' onClick={closedMobileMenu}>Learn More</Link>
                            </li>

                        </ul>
                        {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                    </div>
                </div>
            </nav>
        </>
   // <Container>Navbar</Container>
  )
}

export default Navbar;