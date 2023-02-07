/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from 'apollo'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import styled from 'styled-components'
// import * as GQL from 'generated/graphql'
import ScrollToTop from 'components/scrollToTop/ScrollToTop'
import * as Realm from 'realm-web'
import { realmApp } from 'realm'
import Home from 'modules/Home'
import Login from 'modules/Login'
import Header from 'modules/Header'
import ToDo from 'modules/ToDo'
import ShoppingList from 'modules/ShoppingList'
import FromPoland from 'modules/FromPoland'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  /* height: 100%; */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 700px;
  align-self: center;
`

const Main = styled.div`
  width: 100%;
  border-radius: 25px;
  overflow: auto;
  flex: 1;
  /* height: auto; */
  background-color: rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  padding-bottom: 50px;

`

const Root = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const Token = () => {
    Realm.handleAuthRedirect()
    return null
  }

  useEffect(() => {
    localStorage.setItem('path', location.pathname)
  }, [location.pathname])

  useEffect(() => {
    if (localStorage.getItem('path')) {
      navigate(localStorage.getItem('path') || '/', { replace: true })
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <Wrapper>
          <Header />
        <Main>
          <ScrollToTop />
          <Routes>
            <Route path='/login' key='/login' element={<Login />} />
            <Route path='/auth' key='/auth' element={<Token />} />
            <Route element={realmApp.currentUser?.isLoggedIn ? <Outlet /> : <Navigate to='/login' replace />} key='protected route'>
              <Route path='/' key='/' element={<Home key='homeElement' />} />
              <Route path='/toDo' key='/toDo' element={<ToDo />} />
              <Route path='/fromPoland' key='/toDo' element={<FromPoland />} />
              <Route path='/shoppingList' key='/toDo' element={<ShoppingList />} />
            </Route>
            <Route path='*' key='*' element={<Navigate to='/' />} />
          </Routes>
        </Main>
      </Wrapper>
    </ApolloProvider>
  )
}

export default Root
