import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Start = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Blog Site</h1>
        <p>
          Blog site is a blog platform with built in content management nop code
          required
        </p>
        <p>
          <LinkContainer to='/register'>
            <Button varient='primary'>Register</Button>
          </LinkContainer>
          <Button varient='info'>Login</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Start;
