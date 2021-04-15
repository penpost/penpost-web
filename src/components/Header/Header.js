//Imports
import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// UI & Component Imports
import Hamburger from 'hamburger-react';
import './_Header.scss';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setOpen] = useState(false)

  const closeHamburger = () => {
    setOpen(false)
  }

  const updateLogIn = () => {
    setIsLoggedIn(false)
  }

  //when loggedOut is clicked, then setIsLoggedIn
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
      <h1>PenPost</h1>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.func
}

export default Header;
