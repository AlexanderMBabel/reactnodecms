import React, { useState, useEffect } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';

import history from './history';

import './App.css';
import NavigationBar from './components/NavigationBar';
import ShowAlert from './components/ShowAlert';
import Register from './components/Register';
import Login from './components/Login';
import Start from './components/Start';
import Dashboard from './components/dashboard/Dashboard';
import Posts from './components/dashboard/Posts';

import { Provider } from 'react-redux';
import store from './store';
import { connect } from 'react-redux';
import PrivateRoute from './components/utils/PrivateRoute';
import setAuthToken from './utils/setauthtoken';
import { loadUser, logout } from './actions/auth';
import PropTypes from 'prop-types';
import auth from './reducers/auth';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App({ isAuthenticated }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        <NavigationBar />
        <ShowAlert />
        <Switch>
          <Route path='/dashboard/posts'>
            <div className='grid-container'>
              <div>
                <Dashboard />
              </div>
              <div>
                <Posts />
              </div>
            </div>
          </Route>
          <PrivateRoute exact path='/dashboard' component={Dashboard} />

          <Route path='/register'>
            <Register setIsLoggedIn={setIsLoggedIn} />
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
