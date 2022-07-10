import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import { useEffect, useState } from "react";
import './featuredInfo.css';
import { userRequest } from "../../adminRedux/requestMethods";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch { }
    };
    getIncome();
  }, []);
console.log(perc)

  return (
    <div className='featured'>
      <div className='featured-item'>
        <span className='featured-title'>Revanue</span>
        <div className='featured-money-container'>
          <span className='featured-money'>${income[1]?.total}</span>
          {/*If % is less than 0 have the arrow pointing down otehrwise have the arrow showing an 
          increase in percentage*/}
          <span className='money-direction'>
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className='featured-icon negative' />
            ) : (
              <ArrowUpward className='featured-icon' />
            )}
          </span>


        </div>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>Sales</span>
        <div className='featured-money-container'>
          <span className='featured-money'>$24120</span>
          <span className='money-direction'> +3.0
            <ArrowUpward className='featured-icon' />
          </span>

        </div>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>Price</span>
        <div className='featured-money-container'>
          <span className='featured-money'>$24120</span>
          <span className='money-direction'> +3.0
            <ArrowDownward className='featured-icon negative' />
          </span>

        </div>
      </div>
    </div>
  )
}

export default FeaturedInfo;