import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UpdateUserInfoForm from '../User-Form/Update-Form';
import { useQuery } from '@apollo/client'
import { client } from '../../index'
import { GET_USER } from '../../GraphQL/queries'

const UserLandingPage = () => {
  const { error, loading, data } = useQuery(GET_USER)
  const { user } = client.readQuery({
    query: GET_USER
  })
  // const [user, setUser] = useState({name: data.user})
  const [address, setAddress] = useState({})
  const [userAbout, setUserAbout] = useState('')
  const [connection, setConnection] = useState({})
  const [updating, setUpdating] = useState(false)
  const [queryData, setQueryData] = useState(null)


  useEffect(() => {
    setQueryData(data)
    console.log(user)
  }, [])


  useEffect(() => {
    console.log(queryData)
    // setUser({ name: data.user.name, activePal: data.user.activePal})
    setAddress({ street: data.user.street, city: data.user.city, state: data.user.state, zip: data.user.zip, country: data.user.country })
    checkDescription()
    setConnection({ id: 2, name: 'Bill', country: 'United States', about: 'Howdy Im Bill'})
  }, [queryData])

  const checkDescription = () => {
    data.user.description ? setUserAbout(data.user.description) : setUserAbout('Uh oh, looks like you are missing an about me, Click edit below to add an about me!')
  }

  const updateHandler = (address, about) => {
    setUpdating(false)
    setAddress({ street: address.street, city: address.city, state: address.state, zip: address.zip, country: address.country})
    setUserAbout(about)
  }

  if (loading) return null
  if (error) return error

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
      {updating && <UpdateUserInfoForm address={address} userAbout={userAbout} updateHandler={updateHandler} back={() => setUpdating(false)}/>}

    </div>
  )
}

/* REQUIRED QUERIES

GET: USER DATA, AND CONNECTION NAME AND ABOUT

FIELDS: user id, user name, user address, user about, connection ID, connection name, connection about
          int      str          str(?)      setUser       int             str               str



PATCH: UPDATE USER ADDRESS OR ABOUT

FIELDS: user address, user about
            str          str




PATCH: END CONNECTION

FIELDS: user id, user connection id
           int            int


*/

export default UserLandingPage;
