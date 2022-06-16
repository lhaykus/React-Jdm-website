import React from 'react';
import { useEffect, useState } from 'react';
import './Products.css';
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';


const Products = ({category, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category ? `http://localhost:2100/api/products?category=${category}`
          : `http://localhost:2100/api/products`
        );
        setProducts(res.data);
        
      } catch (error) {
      };
    };
    getProducts();
  }, [category]);








  return (
    <div className='products-container'>
        {popularProducts.map((item => (
            <Product item={item} key={item.id} />
        )))}

    </div>
  )
}

export default Products;