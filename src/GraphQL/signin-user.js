import { gql } from "@apollo/client";

export default gql`
  mutation signinUser( input: {
      credentials: {
        $email: String!, 
        $password: String!
      }
  }){
      token
        user {
          id
        }
    }
  }
`;
