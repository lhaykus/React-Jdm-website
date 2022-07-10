import React from 'react';
import Chart from '../../adminComponents/chart/Chart';
import FeaturedInfo from '../../adminComponents/featuredInfo/FeaturedInfo';
import LargeWidget from '../../adminComponents/largeWidget/LargeWidget';
import SmallWidget from '../../adminComponents/smallWidget/SmallWidget';
import './home.css';
import Topbar from '../../adminComponents/topbar/Topbar';
import SideBar from '../../adminComponents/sidebar/Sidebar';

import { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { userRequest } from '../../adminRedux/requestMethods';
import { RssFeed } from '@material-ui/icons';


const Home = () => {
  const [userStats, setUserStats] = useState([]);

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
            { name: MONTHS[item._id - 1], "Active User": item.total }
          ])
        })

      } catch (error) {

        ;
      }
    };
    getStats();

  }, [MONTHS]);


  console.log(userStats);


  return (
    <div className='home'>
      <Topbar />
      <FeaturedInfo />
      <Chart data={userStats}
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