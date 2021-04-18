import {gql} from '@apollo/client'

export const GET_USER = gql`
  query {
    user(id: 2) {
      name
      email
      description
      street
      city
      state
      zip
      country
      addressVerified
      activePal
      {
        name
        description
        country
      }
    }
  }
`
