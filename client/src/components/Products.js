import React from 'react';
import { useEffect, useState } from 'react';
import './Products.css';
import { popularProducts } from '../data';
import Product from '../components/Product';
import axios from 'axios';
import { Container } from '@material-ui/core';


const Products = ({category, filters}) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          //if item has a category go to category page otherwise show all products
          category ? `https://localhost:2100/api/products?category=${category}` :
          "http://localhost:2100/api/products"
          );
          setProducts(res.data);
        console.log(res);
 
        
      } catch (error) {
        console.log(error);
      };
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  return (
    <Container className='products-container'>
    {category
        ? filterProducts.map((item) => <Product item={item} key={item.id} />)
     : products.map((item) => <Product item={item} key={item.id} />)}
  </Container>

)}

export default Products;