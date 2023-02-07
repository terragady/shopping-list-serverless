import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
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

// export const authMiddleware = new ApolloLink(async (operation, forward) => {
//   await getValidAccessToken().then(token => {
//     operation.setContext({
//       headers: {
//         ...operation.getContext().headers,
//         Authorization: token ? `Bearer ${token}` : '',
//       },
//     })
//   })
//   return forward(operation)
// })

const authenticationLink = setContext(async (_, { headers }) => {
  const token = await getValidAccessToken()
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: from([authenticationLink, httpLink]),
  cache: new InMemoryCache(),
})

export default client
