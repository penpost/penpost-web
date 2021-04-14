// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from '@apollo/client/link'
import { cache } from "./cache";
import Pages from "./pages";
import injectStyles from "./styles";

//Component Imports
import App from './components/App/App';

//UI Imports
import './index.scss';

// Initialize ApolloClient
const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql"
});

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    router
  </ApolloProvider>,
    document.getElementById('root')
);
