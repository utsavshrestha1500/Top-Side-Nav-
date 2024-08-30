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
      <div class="container text-center py-5">
        <h2 class="mb-4">Welcome to Zentura Agency Hub</h2>

        <ul class="list-unstyled">
            <li class="mb-3">
                <p>Creativity</p>
            </li>
            <li class="mb-3">
                <p>Timelessness</p>
            </li>
            <li class="mb-3">
                <p>Collaborative Power</p>
            </li>
        </ul>
    </div>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default App;
