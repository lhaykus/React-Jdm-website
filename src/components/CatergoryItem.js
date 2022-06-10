import React from 'react';
import './Category.css';
import { Button } from '@material-ui/core';


const CatergoryItem = ({ item }) => {
    return (
        <div>

            <img src={item.img} className='category-img' />
            <br /><br />
            <div>
                <div className='category-title'>{item.title}</div>
                <Button className='category-btn'>Shop Now</Button>
            </div>
        </div>
    )
}

export default CatergoryItem;