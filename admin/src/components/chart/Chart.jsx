import React from 'react';
import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { userData } from '../../dummyData';

const Chart = ({title, data, dataKey, grid }) => {


  return (
    //Creating a chart with recharts
    <div className='chart'>
        <h3 className='chart-title'>{title}</h3>
        <ResponsiveContainer width='100%' aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='purple'/>
                <Line type='monotone' dataKey={dataKey} stroke='purple'/>
                <Tooltip />
              {grid &&  <CartesianGrid stroke='#D3D3D3' strokeDasharray='4 4' />}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart;