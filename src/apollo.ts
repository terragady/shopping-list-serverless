import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client'

export const httpLink = new HttpLink({ uri: "https://eu-west-1.aws.realm.mongodb.com/api/client/v2.0/app/shopping-list-serverless-fqtdh/graphql" })

export const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      ...operation.getContext().headers,
    },
  })

  return forward(operation)
})

export const link = from([authMiddleware, httpLink])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export default client
