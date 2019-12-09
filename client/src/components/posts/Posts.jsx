import React, { useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { loadPosts } from '../../actions/posts';
import PropTypes from 'prop-types';
import Post from './Post';
import NewPost from './NewPost';

const Posts = ({ loadPosts, posts: { posts }, auth: { user } }) => {
  useEffect(() => {
    if (user !== null) {
      console.table(user);

      loadPosts(user[0].email);
    }
  }, [user]);

  const addPostHandler = () => {
    console.log('handled');
    return <NewPost />;
  };

  return (
    <div>
      <div className='container'>
        <div className='d-flex'>
          {posts !== null &&
            posts.map(post => (
              <Post
                key={post._id}
                title={post.title}
                textBlocks={post.textBlocks}
                images={post.images}
              />
            ))}
        </div>
        <LinkContainer to='/dashboard/posts/new'>
          <Button>+ Add Post</Button>
        </LinkContainer>
      </div>
    </div>
  );
};
Posts.propTypes = {
  user: PropTypes.object.isRequired,
  loadPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
});

export default connect(mapStateToProps, { loadPosts })(Posts);
