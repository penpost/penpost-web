//Imports
import React, { useState } from 'react';

//UI Imports
import './Login.scss';

const Login = () => {
  const [validLogin, setValidLogin] = useState(true)
  //default is true! So no error message appears

  //if value is blank, then setValidLogin(false)
  //display error message
  //include minvalue for security

  return (
    <section>
      <h1>Login</h1>
      <form>
        <div>
          <label for="username">username:</label>
          <input type="text" id="username" name="username" value="" />
        </div>
        <div>
          <label for="password">password:</label>
          <input type="password" id="password" name="password" value="" />
        </div>
        <button type="submit" name="button" aria-label="login">login</button>
      </form>
      {!validLogin &&
        <article>
          <p>Oops, please check either your username or password! Something seems wrong.</p>
        </article>
      }
   </section>
  )
}

export default Login;
