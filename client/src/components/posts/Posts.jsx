import React, { useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadPosts } from '../../actions/posts';
import PropTypes from 'prop-types';
import Post from './Post';

const Posts = ({ loadPosts, posts: { posts }, auth: { user } }) => {
  useEffect(() => {
    if (user !== null) {
      console.table(user);

      loadPosts(user[0].email);
    }
  }, [user]);

  return (
    <div>
      <div className='container'>
        <div className='row'>
          {posts !== null &&
            posts.map(post => (
              <Post
                title={post.title}
                textBlocks={post.textBlocks}
                images={post.images}
              />
            ))}
        </div>
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
