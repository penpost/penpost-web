import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
      <section className="homepage">
        <h1 className="homepageTitle">Welcome to PenPost</h1>
        <h2>About Us</h2>
        <p>How it works</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Link to='/login'>
          <button className="loginButton button">Login</button>
        </Link>
        <p className="homepageParagraph">
          If you don't have a login, sign up below
        </p>
        <Link to ='/register' className='registerPage'>
            <button className="registerButton button">Register</button>
        </Link>
      </section>
    );
}

export default Home