import { createContext, useState } from 'react'
import { observer } from 'mobx-react-lite'

import './App.css'
import LoginPage from './pages/loginPage/loginPage.jsx'
import UserPage from './pages/userPage/userPage.jsx'

import Store from './store/Store.js'

const user = Store.User


export const Context = createContext() 

function App() {


  if (user.isAuth){
    return(
      <Context.Provider value={{user}} >
        <UserPage />
      </Context.Provider>
    )
  } else {
    return(
      <Context.Provider value={{user}} >
        <LoginPage />
      </Context.Provider>
    )
  }
}

export default observer(App)
