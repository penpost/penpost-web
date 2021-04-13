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
//Styling Imports
import './_App.scss'

const App = () => {
  return (
    <main>
      <Header />
      <Route
      exact
      path="/" component={Home}
      />
      <Route
      exact
      path="/login"
      render={() => <Login/>}
      />
      <Route
      exact
      path='/user-landing'
      render={() => <UserLanding/>}
      />
      <Route
        exact
        path='/create-postcard'
        render={() => <PostcardForm/>}
      />
      <Route
        exact
        path='/preview-postcard'
        render={() => <Preview/>}
      />
    </main>
  )
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <h1>Test</h1>
//     </div>
//   );
// }
//
// export default App;
