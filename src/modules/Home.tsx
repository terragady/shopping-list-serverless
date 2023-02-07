import React from 'react'
import { useNavigate } from 'react-router-dom'
import { realmApp } from 'realm'
import styled from 'styled-components'

const Hello = styled.div`
  font-size: 20px;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  width: 90%;
  /* background-color: rgba(0, 0, 0, 0.1); */
`

const ListButton = styled.div`
  width: 400px;
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px;
  margin: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgba(85, 85, 85, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.3);
  :hover {
    font-weight: bold;
  }
  :active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Hello>Witaj, {realmApp.currentUser?.profile.name}!</Hello>
      <ListButton
        onClick={e => {
          e.preventDefault()
          navigate('/shoppingList')
        }}
      >
        Lista zakupów
      </ListButton>
      <ListButton
        onClick={e => {
          e.preventDefault()
          navigate('/fromPoland')
        }}
      >
        Z Polski
      </ListButton>
      <ListButton onClick={
        e => {
          e.preventDefault()
          navigate('/toDo')
        }
      }>Do zrobienia</ListButton>
    </>
  )
}
export default Home
