import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
const NewPost = () => {
  const [textAreaId, setTextAreaId] = useState(0);

  return (
    <div>
      <Card stye={{ width: '20rem' }}>
        <Card.Body>
          <Form
            method='post'
            action='upload/post'
            encType='multipart/form-data'
          >
            <Form.Group controlId='postTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group controlId='textBlocks'>
              <Form.Label>textBlock {textAreaId}</Form.Label>
              <Form.Control as='textarea' rows='5' />
            </Form.Group>
            <Form.Group controlId='images'>
              <Form.Label>Image Upload</Form.Label>
              <Form.Control type='file' name='image' />
            </Form.Group>
            <Button type='submit'>Add Post</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewPost;
