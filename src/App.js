import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { StreamApp, NotificationDropdown } from 'react-activity-feed';

import TopAppBar from 'components/TopAppBar';
import Drawer from 'components/Drawer';
import IconButton from 'components/IconButton';

import routes from 'routeConfig';

import './normalize.css';
import './App.css';

function App() {

  return (
    <Router>
      <div className="dashboard">
        <StreamApp
          apiKey="ngpbahxsnkv8"
          appId="95481"
          token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.GyDzqSB32XHMGkevRCXmCxN1EurMvdFLxYBwjlalVnc"
        >
          <Drawer drawerLinks={routes}/>
          <div className="main">
            <div className="menu">
              <TopAppBar>
                <NotificationDropdown
                  notify
                  right
                  Icon={<IconButton icon='notifications_none'/>}
                />
              </TopAppBar>
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
        </StreamApp>
      </div>
    </Router>
  );
}

export default App;
