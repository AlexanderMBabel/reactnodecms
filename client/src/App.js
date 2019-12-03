import React, { useState } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import history from './history';

import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Start from './components/Start';
import Dashboard from './components/dashboard/Dashboard';
import Posts from './components/dashboard/Posts';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logOutHandler = () => {
    window.localStorage.clear();
    setIsLoggedIn(false);
  };
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Navbar bg='light' expand='lg'>
            <LinkContainer to='/'>
              <Navbar.Brand>BlogSite</Navbar.Brand>
            </LinkContainer>

            <Nav className='mr-auto d-inline-flex '>
              {!isLoggedIn ? (
                <div className='d-inline-flex'>
                  <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </div>
              ) : (
                <LinkContainer to='/'>
                  <Nav.Link onClick={logOutHandler}>LogOut</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar>
        </div>
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
          <Route path='/dashboard'>
            <Dashboard />
          </Route>

          <Route path='/register'>
            <Register setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path='/login'>
            <Login setIsLoggedIn={setIsLoggedIn}></Login>
          </Route>
          <Route path='/'>
            <Start></Start>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
