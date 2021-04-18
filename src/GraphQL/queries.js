import {gql} from '@apollo/client'

export const GET_USER = gql`
  query getUser($id: Int){
    user(id: $id) {
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
