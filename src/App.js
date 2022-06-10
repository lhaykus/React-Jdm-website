import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import HeroImage from './components/HeroImage';
import ProductList from './pages/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
       <Route path = '/' element ={<Home />} />
       <Route path = '/login' element={<Login />} />
       <Route path = '/shop' element={<ProductList />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
