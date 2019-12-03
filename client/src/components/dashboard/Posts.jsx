import React, { useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Posts = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <Card className='col-6' style={{ width: '18rem' }}>
            <Card.Img variant='top' src='https://picsum.photos/100' />
            <Card.Body>
              <Card.Title>Example Post</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>View Full Post</Button>
              <Button varient='info'>Edit Post</Button>
            </Card.Body>
          </Card>

          <Card className='col-6' style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href='#'>Card Link</Card.Link>
              <Card.Link href='#'>Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <Card stye={{ width: '20rem' }}>
          <Card.Body>
            <Form>
              <Form.Group controlId='postTitle'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group controlId='postBody'>
                <Form.Label>Body</Form.Label>
                <Form.Control as='textarea' rows='5' />
              </Form.Group>
              <Button type='submit'>Add Post</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Posts;
