import React from 'react';
import './Cart.css';
import { Container, Button, Box, List } from '@material-ui/core';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";
import { Add, Remove } from '@material-ui/icons';
import { loadStripe } from '@stripe/stripe-js';
import { removeProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';


//publishiable key for stripe
const KEY = process.env.PUB_STRIPE_KEY ;






const Cart = () => {

  //function to use token from stripe
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  //adding product to cart
//  const handleClick = () => {
   // dispatch(
   //     removeProduct({ ...product, quantity})
   // );
//};


  return (
    <Container>
      <Box id='cart-wrapper'>
        <h1>YOUR BAG</h1>
        <div id='top-section'>
        <Link to='/products'>
          <Button id='cart-btns' variant='outlined'>Continue Shopping</Button>
        </Link>
        <Link to ='/checkout'>
          <StripeCheckout id='stripe'
            name="Jdm Website"
            image="https://visracing.com/images/M198738582"
            billingAddress
            shippingAddress
            description={`Your total is ${cart.total}`}
            price={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <Button id='checkout-btn'>Checkout</Button>
          </StripeCheckout>
          </Link>
        </div>
        <Container id='bottom-section'>
          <section id='cart-info'>
            {cart.products.map((product) => (
              <section id = 'product-info'>
                <div id='product-detail'>
                  <img src={product.img} />
                  <div id='products-info' >
                    <h2> {product.name}</h2>
                    <div>
                      <b>ID:</b> {product._id}
                    </div>
                  </div >
                </div>
                <section id='price-detail'>
                  <div id='quantity-detail'>
                    <Add />
                    <div>{product.quantity}</div>

                   <Remove  />
                  </div>
                  <div id='product-price'>
                    $ {product.price * product.quantity}
                  </div>
                </section>
              </section>
            ))}
          </section>
          <section id='summary-section'>
            <h1>SUMMARY</h1>
            <List className='summary-list'>
              <div className='summary-price'>Subtotal</div>
              <div>$ {cart.total}</div>
            </List>
            <List className='summary-list'>
              <div className='summary-price'>Estimated Shipping</div>
              <div>$ 5.90</div>
            </List>
            <List className='summary-list'>
              <div className='summary-price'>Shipping Discount</div>
              <div>$ -5.90</div>
            </List>
            <List className='summary-list'>
              <div className='summary-price'>Total</div>
              <div>$ {cart.total}</div>
            </List>
          </section>
        </Container>
      </Box>
    </Container>
  );
};

export default Cart;