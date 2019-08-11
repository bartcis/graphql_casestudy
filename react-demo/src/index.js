import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// Start imports for React Apollo GraphQL Queries
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// End of imports for React Apollo GraphQL Queries

// Start imports for GraphQL Hooks Queries
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';
// End of imports for GraphQL Hooks Queries

const httpLinkReactApollo = createHttpLink({
  uri: 'http://localhost:4000'
});
const clientReactApollo = new ApolloClient({
  link: httpLinkReactApollo,
  cache: new InMemoryCache()
});

const clientGraphQLHooks = new GraphQLClient({
  url: 'http://localhost:4000',
  cache: memCache(),
});

ReactDOM.render(
  // Remove this wrap if you use GrapQL Hooks
  <ApolloProvider client={clientReactApollo}>
    {/* Remove this wrap if you use React Apollo */}
    <ClientContext.Provider value={clientGraphQLHooks}>
      <App />
    </ClientContext.Provider>
  </ApolloProvider>,
  document.getElementById('root')
)

serviceWorker.unregister();
