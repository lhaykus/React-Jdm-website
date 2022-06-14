import React from 'react';
import Products from './Products';
import './ProductList.css';
import './ProductList.css';
import styled from "styled-components";

const Filter = styled.div`
 

`;

const Select = styled.select`
 

`;
const Option = styled.option``;



const ProductList = () => {
    return (
        <section>
            <div className='performance-hero-image'></div>
            <h1>Performance Parts</h1>
            <div className='filter-container'>
                <div className='select-filter'>
                    <div className='filter-text'>Filter Products:</div>
                    <Filter className='filter'>
                    <Select className='select'>
                        <Option>Performance</Option>
                        <Option>Accessories</Option>
                        <Option>Merch</Option>
                    </Select>
                    </Filter>
                </div>
            </div>
            <div className='filter-container'>
                <div className='sort-filter'>
                    <div className='filter-text'>Sort Products:</div>
                </div>
            </div>
            <Products />


        </section>
    )
}

export default ProductList;