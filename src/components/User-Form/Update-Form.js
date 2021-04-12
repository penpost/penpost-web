import React, { useState } from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'

const UpdateUserInfoForm = ({address, userAbout, updateHandler}) => {

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

  const submitHandler = () => {

    updateHandler(userAddress, about)
  }

  return (
    <div className='form-wrapper'>
        <form onChange={inputHandler} onSubmit={submitHandler}>
          <div>
            <label htmlFor='country'>Country:</label>
            <CountryDropdown value={userAddress.country} id='country'/>
            <label htmlFor='state'>State/Region:</label>
            <RegionDropdown country={userAddress.country} value={userAddress.state} id='state' />
            <label htmlFor='street'>Street:</label>
            <input type='text' value={userAddress.street} id='street' />
            <label htmlFor='city'>City:</label>
            <input type='text' value={userAddress.city} id='city' />
            <label htmlFor='zip'>Zip/Postal:</label>
            <input type='number' value={userAddress.zip} id='zip'/>
          </div>
          <label htmlFor='about'>About:</label>
          <textarea type='text' value={about} id='about' maxlength='250'/>
          <label htmlFor='submit' />
          <input type='submit' value='Update' id='submit' />
        </form>
    </div>
  )
}

export default UpdateUserInfoForm

// <input type='text' value={userAddress.country} id='country'/>
