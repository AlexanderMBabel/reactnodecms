import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types';

const NavigationBar = ({ isAuthenticated, logout }) => {
  const logOutHandler = () => {
    logout();
  };
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <LinkContainer to='/'>
          <Navbar.Brand>BlogSite</Navbar.Brand>
        </LinkContainer>

        <Nav className='mr-auto d-inline-flex '>
          {!isAuthenticated ? (
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
  );
};

NavigationBar.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(NavigationBar);
