import {gql} from '@apollo/client'

export default gql`
  query ($id: ID!) {
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
