import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Start from './components/Start';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg='light' expand='lg'>
          <LinkContainer to='/'>
            <Navbar.Brand>BlogSite</Navbar.Brand>
          </LinkContainer>
          <Nav className='mr-auto'>
            <LinkContainer to='/login'>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/'>
          <Start></Start>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
