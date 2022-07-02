import React, { useState }  from 'react';
import Products from '../components/Products';
import './ProductList.css';
import styled from "styled-components";
import { Container } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const Filter = styled.div`
 

`;

const Select = styled.select`
 

`;
const Option = styled.option``;



const ProductList = () => {
    //returns the location object to find url of categories
    const location = useLocation();
    //console.log(location);
    const category = location.pathname.split("/")[2];



    return (
        <section>
            <div className='performance-hero-image'></div>
            <h1>{category}</h1>
            <Container className='filter-container'>
                <div className='select-filter'>
                    <div className='filter-text'>Filter Products:</div>
                    <Filter className='filter'>
                    <Select name='category'>
                        <Option>Performance</Option>
                        <Option>Accessories</Option>
                        <Option>Merch</Option>
                    </Select>
                    </Filter>
                </div>
            </Container>
            <Products category={category} />


        </section>
    )
}

export default ProductList;