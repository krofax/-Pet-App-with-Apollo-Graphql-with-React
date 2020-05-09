import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

/**
 * Create an Apollo Client, Link it to an API,
 *  and export it as a default client
 */

const link = new HttpLink({ uri: "http://localhost:4000/" });
const cache = new InMemoryCache()
const client = new ApolloClient({
  link,
  cache
})

export default client