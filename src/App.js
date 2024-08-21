import React from 'react';
import TopNavbar from './components/TopNavbar/TopNavbar';
import SideNavbar from './components/SideNavbar/SideNavbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <SideNavbar />
      <div className="content">
        <h1> lleumeria </h1>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default App;
