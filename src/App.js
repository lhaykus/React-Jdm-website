import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import HeroImage from './components/HeroImage';
import ProductList from './pages/ProductList';
import Footer from './components/Footer';
import IndividualProduct from './pages/IndividualProduct';
import LearnMore from './pages/LearnMore'; 
import Scroll from './components/Scroll';

function App() {
  return (
    <div>
   
    <Navbar />
    <Routes>
       <Route path = '/' element ={<Home />} />
       <Route path = '/login' element={<Login />} />
       <Route path = '/shop' element={<ProductList />} />
       <Route path = '/product' element={<IndividualProduct />} />
       <Route path = '/learnmore' element={<LearnMore />} />
     </Routes>
     <Footer />
     <Scroll showBelow={250} />
  
    </div>
  );
}

export default App;
