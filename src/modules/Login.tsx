import React from 'react'
import styled from 'styled-components'
import * as Realm from 'realm-web'
import { realmApp } from 'realm'
import CircleSpinner from 'components/loader/CircleSpinner'
import facebook from 'assets/facebook.png'

const Login = styled.div`
  width: 400px;
  height: 100px;
  background-image: url(${facebook});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  /* background-color: red; */
`

function App() {
  const [loading, setLoading] = React.useState(false)
  // The redirect URI should be on the same domain as this app and
  // specified in the auth provider configuration.
  const redirectUri = process.env.NODE_ENV === 'production' ? 'https://shopping-list-serverless.netlify.app/auth' : 'http://localhost:3000/auth'

  // Calling logIn() opens a Facebook authentication screen in a new window.
  const login = () => {
    setLoading(true)
    realmApp
      .logIn(Realm.Credentials.facebook(redirectUri))
      .then(user => {
        // The logIn() promise will not resolve until you call `handleAuthRedirect()`
        // from the new window after the user has successfully authenticated.
        console.log(`Logged in with id: ${JSON.stringify(user)}`)
      })
      .then(() => {
        window.location.replace('/')
      })
    // When the user is redirected back to your app, handle the redirect to
    // save the user's access token and close the redirect window. This
    // returns focus to the original application window and automatically
    // logs the user in.
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {loading ? (
         <><CircleSpinner size={50} fast/></> 
        ) : (
          <>
            <Login onClick={() => login()}></Login>
            <h1>sda{realmApp.currentUser?.isLoggedIn.toString()}</h1>
          </>
        )}
      </header>
      {process.env.NODE_ENV}
    </div>
  )
}

export default App
