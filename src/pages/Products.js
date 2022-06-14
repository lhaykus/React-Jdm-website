import React from 'react';
import './Products.css';
import { popularProducts } from '../data';
import Product from './Product';
import { Container } from '@material-ui/core';

const Products = () => {
  return (
    <Container className='products-container'>
        {popularProducts.map((item => (
            <Product item={item} key={item.id} />
        )))}

    </Container>
  )
}

export default Products;