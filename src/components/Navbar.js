import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { ShoppingBasketOutlined, ShoppingCart } from '@material-ui/icons';
import './Navbar.css';
import '../App.css';
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import HeroImage from './HeroImage';



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
                                <Link to='/product' className='nav-links' onClick={closedMobileMenu}>Individual Product</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/learnmore' className='nav-links' onClick={closedMobileMenu}>Learn More</Link>
                            </li>



                        </ul>
                        <Link to='/login' className='navbar-btn-link'>
                            <div className='nav-btn'>
                                <Button className='btns'
                                    variant="contained"
                                    color='primary'>
                                    Sign In
                                </Button>
                            </div>
                        </Link>
                        <Link to ='/cart'>
                        <Badge badgeContent={4} className='shopping-basket'>
                            <ShoppingBasketOutlined />
                        </Badge>
                        </Link>



                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbar;