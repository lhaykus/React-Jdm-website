import React, { Fragment } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { HashRouter as Router, Routes, Route, Redirect, } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';




const App = () => {
  const admin = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.isAdmin;
  return (

    <div className='container'>

      <Sidebar />
      <Routes>
        <Route path='/login' element={<Login />} />
        {admin && (
          <>
            <Route path='/' element={<Home />} />
            <Route exact path="/users" element={<UserList />} />
            <Route exact path="/user/:userId" element={<User />} />
            <Route exact path="/newUser" element={<NewUser />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/product/:productsId" element={<Product />} />
            <Route exact path="/newProduct" element={<NewProduct />} />
          </>
        )}

      </Routes>
    </div>

  )
}

export default App;

