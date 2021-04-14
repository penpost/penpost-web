import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const UpdateUserInfoForm = ({address, userAbout, updateHandler, back}) => {

  const [about, setAbout] = useState(userAbout)
  const [userAddress, setAddress] = useState(address)

  const inputHandler = (e) => {
    switch (e.target.id) {
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
      default:
        return userAddress
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()
    updateHandler(userAddress, about)
  }

  return (
    <section className='form-wrapper'>
        <form onChange={inputHandler} onSubmit={submitHandler}>
          <div>
            <label htmlFor='country'>Country:</label>
            <CountryDropdown value={userAddress.country} id='country' className='country' />
            <label htmlFor='state'>State/Region:</label>
            <RegionDropdown country={userAddress.country} value={userAddress.state} id='state' className='state' />
            <label htmlFor='street'>Street:</label>
            <input type='text' value={userAddress.street} id='street' onChange={inputHandler} />
            <label htmlFor='city'>City:</label>
            <input type='text' value={userAddress.city} id='city' onChange={inputHandler} />
            <label htmlFor='zip'>Zip/Postal:</label>
            <input type='number' value={userAddress.zip} id='zip' onChange={inputHandler} />
          </div>
          <label htmlFor='about'>About:</label>
          <textarea type='text' value={about} id='about' maxLength='250' onChange={inputHandler} />
          <label htmlFor='submit' />
          <input type='submit' value='Update' id='submit' className='submit' />
        </form>
        <label htmlFor='back' value='back' />
        <button onClick={back} id='back' className='back' >Back</button>
    </section>
  )
}

UpdateUserInfoForm.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.number,
    country: PropTypes.string
  }),
  userAbout: PropTypes.string,
  updateHandler: PropTypes.func,
  back: PropTypes.func
}
//back?

export default UpdateUserInfoForm;
