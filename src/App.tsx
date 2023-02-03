import React from 'react';
import './App.css';
import * as Realm from 'realm-web';
import styled from 'styled-components';

const Login = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

function App() {
  const app = new Realm.App({ id: 'shopping-list-serverless-fqtdh' });
  // The redirect URI should be on the same domain as this app and
  // specified in the auth provider configuration.
  const redirectUri = 'localhost:3000/hello';

  // Calling logIn() opens a Facebook authentication screen in a new window.
  const login = () => {
    app.logIn(Realm.Credentials.facebook(redirectUri)).then((user) => {
      // The logIn() promise will not resolve until you call `handleAuthRedirect()`
      // from the new window after the user has successfully authenticated.
      console.log(`Logged in with id: ${user.id}`);
    });
    // When the user is redirected back to your app, handle the redirect to
    // save the user's access token and close the redirect window. This
    // returns focus to the original application window and automatically
    // logs the user in.
  };
  const login2 = () => {
    app.logIn(Realm.Credentials.emailPassword("terragady@gmail.com", "test4321")).then((user) => {
      // The logIn() promise will not resolve until you call `handleAuthRedirect()`
      // from the new window after the user has successfully authenticated.
      console.log(`Logged in with id: ${JSON.stringify(user)}`);
    });
    // When the user is redirected back to your app, handle the redirect to
    // save the user's access token and close the redirect window. This
    // returns focus to the original application window and automatically
    // logs the user in.
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <Login onClick={() => login()}></Login>
        <Login onClick={() => login2()}></Login>
      </header>
    </div>
  );
}

export default App;
