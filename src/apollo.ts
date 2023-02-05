import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client'
import { realmApp } from 'realm'

async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!realmApp.currentUser) {
    // If no user is logged in, log in an anonymous user. The logged in user will have a valid
    // access token.
    window.location.replace('/')
    return ''
  } else {
    // An already logged in user's access token might be stale. Tokens must be refreshed after
    // 30 minutes. To guarantee that the token is valid, we refresh the user's access token.
    await realmApp.currentUser.refreshAccessToken()
  }
  return realmApp.currentUser.accessToken as string
}

export const httpLink = new HttpLink({ uri: 'https://eu-west-1.aws.realm.mongodb.com/api/client/v2.0/app/shopping-list-serverless-fqtdh/graphql' })

export const authMiddleware = new ApolloLink((operation, forward) => {
  getValidAccessToken().then(token => {
    operation.setContext({
      headers: {
        ...operation.getContext().headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
  })

  return forward(operation)
})

export const link = from([authMiddleware, httpLink])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export default client
