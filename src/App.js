import React from 'react';

import Link from './components/Link';
import Card from './components/Card';
import Chip from './components/Chip';
import TopAppBar from './components/TopAppBar';

import sampleImg from './sample.png';

import './normalize.css';
import './App.css';

function App() {
  const drawerLinks = [
    { label: 'dashboard', href: '#' },
    { label: 'dr. profiles', href: '#' },
    { label: 'organization', href: '#' },
    { label: 'department', href: '#' },
    { label: 'settings', href: '#' }
  ];

  return (
    <div className="dashboard">
      <aside className="drawer">
        <div>
          icon
        </div>

        <nav className="nav-links">
          {
            drawerLinks.map((link, key) => (
              <Link key={key} href={link.href}>{link.label}</Link>
            ))
          }
        </nav>
        <div>
          <Card
            align="center"
          >
            <Chip>New</Chip>
            <h3>Northwester Mem-Hospital</h3>
            <img src={sampleImg} alt="news"></img>
          </Card>
        </div>
      </aside>
      <div className="main">
        <div className="menu">
          <TopAppBar></TopAppBar>
        </div>
        <div className="main-content">
          <div className="main-content__container">
            <h2>Analytics Overview</h2>
            <p>
              stuff
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
