// Imports
import React from 'react';
import { Link } from 'react-router-dom';

const SuccessMessage = () => {
  return (
    <section className='successMessage'>
      <h1>Thank you!</h1>
      <p>We&apos;ve recieved your postcard & it will be sent to your PenPost in 1 - 3 days.</p>
      <Link to='/user-landing'>
        <button>Ok!</button>
      </Link>
    </section>
  )
}

export default SuccessMessage;
