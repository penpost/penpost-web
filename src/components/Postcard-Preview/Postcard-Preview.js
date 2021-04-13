import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Preview = () => {
  const location = useLocation();
  const { image, message } = location.state
  const divImage = {backgroundImage: 'url(' + image + ')', alt: 'your uploaded image'}

  //will need to include back button and submit button

  //need to consider passing state *back* through back button

  return (
    <section className='preview'>
      <article className='front'>
        <div className='image' style={divImage} alt='your uploaded image'>
          <div className='text'>Pen Post</div>
        </div>
      </article>

      <article className='back'>
        <div className='message'>{message}</div>
        <div className='separation' />
        <div className='address' >
          <hr/>
          <hr/>
          <hr/>
          <hr/>
        </div>
        <div className='stamp' />
      </article>
      <div className='button-wrapper'>
        <Link to='/create-postcard'>
        <button>Edit</button>
        </Link>
        <button>Send!</button>
      </div>
    </section>
  )
}

Preview.propTypes = {
  image: PropTypes.string,
  message: PropTypes.string
}

export default Preview;
