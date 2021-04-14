// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import Error from './components/Error/Error'
import App from './components/App/App'
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
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
    return (<Error />)
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:3000' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    {router}
  </ApolloProvider>,
    document.getElementById('root')
);
