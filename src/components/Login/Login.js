// Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Apollo Imports
import { useMutation } from '@apollo/client';
// import { GET_USER } from '../../GraphQL/queries'
import SIGNIN_USER from '../../GraphQL/signin-user';

const Login = ( { setIsLoggedIn } ) => {
  const [validLogin, setValidLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // ensure error component is added once connected to the backend

  // const { error, loading, data } = useQuery(GET_USER)
  const [signinUser] = useMutation(SIGNIN_USER, {onCompleted: data => localStorage.setItem('userData', JSON.stringify(data))});
  
  const checkLogin = (event) => {
    if ( email.length < 6 || password.length < 6 ) {
      event.preventDefault();
      setEmail('');
      setPassword('');
      setValidLogin(false);
    } else {
      setIsLoggedIn(true);
      signinUser({
        variables: {email: email, password: password}
      });
      //console.log(signedIn.data)
      // invoke helper function, assign ID into local storage
    }
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])
  //
  //
  //   if (loading) return null
  //   if (error) return error



  return (
    <section className='loginSection'>
      <h1 className='loginTitle'>Login</h1>
      <form>
        <div>
          <label htmlFor='email'>email address:</label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            minLength='6'
            maxLength='30'
            autoComplete='on'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            minLength='6'
            maxLength='20'
            autoComplete='off'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to='/user-landing' className='landingPage'>
          <button
            type='submit'
            name='button'
            aria-label='login'
            onClick={checkLogin}
          >
            Login
          </button>
        </Link>
      </form>
      {!validLogin && (
        <article className='invalidLoginText'>
          <p>
            Oops, please check either your username or password! Something seems
            wrong.
          </p>
        </article>
      )}
    </section>
  );
}

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  validLogin: PropTypes.bool,
  setIsLoggedIn: PropTypes.func
}

export default Login;

// useEffect(() => {
//   console.log(data)
//   setUser({ id: 1, name: data.user.name, activePal: data.user.activePal})
//   setAddress({ street: data.user.street, city: data.user.city, state: data.user.state, zip: data.user.zip, country: data.user.country })
//   checkDescription()
//   setConnection({ id: 2, name: 'Bill', country: 'United States', about: 'Howdy Im Bill'})
// }, [data])
//
// const checkDescription = () => {
//   data.user.description ? setUserAbout(data.user.description) : setUserAbout('Uh oh, looks like you are missing an about me, click Edit below to add an about me!')
// }
