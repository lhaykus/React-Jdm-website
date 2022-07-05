import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './featuredInfo.css';

const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className='featured-item'>
            <span className='featured-title'>Revanue</span>
            <div className='featured-money-container'>
                <span className='featured-money'>$24120</span>
                <ArrowDownward />
                <ArrowUpward />
            </div>

        </div>
    </div>
  )
}

export default FeaturedInfo;