import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from "apollo-link";  
import { setContext } from 'apollo-link-context'

import gql from 'graphql-tag'


