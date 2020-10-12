import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
