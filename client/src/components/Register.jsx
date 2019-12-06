import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';

import axios from 'axios';
import history from '../history';

const Register = ({ setIsLoggedIn, setAlert, register }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    password2: ''
  });
  const [validateAlert, setValidateAlert] = useState([]);
  const validate = () => {
    let isValid = true;
    const { email, name, password, password2 } = formData;

    if (email === '') {
      setAlert('email cannot be blank', 'danger');
      isValid = false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      setAlert('email is not valid', 'danger', 'register');
      isValid = false;
    }
    if (name === '') {
      setAlert('Name is required', 'danger', 'register');
      isValid = false;
    }
    if (password === '') {
      setAlert('password is required', 'danger', 'register');
      isValid = false;
    }
    if (password2 === '') {
      setAlert('Password confirmation required', 'danger', 'register');
      isValid = false;
    }
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger', 'register');
      isValid = false;
    }

    return isValid;
  };
  const submitHandler = e => {
    e.preventDefault();
    if (validate()) {
      // const { name, email, password } = formData;
      const dataObj = {
        email: formData.email,
        name: formData.name,
        password: formData.password
      };

      setFormData({ email: '', name: '', password: '', password2: '' });
      register(dataObj);
      // axios
      //   .post('http://localhost:4000/api/users', dataObj)
      //   .then(res => res.data)
      //   .then(res => {
      //     setValidateAlert([...validateAlert, res]);
      //     window.localStorage.setItem('token', res);
      //     setIsLoggedIn(true);
      //     history.push('/dashboard');
      //   })
      //   .catch(error => console.log(error));
    } else {
    }
  };
  const formChangeHandler = e => {
    let newFormData = { ...formData };

    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };
  const alertColor = alert => {
    if (alert === 'Registered successfully') {
      return 'success';
    } else {
      return 'danger';
    }
  };

  return (
    <div>
      {validateAlert.map((alert, id) => (
        <Alert key={id} variant={alertColor(alert)}>
          {alert}
        </Alert>
      ))}
      <Form className='m-5'>
        <Form.Group controlId='registerEmail'>
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            name='email'
            value={formData.email}
            onChange={formChangeHandler}
            type='email'
            placeholder='Enter email'
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='registerName'>
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            name='name'
            value={formData.name}
            onChange={formChangeHandler}
            type='text'
            placeholder='Enter Name'
          />
        </Form.Group>
        <Form.Group controlId='registerPassword1'>
          <Form.Label>Choose a password</Form.Label>
          <Form.Control
            name='password'
            value={formData.password}
            onChange={formChangeHandler}
            type='password'
            placeholder='password'
          />
        </Form.Group>
        <Form.Group controlId='registerPassword2'>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            name='password2'
            value={formData.password2}
            onChange={formChangeHandler}
            type='password'
            placeholder='confirm  password'
          />
        </Form.Group>
        <Form.Group controlId='registerCheckBox'>
          <Form.Check
            type='checkbox'
            label='I agree to terms of registration'
            value={formData.check}
            name='check'
            onChange={formChangeHandler}
            required
          />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
Register.propType = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(null, { setAlert, register })(Register);
