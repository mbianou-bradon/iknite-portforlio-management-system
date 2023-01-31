import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DesignerHome from './components/DesignerHome';
import EngineerHome from './components/EngineerHome';
import Engineer from './components/EngineerCard';
import NewsandUpdate from './components/NewsandUpdates';
import Home from './pages/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App text-slate-900 selection:text-white selection:bg-violet-600">
      <Navbar/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
