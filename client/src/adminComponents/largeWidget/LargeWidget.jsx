import React from 'react';
import './largeWidget.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { userRequest } from '../../adminRedux/requestMethods';
import {format} from 'timeago.js';

const LargeWidget = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      const getOrders = async () => {
          try {
              const res = await userRequest.get('orders');
              setOrders(res.data);

          } catch (error) { }
      };
      getOrders();
  });

  //creating button to show status of approved/rejected/pending for status
  const Button = ({ type }) => {
    return <button className={"status-btn " + type}>{type}</button>;
  };
  return (
    <div className='large-widget'>
      <h3 className="large-widget-title">Latest transactions</h3>
      <table className="large-widget-table">
        <tr className="large-widget-tablerow">
          <th className="large-table-header">Customer</th>
          <th className="large-table-header">Date</th>
          <th className="large-table-header">Amount</th>
          <th className="large-table-header">Status</th>
        </tr>
        {orders.map((order) => 
        <tr className="large-widget-tablerow">
          <td className='large-widget-user'>
          
            <span className='user-name'>{order.userId}</span>
          </td>
          <td className='large-widget-date'>{format(order.createdAt)}</td>
          <td className='large-widget-amount'>${order.price}</td>
          <td className='large-widget-status'>
            <Button type={order.status}></Button>
          </td>
        </tr>
  )}
        </table>
      </div>

  )
}

export default LargeWidget;