import React, { useState, useEffect } from 'react'
import UpdateUserInfoForm from '../User-Form/Update-Form'

const UserLandingPage = () => {
  const [user, setUser] = useState({})
  const [address, setAddress] = useState({})
  const [userAbout, setUserAbout] = useState('')
  const [connection, setConnection] = useState({id: 2, name:'Bill', about:'Howdy Im Bill'})
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    setUser({ id: 1, name: 'John', connections: false })
    setAddress({ street: '123 Wherever Street', city: 'Denver', state: 'CO', zip: 80202, country: 'United States' })
    setUserAbout('Add an about me!')
  }, [])

  const updateHandler = (address, about) => {
    setUpdating(false)
    console.log('Address', address)
    console.log('About', about)
  }



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
            <h4>{userAbout}</h4>
            <button onClick={() => setUpdating(true)}>Edit</button>
          </div>
          <div className='info-wrapper'>
            <h2>Connection</h2>
            {!connection &&
              <div>
                <h4>Looks like you arent connected with a pen pal, please click here to find one!</h4>
                <button>Click</button>
              </div>
            }
            {connection &&
              <div>
                <h4>You are connected with {connection.name /*?*/}</h4>
                <h4>{connection.about}</h4>
                <div className='button-wrapper'>
                  <button>Send Postcard</button>
                  <button>End Connection</button>
                </div>
              </div>
            }
          </div>
        </>
      }
      {updating && <UpdateUserInfoForm address={address} userAbout={userAbout} updateHandler={updateHandler} />}

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

export default UserLandingPage
