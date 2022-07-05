import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import {HashRouter as Router, Routes, Route, Redirect,} from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';



const App = () => {
  return (
    <>
      <Router>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Routes>
            <Route exact path='/' element ={<Home />}/>
            <Route exact path="/users" element = {<UserList />}/>
            <Route exact path="/user/:userId" element = {<User />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;