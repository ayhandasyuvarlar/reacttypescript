import { useState } from 'react'

export const Loggedln = () => {
  const [isLoggedln, setisLoggedln] = useState(false)
  const handleLogin = () => {
    setisLoggedln(true)
  }
  const handleLogout = () => {
    setisLoggedln(false)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedln ? 'logged in' : 'logged out'}</div>
    </div>
  )
}
