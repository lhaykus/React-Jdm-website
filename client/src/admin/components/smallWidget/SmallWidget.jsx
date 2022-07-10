import { Visibility } from '@material-ui/icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './smallWidget.css';
import { userRequest } from '../../redux/requestMethods';

const SmallWidget = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get('users/?new=true');
                setUsers(res.data);

            } catch (error) { }
        };
        getUsers();
    })
    
    return (
        <div className='small-widget'>
            <h3 className='small-widget-title'>New Members</h3>
            <ul className='small-widget-list'>
                {users.map((user) => (


                    <li className='small-widget-list-item' key={user._id}>
                        <img src={user.avatar || 'https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}></img>
                        <div className='small-widget-user'>
                            <span className='small-widget-username'>{user.username}</span>
                            <button className='small-widget-btn'>
                                <Visibility className='small-widget-icon' /> Show
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SmallWidget;