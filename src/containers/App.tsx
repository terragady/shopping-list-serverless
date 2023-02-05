import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from 'apollo'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import styled from 'styled-components'
// import * as GQL from 'generated/graphql'
import ScrollToTop from 'components/scrollToTop/ScrollToTop'
import * as Realm from 'realm-web';
import { realmApp } from 'realm'
import Home from 'modules/Home'
import Login from 'modules/Login'


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  box-sizing: border-box;
`


const Root = () => {
  const Token = () => {
    Realm.handleAuthRedirect();
    return null
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <Wrapper>
          <ScrollToTop />
                <Routes>
                  <Route path='/login' key='/login' element={<Login />} />
                  <Route path='/auth' key='/auth' element={<Token />} />
                  <Route element={realmApp.currentUser?.isLoggedIn ? <Outlet /> : <Navigate to='/login' replace />} key='protected route'>
                    <Route path='/' key='/' element={<Home key='homeElement' />} />
                  </Route>
                  <Route path='*' key='*' element={<Navigate to='/' />} />
                </Routes>
        </Wrapper>
      </Router>
    </ApolloProvider>
  )
}

export default Root
