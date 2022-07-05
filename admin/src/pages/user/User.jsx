import { Cake, Call, MailOutline, People, Map } from '@material-ui/icons';
import React from 'react';
import './user.css';

const User = () => {
    return (
        <div className="user">
            <div className="user-title-container">
                <h1 className="user-title">Edit User</h1>
                <button className='add-user-btn'>Create</button>
            </div>
            <div className='user-container'>
                <div className='show-user'>
                    <div className='top'>
                        <img src='https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='avatar'
                            className='show-user-img'></img>
                        <div className='show-user-title'>

                            <span className='show-user-username'>Loryn Haykus-Schwindt</span>
                            <span className='show-user-jobtitle'>Software Developer</span>
                        </div>
                    </div>
                    <div className='bottom'>
                        <span className='bottom-show-user-title'>Account Details</span>
                        <div className='show-user-info-container'>
                            <People className='user-icon' />
                            <span className='show-user-text'>lorynh</span>
                        </div>
                        <div className='show-user-info-container'>
                            <Cake className='user-icon' />
                            <span className='show-user-text'>10/21/1996</span>
                        </div>
                        <span className='bottom-show-user-title'>Contact Info</span>
                        <div className='show-user-info-container'>
                            <Call className='user-icon' />
                            <span className='show-user-text'>123 456 789</span>
                        </div>
                        <div className='show-user-info-container'>
                            <MailOutline className='user-icon' />
                            <span className='show-user-text'>lorynh@gmail.com</span>
                        </div>
                        <div className='show-user-info-container'>
                            <Map className='user-icon' />
                            <span className='show-user-text'>Colorado | USA</span>
                        </div>


                    </div>
                </div>

                <div className='update-user'> </div>




            </div>
        </div>
    )
}

export default User;