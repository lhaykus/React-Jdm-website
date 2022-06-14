import React from 'react';
import './Cart.css';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <section>
      <h1>Your Cart</h1>
      <Container id='cart-container'>
        <Link to='/shop'>
          <Button id='cart-btns' variant='outlined'>Continue Shopping</Button>
        </Link>
        <br /><br />
        <Link to='/checkout'>
          <Button className='cart-btns' variant='outlined'>Check Out</Button>
        </Link>
      </Container>
    </section>
  )
}

export default Cart;