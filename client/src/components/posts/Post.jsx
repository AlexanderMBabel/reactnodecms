import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Post = ({ title, textBlocks, images }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        {}
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {textBlocks.map(textBlock => (
            <Card.Text key={textBlock._id}>{textBlock.textBlock}</Card.Text>
          ))}
          <LinkContainer to='/post/view'>
            <Button variant='primary'>view full post</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
