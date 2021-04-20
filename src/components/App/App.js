// Imports
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import UserLanding from '../User-Landing/User-Landing';
import PostcardForm from '../Postcard-Form/Postcard-Form';
import Preview from '../Postcard-Preview/Postcard-Preview';
import Error from '../Error/Error';


// Styling Imports
import './_App.scss';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    JSON.parse(localStorage.getItem("userData")) === null
      ? setIsLoggedIn(false)
      : setIsLoggedIn(true);
  }, [])

  return (
    <main>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Route
        exact
        path='/'
        render={() => <Home />}
      />
      <Route
        exact
        path='/login'
        render={() =>
          <Login
            setIsLoggedIn={setIsLoggedIn}
          />}
      />
      <Route
        exact
        path='/user-landing'
        render={() =>
          <UserLanding
            isLoggedIn={isLoggedIn}
          />}
      />
      <Route
        exact
        path='/create-postcard'
        render={() => <PostcardForm />}
      />
      <Route
        exact
        path='/preview-postcard'
        render={() => <Preview />}
      />
      <Route
        exact
        path='/error'
        render={() => <Error />}
      />
    </main>
  );
}

export default App;
