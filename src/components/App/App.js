import React from 'react' 
import Home from '../Home/Home'
import Login from '../Login/Login'
import UserLanding from '../User-Landing-Page/User-Landing'
import Error from '../Error/Error'
import './_App.scss'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/user-landing" render={() => <UserLanding />} />
      <Route exact path="/error" render={() => <Error />} />
    </main>
  );
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
