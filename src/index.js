// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import Error from './components/Error/Error'
import App from './components/App/App'
import './index.scss'
import { HashRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphqlErrors/*, networkError*/}) => {
  if (graphqlErrors) {
    return ( <Error /> )
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://penpost-api.herokuapp.com/graphql' })
])

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  fetchOptions: {
    mode: 'no-cors',
  },
  connectToDevTools: true
})

const router = (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    {router}
  </ApolloProvider>,
    document.getElementById('root')
);
