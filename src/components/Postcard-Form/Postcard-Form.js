// Imports
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// UI Imports
import stamp from '../assets/postage-stamp.png';

const PostcardForm = () => {

  const location = useLocation();
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  useEffect((image, message) => {
    if(image === null || message === null) {
      setImage('')
      setMessage('')
    } else if (location.state !== undefined) {
      setImage(location.state.image)
      setMessage(location.state.message)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // still throwing error of missing location.state dependency


  const inputHandler = (e) => {
    switch (e.target.id) {
      case 'message':
        setMessage(e.target.value)
        break
      case 'image':
        setImage(e.target.value)
        break
      default:
          return
    }
  }

  return (
    <section className='postcard-form'>
      <h2>Create your postcard here!</h2>
      <form onChange={inputHandler} noValidate>
        <h3>Select and Upload an Image</h3>
        <p>(Please use a link)</p>
        <article>
          <label htmlFor='image' value='image upload'/>
          <input
            type='text'
            value={image}
            id='image'
            className='image'
            onChange={inputHandler}
            required
          />
          <label htmlFor='clear-image' value='clear image' />
          <button type='button' id='clear-image' onClick={() => setImage('')}>X</button>
        </article>
        <article className='image-thumbnail'>
          {!image &&
            <img
              src={stamp}
              alt='an image placeholder'
            />
          }
          {image &&
            <img
              src={image}
              alt='your image thumbnail'
            />
          }
        </article>
        <h3>Enter your message below</h3>
        <p>(400 character limit)</p>
        <label htmlFor='message' value='message' />
        <textarea
          type='text'
          maxLength='400'
          value={message}
          id='message'
          onChange={inputHandler}
          required
        />
        <label htmlFor='preview' value='preview postcard' />
        <Link to={{
          pathname: '/preview-postcard',
          state: {
            image,
            message
          }
        }}>
          <input type='submit' value='Preview' id='preview' className='preview '/>
        </Link>
      </form>
    </section>
  )
}

PostcardForm.propTypes = {
  image: PropTypes.string,
  message: PropTypes.string
}

export default PostcardForm;
