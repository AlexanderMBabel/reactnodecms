import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './history';

import './App.css';
import NavigationBar from './components/NavigationBar';
import ShowAlert from './components/ShowAlert';
import Register from './components/Register';
import Login from './components/Login';
import Start from './components/Start';
import Dashboard from './components/dashboard/Dashboard';
import Posts from './components/posts/Posts';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/utils/PrivateRoute';
import setAuthToken from './utils/setauthtoken';
import { loadUser } from './actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App({ isAuthenticated }) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        <NavigationBar />
        <ShowAlert />
        <Switch>
          {/* <Route path='/dashboard/posts'>
            <div className='grid-container'>
              <div>
                <Dashboard />
              </div>
              <div>
                <Posts />
              </div>
            </div>
          </Route> */}
          <PrivateRoute exact path='/dashboard/posts' component={Posts} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />

          <Route path='/register'>
            <Register />
          </Route>
          <Route exact path='/login' component={Login} />

          <Route path='/'>
            <Start></Start>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
