import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Preview = () => {
  const location = useLocation();
  const { image, message } = location.state
  console.log(image, message)

  //will need to include back button and submit button

  //need to consider passing state *back* through back button

  return (
    <section className='preview'>
      <article className='front'>
        <img src={image} alt='your uploaded image'/>
      </article>

      <article className='back'>
        <div>{message}</div>
      </article>
    </section>
  )
}

Preview.propTypes = {
  image: PropTypes.string,
  message: PropTypes.string
}

export default Preview;
