import React from 'react';
import Products from '../components/Products';
import './ProductList.css';


const ProductList = () => {
  return (
    <section>
        <div className='performance-hero-image'></div>
        <h1>Performance Parts</h1>
        <div className='filter-container'>
        </div>
        <Products />
        
  
    </section>
  )
}

export default ProductList;