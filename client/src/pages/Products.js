import React from 'react';
import { useEffect, useState } from 'react';
import './Products.css';
import { popularProducts } from '../data';
import Product from '../components/Product';
import axios from 'axios';


const Products = ({category, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          //if item has a category go to category page otherwise show all products
          category ? `https://localhost:2100/api/products?category=${category}` :
          "https://localhost:2100/api/products"
          );
          setProducts(res.data);
        console.log(res);
 
        
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