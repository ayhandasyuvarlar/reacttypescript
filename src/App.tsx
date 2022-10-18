import React from 'react'
import { Login } from './components/auth/Login'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'


export default function App() {
  return (
    <div>
        <Private isLoggedIn={true} component={Profile}/>
    </div>
  )
}
