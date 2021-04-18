//Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ( { setIsLoggedIn } ) => {
  const [validLogin, setValidLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const checkLogin = (event) => {
    if ( username.length < 6 && password.length < 6 ) {
      event.preventDefault();
      setValidLogin(false);
    } else {
      setIsLoggedIn(true);
    }
  }

  return (
    <section className='loginSection'>
      <h1 className='loginTitle'>Login</h1>
      <form>
        <div>
          <label htmlFor='username'>username:</label>
          <input type='text' id='username' name='username' value={username} minLength='6' maxLength='15' autoComplete='on' required onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor='password'>password:</label>
          <input type='password' id='password' name='password' value={password} minLength='6' maxLength='20' autoComplete='off' required onChange={e => setPassword(e.target.value)}/>
        </div>
        <Link to='/user-landing' className='landingPage'>
          <button type='submit' name='button' aria-label='login' onClick={checkLogin}>Login</button>
        </Link>
      </form>
      {!validLogin &&
        <article className='invalidLoginText'>
          <p>Oops, please check either your username or password! Something seems wrong.</p>
        </article>
      }
   </section>
  )
}

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  validLogin: PropTypes.bool,
  setIsLoggedIn: PropTypes.func
}

export default Login;
