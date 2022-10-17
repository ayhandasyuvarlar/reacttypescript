import { useState } from 'react'
import { AuthUser } from './User.types'

export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const handleLogin = () => {
    setUser({
      name: 'Ayhan',
      email: 'ayhandasyuvarlar3@gmail.com',
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        {user === null
          ? 'Please click login'
          : ` user Name :${user?.name}  user Email : ${user?.email}`}
      </div>
    </div>
  )
}
