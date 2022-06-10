import React from 'react';
import './Category.css';
import { Container, Button } from '@material-ui/core';


const CatergoryItem = ({ item }) => {
    return (
        <Container className='category-item-container'>
            <img src={item.img} className='category-img' />
            <br /><br />
            <div className='category-info'>
                <div className='category-title'>{item.title}</div>
                <Button variant='contained' color='secondary' className='category-btn'>Shop Now</Button>
            </div>
        </Container>
    )
}

export default CatergoryItem;