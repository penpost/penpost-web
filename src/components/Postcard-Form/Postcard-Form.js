import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PostcardForm = () => {

  const [image, setImage] = useState('')
  const [message, setMessage] = useState('')

  const inputHandler = (e) => {
    switch(e.target.id) {
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
            image: image,
            message: message
          }
        }}>
          <input required type='submit' value='Preview Postcard' id='preview'/>
        </Link>
      </form>
    </section>
  )
}

export default PostcardForm
