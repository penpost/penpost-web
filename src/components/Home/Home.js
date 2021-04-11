import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
    return (
      <section className="homepage">
        <h1 className="homepageTitle">Welcome to</h1>
        <div className='penPostImage'><h1 className='penPostText'>PenPost</h1></div>
        <p className='paragraphText'>Take a picture and send it as postcard from your phone to your PenPost.</p>
        <div className='buttonContainer'>
            <Link to="/login">
            <button className="loginButton button" aria-label="login">
                Login
            </button>
            </Link>
            <p className="homepageParagraph">
            If you don't have a login, sign up below
            </p>
            <Link to="/register" className="registerPage">
            <button className="registerButton button" aria-label="register">
                Register
            </button>
            </Link>
        </div>
      </section>
    );
}

export default Home
