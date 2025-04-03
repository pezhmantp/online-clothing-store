import { ApolloClient, ApolloLink, concat, DefaultOptions, HttpLink, InMemoryCache } from "@apollo/client";

const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }
const client = new ApolloClient({
  uri: "http://localhost:8081/graphql",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export default client;