//Imports
import React from 'react'
import { Route } from 'react-router-dom'

//Components Imports
import Header from '../Header/Header'
import Home from '../Home/Home'
import Login from '../Login/Login'
import UserLanding from '../User-Landing-Page/User-Landing'
import PostcardForm from '../Postcard-Form/Postcard-Form'
import Preview from '../Postcard-Preview/Postcard-Preview'
import Error from '../Error/Error'

//Styling Imports
import './_App.scss'

const App = () => {
  return (
    <main>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/user-landing" render={() => <UserLanding />} />
      <Route exact path="/error" render={() => <Error />} />
    </main>
  );
}

export default App;