import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Grid } from '@material-ui/core';

const Chart = () => {

    const data = [
        {
          name: 'Jan',
          "Active User": 4000,

        },
        {
          name: 'Feb',
          "Active User": 3000,

        },
        {
          name: 'March',
          "Active User": 2000,

        },
        {
          name: 'April',
          "Active User": 2780,
        },
        {
          name: 'May',
          "Active User": 1890,
        },
        {
          name: 'June',
          "Active User": 2390,
        },
        {
          name: 'July',
          "Active User": 3490,

        },
        {
            name: 'August',
            "Active User": 3000,
  
          }, {
            name: 'SEptember',
            "Active User": 3490,
  
          }, {
            name: 'October',
            "Active User": 5000,
  
          }, {
            name: 'November',
            "Active User": 2100,
  
          }, {
            name: 'December',
            "Active User": 6362,
  
          },
      ];

  return (
    //Creating a chart with recharts
    <div className='chart'>
        <h3 className='chart-title'>Sales</h3>
        <ResponsiveContainer width='100%' aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='purple'/>
                <Line type='monotone' dataKey='Active User' stroke='purple'/>
                <Tooltip />
                <CartesianGrid stroke='#D3D3D3' strokeDasharray='4 4' />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart;