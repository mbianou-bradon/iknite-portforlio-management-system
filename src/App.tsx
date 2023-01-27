import React from 'react';
import DesignerHome from './components/DesignerHome';
import EngineerHome from './components/EngineerHome';
import Engineer from './components/EngineerCard';
import NewsandUpdate from './components/NewsandUpdates';
import Home from './pages/Home';
import Profile from './components/Profile';



function App() {
  return (
    <div className="App text-slate-900 selection:text-white selection:bg-violet-600">
      <Profile/>
    </div>
  );
}

export default App;
