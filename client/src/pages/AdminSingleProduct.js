import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './IndividualProduct.css';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import { publicRequest } from '../requestMethods';


const IndividualProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  //To get individual product 
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/admin/products/find/" + id);
        setProduct(res.data);
      } catch { }
    };
    getProduct();
  }, [id]);

  //Handling the quantity of item added to cart
  //If the quantity is greater than one, then quantity can be decreased 
  //else quantity is increased by 1
  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    };
  };

  //adding product to cart
  const handleClick = () => {

    dispatch(
      addProduct({ ...product, quantity })
    );
  };


  return (
    <section className='ind-product'>
       <Link to='/admin/products'>
          <Button id='cart-btns' variant='outlined'>Continue Shopping</Button>
        </Link>
      <div className='img-container'>
        <img className='indiv-img' src={product.img} />
        <div className='info-container'>
          <h1>{product.name}</h1>
          <p className='description-container'>
            {product.description} </p>
            <p className='features'>Features: {product.features}</p>
            <p className='features'>Weight: {product.weight} lbs</p>
            <p id='product-price'>${product.price}</p>


          <div className='cart-wrapper'>
            <Remove onClick={() => handleQuantity('dec')} />
            <div>{quantity}</div>
            <Add onClick={() => handleQuantity('inc')} />
            <Button onClick={handleClick} className='add-to-cart-btn'
              variant='contained' color='primary'>Add to Cart</Button>
          </div>

        </div>
      </div>
    </section>

  )
}

export default IndividualProduct;