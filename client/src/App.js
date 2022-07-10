import './App.css';
import { HashRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import HeroImage from './components/HeroImage';
import ProductList from './pages/ProductList';
import Footer from './components/Footer';
import IndividualProduct from './pages/IndividualProduct';
import LearnMore from './pages/LearnMore';
import Scroll from './components/Scroll';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Sidebar from './adminComponents/sidebar/Sidebar';
import Topbar from './adminComponents/topbar/Topbar';
import UserList from './adminPages/userList/UserList';
import User from './adminPages/user/User';
import NewUser from './adminPages/newUser/NewUser';
import AdminProductList from './adminPages/productList/ProductList';
import AdminProduct from './adminPages/product/Product';
import NewProduct from './adminPages/newProduct/NewProduct';
import AdminLogin from './adminPages/login/Login';
import AdminHome from './adminPages/home/Home'

function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.isAdmin;
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<IndividualProduct />} />
        <Route path='/learnmore' element={<LearnMore />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>



      <div className='container'>

        <Sidebar />
        <Routes>
          <Route path='/login' element={<AdminLogin />} />
          {admin && (
            <>
              <Route path='/admin' element={<AdminHome />} />
              <Route exact path="/users" element={<UserList />} />
              <Route exact path="/user/:userId" element={<User />} />
              <Route exact path="/newUser" element={<NewUser />} />
              <Route exact path="/products" element={<AdminProductList />} />
              <Route exact path="/product/:productsId" element={<AdminProduct />} />
              <Route exact path="/newProduct" element={<NewProduct />} />
            </>
          )}

        </Routes>
      </div>


    </div>
  );
}

export default App;
