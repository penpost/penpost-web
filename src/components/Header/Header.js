import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  //must add logic for logging out here.

  return(
    <header>
      <h1>PenPost</h1>
      <nav role="navigation">
        <ul className="menu">
          <Link to='/'><li>Home</li></Link>
          <Link to='/login'><li>Logout</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
