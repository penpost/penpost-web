import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
      <section className="homepage">
        <h1 className="homepageTitle">Welcome to PenPost</h1>
        <p className='paragraphText'>Make a connection and send from your phone</p>
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