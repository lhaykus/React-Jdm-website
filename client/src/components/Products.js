import React from 'react';
import { useEffect, useState } from 'react';
import './Products.css';
import { popularProducts } from '../data';
import Product from '../components/Product';
import axios from 'axios';
import { Container } from '@material-ui/core';


const Products = ({category, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          //if item has a category go to category page otherwise show all products
         // category ? `https://localhost:2100/api/products?category=${category}` :
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
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);








  return (
    <Container>
    { products.map((item) => <Product item={item} key={item.id} />)}
  </Container>

)}

export default Products;