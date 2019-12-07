import React, { useState } from 'react';
import { Form, Alert, Button } from 'react-bootstrap';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';
import history from '../history';
import { login } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../actions/alert';

const Login = ({ login, isAuthenticated, setAlert }) => {
  const [loginData, setLoginData] = useState({ email: ' ', password: '' });
  const [alertData, setAlertData] = useState([]);
  const changeHandler = e => {
    const newData = loginData;
    newData[e.target.name] = e.target.value;
    setLoginData(newData);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(loginData);
    } catch (err) {
      console.error(err);
      setAlert(err);
    }

    // axios
    //   .post('http://localhost:4000/api/auth/login', loginData)
    //   .then(result => {
    //     console.log(result);
    //     window.localStorage.setItem('token', result.data);
    //     setIsLoggedIn(true);
    //     history.push('/dashboard');
    //   })
    //   .catch(error => setAlertData([...alertData, error.message]));
  };
  if (isAuthenticated) {
    history.push('/dashboard');
  }
  return (
    <div>
      {alertData.map(alert => (
        <Alert key={alert} variant='danger'>
          {alert}
        </Alert>
      ))}
      <Form className='m-5'>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={loginData.value}
            placeholder='email'
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            value={loginData.value}
            placeholder='password'
            onChange={changeHandler}
          />
        </Form.Group>
        <Button type='submit' onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </div>
  );
};
login.protoTypes = {
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, setAlert })(withRouter(Login));
