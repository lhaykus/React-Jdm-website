import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import HeroImage from './components/HeroImage';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
       <Route path = '/' element ={<Home />} />
       <Route path = '/login' element={<Login />} />
     </Routes>
    </div>
  );
}

export default App;
