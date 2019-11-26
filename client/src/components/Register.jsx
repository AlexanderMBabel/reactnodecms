import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
const styles = {
  container: {
    margin: 20,
    borderRadius: 5
  }
};

const Login = () => {
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
    let validateMessages = [];
    if (email === '') {
      validateMessages.push('email cannot be blank');
      isValid = false;
    }
    if (email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      validateMessages.push('email is not valid');
      isValid = false;
    }
    if (name === '') {
      validateMessages.push('Name is required');
      isValid = false;
    }
    if (password === '') {
      validateMessages.push('password is required');
      isValid = false;
    }
    if (password2 === '') {
      validateMessages.push('Password confirmation required');
      isValid = false;
    }
    if (passowrd !== password2) {
      validateMessages.push('Passwords do not match');
      isValid = false;
    }
    return isValid;
  };
  const submitHandler = e => {
    e.preventDefault();
    if (validate()) {
      dataObj = {
        email: formData.email,
        name: formData.name,
        password: formData.password
      };
      axios.post('http://localhost:4000/api/users', dataObj);
    }
  };
  const formChangeHandler = e => {
    let newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  return (
    <div>
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

export default Login;
