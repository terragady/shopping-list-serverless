import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { realmApp } from 'realm'

async function getValidAccessToken() {
  if (!realmApp.currentUser) {
    window.location.replace('/')
    return ''
  } else {
    await realmApp.currentUser.refreshAccessToken()
  }
  return realmApp.currentUser.accessToken as string
}

export const httpLink = new HttpLink({ uri: 'https://eu-west-1.aws.realm.mongodb.com/api/client/v2.0/app/shopping-list-serverless-fqtdh/graphql' })

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
