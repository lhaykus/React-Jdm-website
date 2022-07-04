import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
    <Banner />
    <HeroImage />
    <Categories/>
    <br/> <br/> <br/>
    <Products />
    <Newsletter />
    </div>
  
  );
}

export default Home;