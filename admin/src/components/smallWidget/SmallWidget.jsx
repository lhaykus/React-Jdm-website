import { Visibility } from '@material-ui/icons';
import React from 'react';
import './smallWidget.css';

const SmallWidget = () => {
  return (
    <div className='small-widget'>
        <h3 className='small-widget-title'>New Members</h3>
        <ul className='small-widget-list'>
            <li className='small-widget-list-item'>
                <img src='https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                <div className='small-widget-user'>
                    <span className='small-widget-username'>Loryn Haykus Schwindt</span>
                    <span className='small-widget-jobtitle'>Software Devleoper</span>
                    <button className='small-widget-btn'>
                        <Visibility className='small-widget-icon' /> Show
                    </button>
                </div>
            </li>
            <li className='small-widget-list-item'>
                <img src='https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                <div className='small-widget-user'>
                    <span className='small-widget-username'>Loryn Haykus Schwindt</span>
                    <span className='small-widget-jobtitle'>Software Devleoper</span>
                    <button className='small-widget-btn'>
                        <Visibility  className='small-widget-icon'/> Show
                    </button>
                </div>
            </li>
            <li className='small-widget-list-item'>
                <img src='https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                <div className='small-widget-user'>
                    <span className='small-widget-username'>Loryn Haykus Schwindt</span>
                    <span className='small-widget-jobtitle'>Software Devleoper</span>
                    <button className='small-widget-btn'>
                        <Visibility  className='small-widget-icon' /> Show
                    </button>
                </div>
            </li>
            <li className='small-widget-list-item'>
                <img src='https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                <div className='small-widget-user'>
                    <span className='small-widget-username'>Loryn Haykus Schwindt</span>
                    <span className='small-widget-jobtitle'>Software Devleoper</span>
                    <button className='small-widget-btn'>
                        <Visibility className='small-widget-icon'  /> Show
                    </button>
                </div>
            </li>
            <li className='small-widget-list-item'>
                <img src='https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                <div className='small-widget-user'>
                    <span className='small-widget-username'>Loryn Haykus Schwindt</span>
                    <span className='small-widget-jobtitle'>Software Devleoper</span>
                    <button className='small-widget-btn'>
                        <Visibility className='small-widget-icon'  /> Show
                    </button>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default SmallWidget;