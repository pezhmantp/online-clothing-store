import React from 'react';
import './App.css';
import {banner} from './components/exports'
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <img src={banner} className='banner'/>
      <Routes>
        <Route index element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
