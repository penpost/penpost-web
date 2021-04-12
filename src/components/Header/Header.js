import React,  {useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from "hamburger-react";
import './_Header.scss';

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <header>
      <h1>PenPost</h1>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className="menuOptions">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
