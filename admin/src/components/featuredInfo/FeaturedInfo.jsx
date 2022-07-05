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
                <span className='money-direction'> +3.0
                <ArrowUpward  className='featured-icon'/>
                </span>
        
                
            </div>
            </div>
            <div className='featured-item'>
            <span className='featured-title'>Sales</span>
            <div className='featured-money-container'>
                <span className='featured-money'>$24120</span>
                <span className='money-direction'> +3.0
                <ArrowUpward  className='featured-icon'/>
                </span>
           
            </div>
       </div>
       <div className='featured-item'>
            <span className='featured-title'>Price</span>
            <div className='featured-money-container'>
                <span className='featured-money'>$24120</span>
                <span className='money-direction'> +3.0
                <ArrowDownward  className='featured-icon negative'/>
                </span>
          
            </div>
       </div>
    </div>
  )
}

export default FeaturedInfo;