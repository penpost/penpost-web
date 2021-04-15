import {gql, useQuery} from '@apollo/client'

export const GET_USER = gql`
  query {
    user(id: ${id}) {
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
