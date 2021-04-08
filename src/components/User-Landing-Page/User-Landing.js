import React, { useState, useEffect } from 'react'

function UserLandingPage() {
  const [user, setUser] = useState({id: 1, name: 'Jeff', address: '123 Wherever St, Denver CO 80202', connections: false, about: 'My about me'})
  const [connections, setConnection] = useState()

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <div className='landing-wrapper'>
      <div className='header-placeholder'/>
      <h1>Welcome {user.name}</h1>
      <h2>Profile Info</h2>
      <div className='info-wrapper'>
      <h3>Address:</h3>
      <h3>About:</h3>
      </div>
      <h2>Connections</h2>
      <div className='info-wrapper'>

      </div>
    </div>
  )
}

export default UserLandingPage
