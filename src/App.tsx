import React from 'react';
import DesignerHome from './components/DesignerHome';
import EngineerHome from './components/EngineerHome';
import Engineer from './components/HomeCard';
import Home from './pages/Home';



function App() {
  return (
    <div className="App text-slate-900 selection:text-white selection:bg-violet-600">
      <Home/>
    </div>
  );
}

export default App;
