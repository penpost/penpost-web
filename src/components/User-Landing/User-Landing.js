// Imports
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Apollo Imports
import { useQuery } from '@apollo/client'
import GET_USER from '../../GraphQL/queries'

// Component Imports
import UpdateUserInfoForm from '../Update-Form/Update-Form';


const UserLandingPage = () => {

  const { error, loading, data } = useQuery(GET_USER, {variables: {id: 2}})

  const [user, setUser] = useState({})
  const [address, setAddress] = useState({})
  const [userAbout, setUserAbout] = useState('')
  const [connection, setConnection] = useState({})
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    const checkDescription = () => {
      data.user.description ? setUserAbout(data.user.description) : setUserAbout('Uh oh, looks like you are missing an about me, Click edit below to add an about me!')
    }

    if (!data) return
      setUser({ name: data.user.name, activePal: data.user.activePal})
      setAddress({ street: data.user.street, city: data.user.city, state: data.user.state, zip: data.user.zip, country: data.user.country })
      checkDescription()
      setConnection({ id: 2, name: 'Bill', country: 'United States', about: 'Howdy Im Bill'})
  }, [data])


  const updateHandler = (address, about) => {
    setUpdating(false)
    setAddress({ street: address.street, city: address.city, state: address.state, zip: address.zip, country: address.country})
    setUserAbout(about)
  }

  if (loading) return null
  if (error) return (<Redirect to='/Error' />)

  return (
    <div className='landing-wrapper'>
      {!updating &&
        <>
          <h1>Welcome {user.name}</h1>
          <div className='info-wrapper'>
            <h2>Profile Info</h2>
            <div className='address'>
              <h4>{address.street} </h4>
              <h4>{address.city} {address.state}, {address.zip}</h4>
              <h4>{address.country}</h4>
            </div>
            <h4 className='about'>{userAbout}</h4>
            <div className='button-wrapper'>
              <button onClick={() => setUpdating(true)}>Edit</button>
            </div>
          </div>
          <div className='info-wrapper'>
            <h2>Connection</h2>
            {!connection &&
              <>
                <h4>Looks like you arent connected with a pen pal, please click here to find one!</h4>
                <button>Click</button>
              </>
            }
            {connection &&
              <>
                <h4 className='connection-name'>You are connected with {connection.name} ({connection.country})</h4>
                <h4 className='about'>{connection.about}</h4>
                <div className='button-wrapper'>
                  <Link to='/create-postcard'>
                    <button>Send Postcard</button>
                  </Link>
                  <button>End Connection</button>
                </div>
              </>
            }
          </div>
        </>
      }
      {updating &&
        <UpdateUserInfoForm
          address={address}
          userAbout={userAbout}
          updateHandler={updateHandler}
          back={() => setUpdating(false)}
        />}

    </div>
  )
}

export default UserLandingPage;
