import React from 'react';
import './Category.css';
import { Button } from '@material-ui/core';


const CatergoryItem = ({ item }) => {
    return (
        <div className='category-item-container'>
            <img src={item.img} className='category-img' />
            <br /><br />
            <div className='category-info'>
                <div className='category-title'>{item.title}</div>
                <Button variant='contained' color='secondary' className='category-btn'>Shop Now</Button>
            </div>
        </div>
    )
}

export default CatergoryItem;