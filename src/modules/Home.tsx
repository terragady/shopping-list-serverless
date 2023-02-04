import React from 'react'
import { realmApp } from 'realm'

function Home() {
  return (<>
    <div>{realmApp.currentUser?.isLoggedIn ? "logged" : "not"}</div>
    </>
  )
}

export default Home