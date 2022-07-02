import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import rotor from '../assets/images/rotor.jpg';
import './IndividualProduct.css';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import axios from 'axios';
//import { addProduct } from '../redux/cartRedux';
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
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  //Handling the quantity of item added to cart
  //If the quantity is greater than one, then quantity can be decreased 
  //else quantity is increased by 1
  const handleQuantity = (type) => {

      if(type === 'dec') {
          quantity > 1 && setQuantity(quantity - 1);
      }else {
          setQuantity(quantity + 1);
      };
  };

  //adding product to cart
 // const handleClick = () => {
   //   dispatch(
    //      addProduct({ ...product, quantity})
    //  );
 // };


  return (
    <section className='ind-product'>
      <div className='img-container'>
        <img className='indiv-img' src={product.img} />
        <div className='info-container'>
          <h1>{product.name}</h1>
          <p className='description-container'>
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksfjsfgjls;ldkfg
            jlksdfgjlk;sdglksdfj;ldks
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf f jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksfjsfgjls;ldkfg
            jlksdfgjlk;sdglksdfj;ldks
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf f jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksfjsfgjls;ldkfg
            jlksdfgjlk;sdglksdfj;ldks
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf f jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksfjsfgjls;ldkfg
            jlksdfgjlk;sdglksdfj;ldks
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf
            jsfgjls;ldkfgjlksdfgjlk;sdglksdfj;ldksf f  </p>
          <p>$280</p>
          
            <div className='cart-wrapper'>
              <Remove />
              <div className='add-amount'>1</div>
              <Add />
              <Button className='add-to-cart-btn' variant='contained' color='primary'>Add to Cart</Button>
            </div>
        
        </div>
      </div>
    </section>

  )
}

export default IndividualProduct;