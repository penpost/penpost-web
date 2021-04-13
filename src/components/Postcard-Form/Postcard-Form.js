import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostcardForm = () => {

  const [image, setImage] = useState('')
  const [message, setMessage] = useState('')
  const location = useLocation()

  useEffect(() => {
    console.log(location.state.image)
    if(location.state !== undefined) {
      setImage(location.state.image)
      setMessage(location.state.message)
    }
  }, [])

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
    <section>
      <h2>Create your postcard here!</h2>
      <form onChange={inputHandler}>
        <h3>Upload and select an image</h3>
        <label htmlFor='image' value='image upload'/>
        <input required type='text' value={image} id='image'/>
        <h3>Enter your message below</h3>
        <label htmlFor='message' value='message' />
        <input type='textarea' maxLength='400' id='message' value={message} />
        <label htmlFor='preview' value='preview postcard' />
        <Link to={{
          pathname: '/preview-postcard',
          state: {
            image,
            message
          }
        }}>
          <input required type='submit' value='Preview Postcard' id='preview'/>
        </Link>
      </form>
    </section>
  )
}

PostcardForm.propTypes = {
  image: PropTypes.string,
  message: PropTypes.string
}

export default PostcardForm
