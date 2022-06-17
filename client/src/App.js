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

function App() {
  return (
    <div>
   
    <Navbar />
    <Routes>
       <Route path = '/' element ={<Home />} />
       <Route path = '/login' element={<Login />}  />
       <Route path = '/products' element={<ProductList />} />
       <Route path = '/product/:id' element={<IndividualProduct />} />
       <Route path = '/learnmore' element={<LearnMore />} />
       <Route path ='/signup' element={<Signup />} />
       <Route path ='/cart' element={<Cart />} />
     </Routes>
     <Footer />
     <Scroll showBelow={250} />
  
    </div>
  );
}

export default App;
