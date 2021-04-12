import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';

import './_Header.scss';

const Header = () => {
  return(
    <header>
      <h1>PenPost</h1>
      <Hamburger />
    </header>
  )
}

export default Header;
