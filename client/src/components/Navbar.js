import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, useTheme, useMediaQuery, List, Menu, MenuItem, ListItem } from '@material-ui/core';
import { ShoppingBasketOutlined } from '@material-ui/icons';
import './Navbar.css';
import '../App.css';
import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import HeroImage from './HeroImage';
import { mobile } from '../responsive';
import DrawerComponent from './DrawerComponent';


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

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    return (

        <>
            {isMatch ? (<DrawerComponent />) : (
                <nav className='navbar'>
                    <section className='navbar-container'>
                        <div className='navbar-container'>
                            <Link to='/' className='navbar-logo'>
                                <h4>Twins Turbo</h4>
                            </Link>
                            <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                            </div>
                            <List className={click ? 'nav-menu active' : 'nav-menu'}>
                                <ListItem className='nav-item'>
                                    <Link to='/' className='nav-links' onClick={closedMobileMenu}>Home</Link>
                                </ListItem>
                                <ListItem className='nav-item'>
                                    <Link to='/products' className='nav-links' onClick={closedMobileMenu}>Shop</Link>
                                </ListItem>
                                <ListItem className='nav-item'>
                                    <Link to='/learnmore' className='nav-links' onClick={closedMobileMenu}>Learn More</Link>
                                </ListItem>
                            </List>
                            <Link to='/login' className='navbar-btn-link'>
                                <div className='nav-btn'>
                                    <Button className='btns'
                                        variant="contained"
                                        color='primary'>
                                        Sign In
                                    </Button>
                                </div>
                            </Link>
                            <Link to='/cart'>
                                <Badge badgeContent={0} className='shopping-basket'>
                                    <ShoppingBasketOutlined />
                                </Badge>
                            </Link>
                        </div>
                    </section>
                </nav>
            )}
        </>
    )
}

export default Navbar;