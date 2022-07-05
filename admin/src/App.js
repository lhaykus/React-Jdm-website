import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import {HashRouter as Router, Routes, Route, Redirect,} from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';



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
            <Route exact path="/newUser" element = {<NewUser />}/>
            <Route exact path="/products" element = {<ProductList />}/>
            <Route exact path="/products/:productsId" element = {<User />}/>
            <Route exact path="/newProduct" element = {<NewUser />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;