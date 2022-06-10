import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CatergoryItem from './CatergoryItem';

const Container = styled.div`
      display: flex;
      padding: 20px;

`;

const Categories = () => {
  return (
    <div>
        {categories.map(item =>(
            <CatergoryItem item={item} />
        ))}

    </div>
  )
}

export default Categories;