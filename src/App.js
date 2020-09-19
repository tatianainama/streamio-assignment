import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import TopAppBar from 'components/TopAppBar';
import Drawer from 'components/Drawer';

import routes from 'routeConfig';

import './normalize.css';
import './App.css';

function App() {
  
  return (
    <Router>
      <div className="dashboard">
        <Drawer drawerLinks={routes}/>
        <div className="main">
          <div className="menu">
            <TopAppBar></TopAppBar>
          </div>
          <div className="main-content">
            <div className="main-content__container">
              <Switch>
                <Route exact path="/" render={() => (<Redirect to="/dashboard"/>)}></Route>
                {
                  routes.map((route, key) => (
                    <Route path={route.href} key={key} render={route.component}/>
                  ))
                }
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
