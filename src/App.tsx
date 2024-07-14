import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/home';
import Coin from './pages/coin/coin';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinid' element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
