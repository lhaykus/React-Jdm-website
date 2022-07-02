import { ShoppingBasketOutlined, Favorite } from '@material-ui/icons';
import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';


const Product = ({ item }) => {

    return (
        <div className='product-container'>
            <div className='product-info'>
            <Link to={`/product/${item._id}`}>
                <img src={item.img} className='product-img' />
                </Link>

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