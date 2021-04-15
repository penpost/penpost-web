import React,  {useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import './_Header.scss';

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const closeHamburger = () => {
    setOpen(false)
  }

  return (
    <header>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className='menuOptions'>
          <ul className='menu' onClick={closeHamburger} >
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/login' >Logout</Link>
            </li>
          </ul>
        </div>
      )}
      <h1>PenPost</h1>
    </header>
  );
}

export default Header;
