import {gql} from '@apollo/client'

export default gql`
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
