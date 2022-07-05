import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import LargeWidget from '../../components/largeWidget/LargeWidget';
import SmallWidget from '../../components/smallWidget/SmallWidget';
import { userData } from '../../dummyData';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart  data={userData}
        title="User Stats"
        grid
        dataKey="Active User" />
        <div className='home-widget'>
          <SmallWidget />
          <LargeWidget />
        </div>
    </div>
  )
}

export default Home;