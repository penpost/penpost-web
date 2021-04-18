// Imports
import React from 'react';
import { Link } from 'react-router-dom';

const SuccessMessage = () => {
  return (
    <section className='successMessage'>
      <h1>Thank you! We've recieved your postcard & it will be sent to your PenPost in 1 - 3 days.</h1>
      <Link to='/user-landing'>
        <button>Ok!</button>
      </Link>
    </section>
  )
}

export default SuccessMessage;
