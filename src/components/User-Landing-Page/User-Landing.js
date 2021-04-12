import React, { useState, useEffect } from 'react'
import UpdateUserInfoForm from '../User-Form/Update-Form'

const UserLandingPage = () => {
  const [user, setUser] = useState({})
  const [address, setAddress] = useState({})
  const [userAbout, setUserAbout] = useState('')
  const [connection, setConnection] = useState({id: 2, name:'Bill', country:'United States', about:'Howdy Im Bill'})
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    setUser({ id: 1, name: 'John', connections: false })
    setAddress({ street: '123 Wherever Street', city: 'Denver', state: 'CO', zip: 80202, country: 'United States' })
    setUserAbout('About Add an about me! asdfasf kdasjf;lkdajf ;lkjadf;lkaj sdf;lkdas jfd;lkjds;flkdjs al;kjfda;lsdkjf;lad skjfd;lkajd s;fdlkjaf; lkjasddf;lkja sd;lfkjda;lk dfja;lsksdjf a;slkjf;ads lkjfa;sldkjfad s;lkjd fasd; lkjdf a;slkd fa;lkdj fa;lkd jfa;lkdjf; lkdaj;al kjdfld')
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
                  <button>Send Postcard</button>
                  <button>End Connection</button>
                </div>
              </>
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
