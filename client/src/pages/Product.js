import { ShoppingBasketOutlined, Favorite } from '@material-ui/icons';
import React from 'react';
import './Product.css';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = ({ item }) => {
    return (
        <div className='product-container'>
            <div className='product-info'>
                <img src={item.img} className='product-img' />
                <div className='basket-icon'>
                    <ShoppingBasketOutlined />
                </div>
                <div className='favorite-icon'>
                    <Favorite />
                </div>
            </div>


        </div>
        
    )
}

export default Product;