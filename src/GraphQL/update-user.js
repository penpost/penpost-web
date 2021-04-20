import { gql } from '@apollo/client';

export default gql `
  mutation ($id: ID!, $description: String!, $street: String!, $city: String!, $country: String!, $state: String!, $zip: String!) {
    updateUser(input: {
      id: $id
      description: $description
      country: $country
      state: $state
      city: $city
      street: $street
      zip: $zip
    }) {
      description
      country
      state
      city
      street
      zip
    }
  }
`