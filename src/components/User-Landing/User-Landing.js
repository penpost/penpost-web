// Imports
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Apollo Imports
import { useQuery } from '@apollo/client'
import GET_USER from '../../GraphQL/queries'
import { client } from '../../index'

// Component Imports
import UpdateUserInfoForm from '../Update-Form/Update-Form';


const UserLandingPage = () => {

  const { error, loading, data } = useQuery(GET_USER, {variables: {id: 2}})
  const queryData = client.readQuery({
    query: GET_USER,
    variables: { id: 2,}
  });

  //when login occurs, we will need to grab the id from localStorage



  // const [user, setUser] = useState({})
  // const [address, setAddress] = useState({})
  const [userAbout, setUserAbout] = useState('')
  const [connection, setConnection] = useState({})
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    if (!data) return
    queryData.user.description ? setUserAbout(queryData.user.description) : setUserAbout('Uh oh, looks like you are missing an about me, Click edit below to add an about me!')
    // setUser({ name: queryData.user.name, activePal: queryData.user.activePal})
    // setAddress({ street: queryData.user.street, city: queryData.user.city, state: queryData.user.state, zip: queryData.user.zip, country: queryData.user.country })
    setConnection({ id: 2, name: 'Bill', country: 'United States', about: 'Howdy Im Bill'})
  }, [data])


  const updateHandler = () => {
    setUpdating(false)
    // setAddress({ street: address.street, city: address.city, state: address.state, zip: address.zip, country: address.country})
    // setUserAbout(about)
  }

  if (loading) return null
  if (error) return (<Redirect to='/Error' />)

  return (
    <div className='landing-wrapper'>
      {!updating &&
        <>
          <h1>Welcome {queryData.user.name}</h1>
          <div className='info-wrapper'>
            <h2>Profile Info</h2>
            <div className='address'>
              <h4>{queryData.user.street} </h4>
              <h4>{queryData.user.city} {queryData.user.state}, {queryData.user.zip}</h4>
              <h4>{queryData.user.country}</h4>
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
          // address={address}
          // userAbout={userAbout}
          queryData={queryData.user}
          updateHandler={updateHandler}
          back={() => setUpdating(false)}
        />}

    </div>
  )
}

export default UserLandingPage;
