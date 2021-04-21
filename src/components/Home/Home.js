// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styling Imports
import './_Home.scss';

const Home = ({ isLoggedIn }) => {
    return (
      <section className='homepage'>
        <h1 className='homepageTitle'>Welcome to</h1>
        <div className='penPostImage'><h1 className='penPostText'>PenPost</h1></div>
        <p className='paragraphText'>Take a picture and send it as postcard from your phone to your PenPost.</p>
        {!isLoggedIn &&
          <div className='buttonContainer'>
              <Link to='/login'>
              <button className='loginButton button' aria-label='login'>
                  Login
              </button>
              </Link>
          </div>
        }
      </section>
    );
}

Home.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default Home;
