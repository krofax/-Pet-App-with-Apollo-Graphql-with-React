import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

import gql from 'graphql-tag'

/**
 * Create an Apollo Client, Link it to an API,
 *  and export it as a default client to our Pet component.
 */