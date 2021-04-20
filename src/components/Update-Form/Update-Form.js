// Imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Apollo Imports
import { useMutation } from '@apollo/client';
import UPDATE_USER from '../../GraphQL/update-user';
import GET_USER from '../../GraphQL/queries'

// Component Imports
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const UpdateUserInfoForm = ({ queryData, back }) => {

  const [about, setAbout] = useState(queryData.description)
  const [userAddress, setAddress] = useState({ street: queryData.street , city: queryData.city , state: queryData.state , zip: queryData.zip , country: queryData.country })
  const [updateUser] = useMutation(UPDATE_USER)

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
    back()
    updateUser({
      variables: { id: 3, description: about },
      refetchQueries: [{ query: GET_USER, variables: { id: 3 } }],
    })
  }

  return (
    <article className='form-wrapper'>
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
    </article>
  )
}

UpdateUserInfoForm.propTypes = {
  queryData: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string
  }),
  back: PropTypes.func
}

export default UpdateUserInfoForm;
