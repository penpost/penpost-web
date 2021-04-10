//Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//UI Imports
import './Login.scss';

const Login = () => {
  const [validLogin, setValidLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //default is true! So no error message appears
  //if value is blank, then setValidLogin(false)
  //display error message
  //include minvalue for security

  const checkLogin = (event) => {
    if ( username.length > 6 && password.length > 6 ) {
      event.preventDefault();
      setValidLogin(false);
      console.log(validLogin)

      //having some problem with automatic reloading?
      //I want the
    }
  }

  return (
    <section className='loginSection'>
      <h1 className='loginTitle'>Login</h1>
      <form>
        <div>
          <label htmlFor='username'>username:</label>
          <input type='text' id='username' name='username' value={username} minLength='6' maxLength='15' required onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor='password'>password:</label>
          <input type='password' id='password' name='password' value={password} minLength='6' maxLength='20' required onChange={e => setPassword(e.target.value)}/>
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

export default Login;
