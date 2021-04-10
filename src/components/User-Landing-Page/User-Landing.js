import React, { useState, useEffect } from 'react'
import UpdateUserInfoForm from '../User-Form/Update-Form'

function UserLandingPage() {
  const [user, setUser] = useState({})
  const [connection, setConnection] = useState({id: 2, name:'Bill', about:'Howdy Im Bill'})
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    setUser({id: 1, name: 'John', street: '123 Wherever Street', city: 'Denver', state: 'CO', zip: 80202, country: 'United States', connections: false, about: 'My about me'})
  }, [])

  // PASS USER DATA THRU AS PROPS AFTER LOGIN, OR CALL THEM ON PAGE LOAD?

  return (
    <div className='landing-wrapper'>
      {!updating &&
        <>
          <h1>Welcome {user.name}</h1>
          <h2>Profile Info</h2>
          <div className='info-wrapper'>
            <div className='address'>
              <h4>{user.street} </h4>
              <h4>{user.city} {user.state}, {user.zip}</h4>
              <h4>{user.country}</h4>
            </div>
            <h4>{user.about}</h4>
            <button onClick={() => setUpdating(true)}>Edit</button>
          </div>
          <h2>Connection</h2>
          <div className='info-wrapper'>
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
                <button>Send Postcard</button>
                <button>Terminate Connection</button>
              </div>
            }
          </div>
        </>
      }
      {updating && <UpdateUserInfoForm props={user}/>}

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
