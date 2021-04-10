import React, { useState, useEffect } from 'react'

function UserLandingPage() {
  const [user, setUser] = useState({id: 1, name: 'John', address: '123 Wherever St, Denver CO 80202', connections: false, about: 'My about me'})
  const [connection, setConnection] = useState({id: 2, name:'Bill', about:'Howdy Im Bill'})

  useEffect(() => {
    console.log(user.connections)
  }, [])

  // PASS USER DATA THRU AS PROPS AFTER LOGIN, OR CALL THEM ON PAGE LOAD?

  return (
    <div className='landing-wrapper'>
      <div className='header-placeholder'/>
      <h1>Welcome {user.name}</h1>
      <h2>Profile Info</h2>
      <div className='info-wrapper'>
        <h3>Address:</h3>
        <h4>{user.address}</h4>
        <h3>About:</h3>
        <h4>{user.about}</h4>
        <button>Edit</button>
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
