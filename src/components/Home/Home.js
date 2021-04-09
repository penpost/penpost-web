import React from 'react'
import './Home.scss'

const Home = () => {
    return (
        <section className='homepage'>
            <h1 className='homepageTitle'>Welcome to PostPal</h1>
            <h2>About Us</h2>
            <p>How it works</p>
            <button className='loginButton button'>Login</button>
            <p>If you don't have a login, sign up below</p>
            <button className='registerButton button'>Register</button>
        </section>
    )
}

export default Home