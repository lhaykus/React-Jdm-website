import React from 'react';
import './Cart.css';
import { Container, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import gears from '../assets/images/gears.jpg';

const Cart = () => {
  return (
    <section>
      <h1>Your Cart</h1>
      <Container id='cart-container'>
        <Link to='/products'>
          <Button id='cart-btns' variant='outlined'>Continue Shopping</Button>
        </Link>
        <br /><br />
        <Link to='/checkout'>
          <Button className='cart-btns' variant='outlined'>Check Out</Button>
        </Link>
        </Container>
        <Box className='cart-items-box'>
          <div className='product'>
            <img src = {gears} />
            <div className='product-details'>
              <p><b>Gears</b></p>
              <p className='product-id'>121321324654</p>
              <p className='product-price'>$30</p>

            </div>
          </div>
        </Box>








     

    </section>
  )
}

export default Cart;