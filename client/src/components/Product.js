import { ShoppingBasketOutlined, Favorite } from '@material-ui/icons';
import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';


const Product = ({ item }) => {

    return (
        <div className='product-container'>
           
                <Link to={`/product/${item._id}`}>
                    <h2 style={{color:'black'}}> {item.name} </h2>
                    <br/>
                    <img src={item.img} className='product-img' />
                </Link>
                <div className='product-info'>
                <div className='icon'>
                    <ShoppingBasketOutlined />
                </div>
                <div className='icon'>
                    <Favorite />
                </div>
            </div>
        </div>

    )
}

export default Product;