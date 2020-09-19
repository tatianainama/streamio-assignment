import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import TopAppBar from 'components/TopAppBar';
import Drawer from 'components/Drawer';

import Dashboard from 'containers/Dashboard';

import './normalize.css';
import './App.css';

function App() {
  const drawerLinks = [
    { icon: 'dashboard', label: 'dashboard', href: '/dashboard' },
    { icon: 'hospital-sign', label: 'dr. profiles', href: '/dr-profiles' },
    { icon: 'secure-shield', label: 'organization', href: '/organization' },
    { icon: 'shield', label: 'department', href: '/department' },
    { icon: 'apple', label: 'settings', href: '/settings' }
  ];

  return (
    <Router>
      <div className="dashboard">
        <Drawer drawerLinks={drawerLinks}/>
        <div className="main">
          <div className="menu">
            <TopAppBar></TopAppBar>
          </div>
          <div className="main-content">
            <div className="main-content__container">
              <Switch>
                <Route exact path="/" render={() => (<Redirect to="/dashboard"/>)}></Route>
                <Route path="/dashboard">
                  <Dashboard/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
