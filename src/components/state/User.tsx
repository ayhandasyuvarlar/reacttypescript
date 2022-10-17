import { useState } from 'react'
import { AuthUser } from './User.types'

export default function User() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'Ayhan',
      email: 'ayhandasyuvarlar3@gmail.com',
    })
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>
        user name is {user.name}
      </div>
      <div>user email is {user.email}</div>
    </div>
  )
}
