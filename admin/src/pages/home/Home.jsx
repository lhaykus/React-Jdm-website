import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import LargeWidget from '../../components/largeWidget/LargeWidget';
import SmallWidget from '../../components/smallWidget/SmallWidget';
import { userData } from '../../dummyData';
import './home.css';
import Topbar from '../../components/topbar/Topbar';
import { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { userRequest } from '../../redux/requestMethods';
import { RssFeed } from '@material-ui/icons';

const Home = () => {
  const [userstats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ],
    [],
  );

  useEffect(() => {
    //grabbing the user stats from the previous month
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats')
        res.data.map(item => {
          setUserStats(prev => [
            ...prev, 
            {name: MONTHS[item._id -1], "Active User" : item.total}
          ])
        })
        
      } catch (error) {
        
      ;}
    };
    getStats();

  }, [MONTHS]);
  

  console.log(userstats);


  return (
    <div className='home'>
      <Topbar />
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