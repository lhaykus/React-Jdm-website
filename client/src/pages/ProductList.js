import React, { useState } from 'react';
import Products from '../components/Products';
import './ProductList.css';
import styled from "styled-components";
import { Container } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
    //returns the location object to find url of categories
    const location = useLocation();
    //console.log(location);
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
   

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
            <h1>{cat}</h1>
            <Container className='filter-container'>
                <div className='select-filter'>
                    <div className='filter-text'>Filter Products:</div>
                    <div className='filter'>
                        <select name='cat' onChange={handleFilters}>
                            <option value='performance'>Performance</option>
                            <option value='accessories'>Accessories</option>
                            <option value='merch'>Merch</option>
                        </select>
                    </div>
                </div>
            </Container>
            <Products cat={cat} filters={filters} sort={sort} />


        </section>
    )
}

export default ProductList;