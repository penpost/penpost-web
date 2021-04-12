import React, { useState } from 'react'

const UpdateUserInfoForm = ({address, userAbout}) => {

  const [about, setAbout] = useState(userAbout)
  const [userAddress, setAddress] = useState(address)


  const inputHandler = (e) => {
    switch(e.target.id) {
      case 'street':
        setAddress({...userAddress, street: e.target.value})
        break;
      case 'city':
        setAddress({...userAddress, city: e.target.value})
        break;
      case 'state':
        setAddress({...userAddress, state: e.target.value})
        break;
      case 'zip':
        setAddress({...userAddress, zip: e.target.value})
        break;
      case 'country':
        setAddress({...userAddress, country: e.target.value})
        break;
      case 'about':
        setAbout(e.target.value)
        break;
    }
  }

  return (
    <div className='form-wrapper'>
        <form onChange={inputHandler}>
          <input type='text' value={userAddress.street} id='street' />
          <input type='text' value={userAddress.city} id='city' />
          <input type='text' value={userAddress.state} id='state' />
          <input type='number' value={userAddress.zip} id='zip'/>
          <input type='text' value={userAddress.country} id='country'/>
          <textarea type='text' value={about} id='about'/>
          <input type='submit' value='Update' />
        </form>
    </div>
  )
}

export default UpdateUserInfoForm
