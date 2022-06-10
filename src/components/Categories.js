import React from 'react';
import { categories } from '../data';
import CatergoryItem from './CatergoryItem';
import './Category.css';


const Categories = () => {
  return (
    <div className='category-container'>
        {categories.map((item => (
            <CatergoryItem item={item} key={item.id} />
        )))}

    </div>
  )
}

export default Categories;