import React from 'react';
import './largeWidget.css';

const LargeWidget = () => {
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
        <tr className="large-widget-tablerow">
          <td className='large-widget-user'>
            <img src='https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='large-widget-img' />
            <span className='user-name'>Loryn Haykus Schwindt</span>
          </td>
          <td className='large-widget-date'>7/4/2022</td>
          <td className='large-widget-amount'>$121</td>
          <td className='large-widget-status'>
            <Button type='approved'></Button>
          </td>

        </tr>
        <tr className="large-widget-tablerow">
          <td className='large-widget-user'>
            <img src='https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='large-widget-img' />
            <span className='user-name'>Loryn Haykus Schwindt</span>
          </td>
          <td className='large-widget-date'>7/4/2022</td>
          <td className='large-widget-amount'>$121</td>
          <td className='large-widget-status'>
            <Button type='declined'></Button>
          </td>

        </tr>
        <tr className="large-widget-tablerow">
          <td className='large-widget-user'>
            <img src='https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='large-widget-img' />
            <span className='user-name'>Loryn Haykus Schwindt</span>
          </td>
          <td className='large-widget-date'>7/4/2022</td>
          <td className='large-widget-amount'>$121</td>
          <td className='large-widget-status'>
            <Button type='pending'></Button>
          </td>

        </tr>
        </table>
      </div>

  )
}

export default LargeWidget;