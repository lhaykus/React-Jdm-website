import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
    <HeroImage />
    <Categories/>
    <Products />
    <Newsletter />
    <Footer />
    </div>
  
  );
}

export default Home;