import { gql } from "@apollo/client";

export default gql`
  mutation ($email: String!, $password: String!) {
    signinUser(input: {
      credentials: {
        email: $email, 
        password: $password
      } 
    }){
        token
          user {
            id
          }
       }
  }
`;
