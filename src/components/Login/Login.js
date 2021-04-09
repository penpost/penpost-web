//Imports
import React, { useState } from 'react';

//UI Imports
import './Login.scss';

const Login = () => {
  //include message handling/conditional rendering if login isn't valid

  return (
    <section>
      <h1>Welcome</h1>
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
   </section>
  )
}

export default Login;
