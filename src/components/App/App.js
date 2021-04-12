//Imports
import React from 'react'
import { Route } from 'react-router-dom'

//Components Imports
import Header from '../Header/Header'
import Home from '../Home/Home'
import Login from '../Login/Login'
import UserLanding from '../User-Landing-Page/User-Landing'

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
