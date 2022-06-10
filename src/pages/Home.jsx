import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
    <HeroImage />
    <Categories/>
    <Products />
    </div>
  
  );
}

export default Home;