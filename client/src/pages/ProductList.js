import React, { useState }  from 'react';
import Products from './Products';
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
    const location = useLocation();
    const category = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
  
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <section>
            <div className='performance-hero-image'></div>
            <h1>{category}</h1>
            <Container className='filter-container'>
                <div className='select-filter'>
                    <div className='filter-text'>Filter Products:</div>
                    <Filter className='filter'>
                    <Select className='select' onChange={handleFilters}>
                        <Option>Performance</Option>
                        <Option>Accessories</Option>
                        <Option>Merch</Option>
                    </Select>
                    </Filter>
                </div>
            </Container>
            <div className='filter-container'>
                <div className='sort-filter'>
                    <div className='filter-text'>Sort Products:</div>
                </div>
            </div>
            <Products category={category} filters={filters} />


        </section>
    )
}

export default ProductList;