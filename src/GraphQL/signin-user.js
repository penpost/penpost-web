const SIGNINUSER_MUTATION = gql`
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