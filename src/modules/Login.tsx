/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as Realm from 'realm-web'
import { realmApp } from 'realm'
import CircleSpinner from 'components/loader/CircleSpinner'
import facebook from 'assets/login.png'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`


function Login() {
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()
  const redirectUri = process.env.NODE_ENV === 'production' ? 'https://shopping-list-serverless.netlify.app/auth' : 'http://localhost:3000/auth'

  useEffect(() => {
    if (realmApp.currentUser?.isLoggedIn) {
      console.log("logged in")
      navigate('/', { replace: true })
    }
  }, [realmApp.currentUser?.isLoggedIn])

  const login = async () => {
    setLoading(true)
    await realmApp
      .logIn(Realm.Credentials.facebook(redirectUri))
      .then(user => {
        console.log(`Logged in with id: ${JSON.stringify(user)}`)
      })
      .then(() => {
        window.location.replace('/')
      })
  }
  const loginEmail = () => {
    setLoading(true)
    realmApp
      .logIn(Realm.Credentials.emailPassword('terragady@gmail.com', process.env.REACT_APP_EMAIL_PASSWORD!))
      .then(user => {
        console.log(`Logged in with id: ${JSON.stringify(user)}`)
      })
      .then(() => {
        navigate('/', { replace: true })
      })
  }
  return (
    <Wrapper>
      {loading ? <CircleSpinner size={50} fast /> : <img src={facebook} alt='login' onClick={() => login()} />}
      {process.env.NODE_ENV === 'development' && (
        <button style={{ marginTop: '50px' }} onClick={() => loginEmail()}>
          Login
        </button>
      )}
    </Wrapper>
  )
}

export default Login
