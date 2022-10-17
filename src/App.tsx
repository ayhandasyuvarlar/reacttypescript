import React from 'react'
import { UserContextProviderText } from './components/Context/UserContext'
import User from './components/Context/User'


export default function App() {
  return <div>
    <UserContextProviderText>
      <User/>
    </UserContextProviderText>
  </div>
}
