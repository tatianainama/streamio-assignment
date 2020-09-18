import React from 'react';

import TopAppBar from 'components/TopAppBar';
import Drawer from 'components/Drawer';

import Dashboard from 'containers/Dashboard';

import './normalize.css';
import './App.css';

function App() {
  const drawerLinks = [
    { icon: 'dashboard', label: 'dashboard', href: '#' },
    { icon: 'hospital-sign', label: 'dr. profiles', href: '#' },
    { icon: 'secure-shield', label: 'organization', href: '#' },
    { icon: 'shield', label: 'department', href: '#' },
    { icon: 'apple', label: 'settings', href: '#' }
  ];

  return (
    <div className="dashboard">
      <Drawer drawerLinks={drawerLinks}/>
      <div className="main">
        <div className="menu">
          <TopAppBar></TopAppBar>
        </div>
        <div className="main-content">
          <div className="main-content__container">
            <Dashboard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
