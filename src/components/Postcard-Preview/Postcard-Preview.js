// Imports
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component Imports
import SuccessMessage from '../Success-Message/Success-Message';

const Preview = () => {
  const location = useLocation();
  const { image, message } = location.state;
  const [ success, setSuccess ] = useState(false);

  const divImage = {backgroundImage: 'url(' + image + ')', alt: 'your uploaded image'}

  const fireSuccessMessage = () => {
    setSuccess(true);
  }

  return (
    <>
      {!success &&
        <section className='preview'>
          <article className='front'>
            <div className='image' style={divImage} alt='your uploaded image'>
            <div className='text'>Pen Post</div>
            </div>
          </article>

          <article className='back'>
            <div className='message'>
              {message}
            </div>
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
            <Link to={{
              pathname: '/create-postcard',
              state: {
                image,
                message
              }
            }}>
              <button>Edit</button>
            </Link>
              <button onClick={fireSuccessMessage}>Send!</button>
          </div>
        </section>
      }

      {success &&
        <SuccessMessage />
      }
    </>
  )

}

Preview.propTypes = {
  image: PropTypes.string,
  message: PropTypes.string
}

export default Preview;
