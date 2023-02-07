import { useApolloClient } from '@apollo/client'
import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { realmApp } from 'realm'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  /* background-color: hsla(0, 0%, 0%, 0.5); */
  height: 70px;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`

const Title = styled.div`
  position: relative;
  flex: 1 1;
  font-size: 20px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.8);
  /* font-weight: bold; */
  white-space: nowrap;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

const MenuButton = styled.div`
  align-self: end;
  box-sizing: border-box;
  padding: 0px 15px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const List = styled.div`
  display: flex;
  position: absolute;
  top: 70px;
  right: 0px;
  width: 150px;
  padding: 0;
  background-color: rgba(124, 124, 124, 0.808);
  border-radius: 5px;
  flex-direction: column;
  height: auto;
  gap: 5px;
  padding: 5px;
  box-sizing: border-box;
  z-index: 10;
`

function Header() {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const apolloClient = useApolloClient()

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside, true)
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside, true)
    }
  }, [open])

  return (
    <Wrapper onClick={e => e.preventDefault()}>
      <Title
        style={{ textAlign: 'left' }}
        onClick={e => {
          e.preventDefault()
          navigate('/')
        }}
      >
        Family Lists
      </Title>
      {realmApp.currentUser?.isLoggedIn && (
        <>
          *
          <Title>
            {location.pathname === '/'
              ? 'Home'
              : location.pathname === '/shoppingList'
              ? 'Lista zakupów'
              : location.pathname === '/fromPoland'
              ? 'Z Polski'
              : location.pathname === '/toDo'
              ? 'Do zrobienia'
              : '_'}
          </Title>
          *
          <Title>
            <MenuButton
              ref={ref}
              onClick={e => {
                e.preventDefault()
                setOpen(!open)
              }}
            >
              <b>menu</b>
              {open && (
                <List onClick={e => e.stopPropagation()}>
                  <span
                    onClick={() =>
                      realmApp.currentUser?.logOut().then(() => {
                        setOpen(false)
                        apolloClient.resetStore().then(() => navigate('/login'))
                      })
                    }
                  >
                    Logout
                  </span>
                </List>
              )}
            </MenuButton>
          </Title>
        </>
      )}
    </Wrapper>
  )
}

export default Header
