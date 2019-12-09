import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newPost } from '../../actions/posts';
import { setAlert } from '../../actions/alert';
const NewPost = ({ newPost, alert, setAlert, user }) => {
  const [textAreaId, setTextAreaId] = useState(0);

  const [formData, setFormData] = useState({
    title: '',
    textBlock0: '',
    textBlock1: '',
    textBlock2: '',
    image: ''
  });
  console.log(user[0].email);

  const changeHandler = e => {
    let newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const imageHandler = e => {
    let newFormData = { ...formData };
    const data = new FormData();

    const images = e.target.files;
    data.append('image', images[0], images[0].name);
    console.log(data);
    newFormData.image = images[0];
    setFormData(newFormData);
  };

  const submitHandler = e => {
    e.preventDefault();
    let preparedFormData = {
      userEmail: user[0].email,
      title: formData.title,
      textBlocks: [
        { textBlock: formData.textBlock0 },
        { textBlock: formData.textBlock1 },
        { textBlock: formData.textBlock2 }
      ],
      images: [{ image: formData.image }]
    };
    newPost(preparedFormData);
    if (alert !== '') {
      setAlert(alert);
    }
  };

  return (
    <div>
      <Card stye={{ width: '20rem' }}>
        <Card.Body>
          <Form>
            <Form.Group controlId='postTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                name='title'
                value={FormData.title}
                onChange={changeHandler}
                type='text'
              />
            </Form.Group>
            <Form.Group controlId='textBlocks'>
              <Form.Label>textBlock {textAreaId}</Form.Label>
              <Form.Control
                as='textarea'
                rows='5'
                name='textBlock0'
                value={formData.textBlock0}
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group controlId='images'>
              <Form.Label>Image Upload</Form.Label>
              <Form.Control type='file' name='image' onChange={imageHandler} />
            </Form.Group>
            <Button onClick={submitHandler}>Add Post</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
NewPost.propTypes = {
  alert: PropTypes.string,
  user: PropTypes.array,
  newPost: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  alert: state.posts.alert,
  user: state.auth.user
});
export default connect(mapStateToProps, { newPost, setAlert })(NewPost);
