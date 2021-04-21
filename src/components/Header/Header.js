//Imports
import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component Imports
import Hamburger from 'hamburger-react';

// Styling Imports
import './_Header.scss';

import { client } from '../../index'

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setOpen] = useState(false)

  const closeHamburger = () => {
    setOpen(false)
  }

  const updateLogIn = () => {
    setIsLoggedIn(false)
    clearLocalStorage()
  }

  const clearLocalStorage = () => {
    localStorage.clear()
    client.resetStore()
  }

  return (
    <header>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && !isLoggedIn && (
        <div className='menuOptions'>
          <ul className='menu' onClick={closeHamburger} >
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/login' >Login</Link>
            </li>
          </ul>
        </div>
      )}

      {isOpen && isLoggedIn && (
        <div className='menuOptions'>
          <ul className='menu' onClick={closeHamburger} >
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
            <Link to='/user-landing' >My Info</Link>
            </li>
            <li>
            <Link to='/create-postcard' >Create</Link>
            </li>
            <li onClick={updateLogIn}>
              <Link to='/login' >Logout</Link>
            </li>
          </ul>
        </div>
      )}
      <h1 className='headerTitle'>PenPost</h1>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.func
}

export default Header;
