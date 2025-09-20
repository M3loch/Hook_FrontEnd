import { createContext, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { observer } from 'mobx-react-lite'

import './App.css'

//pages
import LoginPage from './pages/loginPage/loginPage.jsx'
import UserPage from './pages/userPage/userPage.jsx'
import Store from './store/Store.js'
import Layout from './pages/Layout.jsx'
import ShopPage from './pages/shopPage/ShopPage.jsx'



export const Context = createContext() 
const user = Store.User
const shop = Store.Shop

function App() {
  return(

      <Context.Provider value={{user, shop}} >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={user.isAuth ? <Navigate to="/logIn" /> : <Navigate to="/me" />}/>

            <Route path='/me' element={!user.isAuth ? <Navigate to="/logIn" /> : <UserPage />}/>
            <Route path='/logIn' element={!user.isAuth ? <LoginPage /> : <Navigate to="/me" />}/>
            <Route path='/shop' element={!user.isAuth ? <Navigate to="/logIn" /> : <ShopPage />}/>

          </Route>
        </Routes>

      </Context.Provider>
  )
}

export default observer(App)
