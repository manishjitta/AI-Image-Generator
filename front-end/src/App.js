import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import React, { useCallback, useContext } from "react";

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BuyCredit from './pages/BuyCredit';
import Result from './pages/Result';
import Login from './components/Login';
import { AppContext } from './context/AppContext';

function App() {

  const {showLogin} = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b
     from-teal-50 to-orange-50'>
      
      <ToastContainer position='bottom-right'/>

      <NavBar />

      {showLogin && <Login />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
