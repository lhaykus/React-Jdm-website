import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import './newUser.css';

const NewUser = () => {
    return (
        <div className='new-user'>
            <Topbar />
            <h1 className='new-user-title'>New User</h1>
            <form className='new-user-form'>
                <div className='new-user-item'>
                    <label>Username</label>
                    <input type='text' placeholder='loryn' />
                </div>
                <div className='new-user-item'>
                    <label>Full Name</label>
                    <input type='text' placeholder='loryn' />
                </div>
                <div className='new-user-item'>
                    <label>Email</label>
                    <input type='text' placeholder='jonsmith@email.com' />
                </div>
                <div className='new-user-item'>
                    <label>Password</label>
                    <input type='text' placeholder='password' />
                </div>
                <div className='new-user-item'>
                    <label>Phone Number</label>
                    <input type='text' placeholder='123456789' />
                </div>
                <div className='new-user-item'>
                    <label>Address</label>
                    <input type='text' placeholder='USA' />
                </div>
                <div className='new-user-item'>
                    <label>Gender</label>
                    <div className="user-gender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </div>
                    <div className="new-user-item">
                        <label>Active</label>
                        <select className="new-user-select" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button className='new-user-btn'>Create</button>
                </div>
            </form >
        </div>


    )
}

export default NewUser;