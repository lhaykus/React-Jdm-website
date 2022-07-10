import { Cake, Call, MailOutline, People, Map, Publish } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Topbar from '../../adminComponents/topbar/Topbar';
import './user.css';
import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from "react";
import Sidebar from '../../adminComponents/sidebar/Sidebar';

const User = () => {
    const location = useLocation();
    const userId = location.pathname.split("/")[2];
    const [userStats, setUserStats] = useState([]);
  
    const user = useSelector((state) =>
      state.user.users.find((user) => user._id === userId)
    );
    
    return (
        <div className="user">
            <div className="user-title-container">
                <h1 className="user-title">Edit User</h1>
                <button className='add-user-btn'>Create</button>
            </div>
            <div className='user-container'>
                <div className='show-user'>
                    <div className='top'>
                        <img src={user.avatar}
                            className='show-user-img'></img>
                        <div className='show-user-title'>
                            <span className='show-user-fullName'>{user.fullName}</span>
                        
                        </div>
                    </div>
                    <div className='bottom'>
                        <span className='bottom-show-user-title'>Account Details</span>
                        <div className='show-user-info-container'>
                            <People className='user-icon' />
                            <span className='show-user-username'>{user.username}</span>
                        </div>
                        <br/>
                        <span className='bottom-show-user-title'>Contact Info</span>
                        <div className='show-user-info-container'>
                            <Call className='user-icon' />
                            <span className='show-user-text'>{user.phoneNumber}</span>
                        </div>
                        <br/>
                        <div className='show-user-info-container'>
                            <MailOutline className='user-icon' />
                            <span className='show-user-text'>{user.email}</span>
                        </div>
                        <br/>
                        <div className='show-user-info-container'>
                            <Map className='user-icon' />
                            <span className='show-user-text'>{user.country}</span>
                        </div>
                    </div>
                </div>

                <div className='update-user'>
                    <div className='update-user-title'>Edit</div>
                    <form className='update-user-form'>
                        <div className='update-user-left'>
                            <div className='update-user-item'>
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="username"
                                    className="update-user-input"
                                />
                            </div>
                            <div className="update-user-item">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Jon Snow"
                                    className="update-user-input"
                                />
                            </div>
                            <div className="update-user-item">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="jonsnow@gmail.com"
                                    className="update-user-input"
                                />
                            </div>
                            <div className="update-user-item">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder="123 456 789"
                                    className="update-user-input"
                                />
                            </div>
                            <div className="update-user-item">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="Colorado | USA"
                                    className="update-user-input"
                                />
                            </div>
                            <div className="update-user-right">
                                <div className="update-user-upload">
                                    <img
                                        className="update-user-img"
                                        src="https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt=""
                                    />
                                    <label htmlFor="file">
                                        <Publish className="update-user-icon" />
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </div>
                                <button className="update-btn">Update</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div >

    )
}

export default User;