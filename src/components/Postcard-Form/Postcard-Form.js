import React, { useState } from 'react'

const PostcardForm = () => {

  const [image, setImage] = useState('')
  const [message, setMessage] = useState('')



  return (
    <section>
      <h2>Create your postcard here!</h2>
      <form>
        <h3>Upload and select an image</h3>
        <input type='text' value={image}/>
        <h3>Enter your message below</h3>
        <label htmlFor='message' value='message' />
        <input type='textarea' maxLength='400' id='message' value={message} />
        <label htmlFor='preview' value='preview postcard' />
        <input type='submit' value='Preview Postcard' id='preview'/>
      </form>
    </section>
  )
}

export default PostcardForm
