import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <>
   <Topbar />
   <div className='container'>
   <Sidebar />
   <Home />
   </div>
   </>
  )
}

export default App;