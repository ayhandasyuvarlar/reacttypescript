# Getting Started with Create React App and Typescript

![img](https://i.ytimg.com/vi/jex--OwVycc/maxresdefault.jpg)

## Why Typescript + React

### 5 Reasons to Use TypeScript with React

- Components are simple to read and comprehend
- Better JSX support
- Support for TypeScript by default in shared libraries
- Gradual implementation for current projects
- Advantages of IntelliSense and static type validation in general

### Typing Props

```js
// App.js
import React from 'react'
import './App.css'
import { Greet } from './components/Greet'
function App() {
  return (
    <div className="App">
      <Greet name="Ayhan" />
    </div>
  )
}

export default App
// Greet.js
type GreetProps = {
  name: string,
}
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name} </h2>
    </div>
  )
}
```

### Basic Props

```js
function App() {
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Ayhan',
      last: 'Dasyuvarlar',
    },
  ]
  return (
    <div className="App">
      <PersonList names={nameList} />
    </div>
  )

  export default App
}
//   PersonList
type PersonListType = {
  names: {
    first: string
    last: string
  }[]
}

export default function PersonList(props: PersonListType) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <div key={name.first}>
            <h2>
              {name.first} {name.last}
            </h2>
          </div>
        )
      })}
    </div>
  )
}

```

### Advanced Props

```js
import { Greet } from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import { Status } from './components/Status'

function App() {
  return (
    <div>
      <Status status="loading" />
      <Heading>Oscar goes to leonardo dicpario</Heading>
      <Oscar>
        <Heading>hello</Heading>
      </Oscar>
      <Greet name="Ayhan" isLoggedIn={true} />
    </div>
  )
}

export default App
```

```js
type HeadingProps = {
  children: string,
}

const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>
}

export default Heading
```

```js
type OscarProps = {
  children: React.ReactNode,
}

export default function Oscar(props: OscarProps) {
  return <div>{props.children}</div>
}
```

```js
type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `  Welcome ${props.name} ! You have ${messageCount} unread messages`
          : 'Welcome Guest'}
      </h2>
    </div>
  )
}

```

### Event Props

```js
//App.jsx
import React from 'react'
import Button from './components/Button'
import Input from './components/Input'

export default function App() {
  return (
    <div>
      <Button
        handleClick={(event, id) => {
          console.log(event, id)
        }}
      />
      <Input value="" HandleChange={(event) => console.log(event)} />
    </div>
  )
}
```

```js
//
import React from 'react'

type Buttonprops = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
}

export default function Button(props: Buttonprops) {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    </div>
  )
}
```

```js
import React from "react"

type inputProps = {
    value : string
    HandleChange :  (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input(props : inputProps) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
  return (
    <div>
      <input type="text" value={props.value} onChange={handleInputChange}/>
    </div>
  )
}
```

### Style Props

```js
import React from 'react'
import Container from './components/Container'

export default function App() {
  return (
    <>
      <Container styles={style} />
    </>
  )
}
const style = {
  border: '1px solid',
  width: '20%',
  height: '250px',
}
```

```js
type ContainerProps = {
  styles: React.CSSProperties,
}

export default function Container(props: ContainerProps) {
  return <div style={props.styles}>Container</div>
}
```

### Prop Types and Tips

##### Create folder name is types and in this folder create file name is Person.types.ts

### Example One

```js
// types > Person.types.ts
export type Name = {
  first: string
  last: string
}

export type personType = {
    name : Name
  }
```

```js
import { personType } from '../types/Person.types'

export default function Person(props: personType) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}
```

```js
import { Name } from '../types/Person.types'

type PersonListType = {
  names: Name[],
}

export default function PersonList(props: PersonListType) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <div key={name.first}>
            <h2>
              {name.first} {name.last}
            </h2>
          </div>
        )
      })}
    </div>
  )
}
```

### Example Two

```js
import React from "react"

type inputProps = {
    value : string
    HandleChange :  (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input({value ,HandleChange}:inputProps) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
  return (
    <div>
      <input type="text" value={value} onChange={HandleChange}/>
    </div>
  )
}
```

### useState Hooks

```js
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
```

### useState Future Value

```js
export type AuthUser = {
  name: string
  email: string
}

```

```js
import { useState } from 'react'
import { AuthUser } from './User.types'

export default function User() {
  const [user, setUser] = (useState < AuthUser) | (null > null)
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
```

### useState Type Assertion

```js
// before
const [user, setUser] = (useState < AuthUser) | (null > null)   // <----
// after
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

```

### useReducer Hook

```js
import { useReducer } from 'react'

const initialState = { count: 0 }

type ACTIONTYPE =
  | { type: 'increment', payload: number }
  | { type: 'decrement', payload: string }

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - Number(action.payload) }
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: '5' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        +
      </button>
    </>
  )
}

export default Counter
```

### useReducer Strict Action Types

```js
import { useReducer } from 'react'

type CounterState = {
  count: number
}

type UpdateAction = {
  type: 'increment' | 'decrement'
  payload: number
}

type ResetAction = {
  type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const CounterTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}
```

### useContext Future Value

```js
import React from 'react'
import { UserContextProviderText } from './components/Context/UserContext'
import User from './components/Context/User'

export default function App() {
  return (
    <div>
      <UserContextProviderText>
        <User />
      </UserContextProviderText>
    </div>
  )
}
```

```js
import React, { useState, createContext } from 'react'

export type AuthUser = {
  name: string
  email: string
}
type UserContextType = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UserContextProviderProps = {
  children: React.ReactNode
}
export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProviderText = ({
  children,
}: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {' '}
      {children}
    </UserContext.Provider>
  )
}

```

```js
import { useContext } from 'react'
import { UserContext } from './UserContext'

const User = () => {
  const userContext = useContext(UserContext)
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: 'Ayhan',
        email: 'ayhandasyuvarlar3@gmail.com',
      })
    }
  }
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null)
    }
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  )
}

export default User
```

### UseRef

```js
import React from 'react'

import MutableRef from './components/Ref/MutableRef'

export default function App() {
  return (
    <div>
      <MutableRef />
    </div>
  )
}
```

```js
import { useState, useEffect, useRef } from 'react'

export default function MutableRef() {
  const [timer, setTimer] = useState(0)
  const interValRef = (useRef < number) | undefined | (null > null)

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current)
  }
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    return () => {
      stopTimer()
    }
  }, [])
  return (
    <div>
      HOOKTIMER - {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  )
}
```

### Class Component

```js
import { Component } from 'react'

type CounterProps = {
  message: string,
}
type CounterState = {
  count: number,
}

/** The count value is 5 */
export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState((e) => ({ count: e.count + 1 }))
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}
```

### Components Prop

#### Props are argumants passed into React components Props are passed to components via HTML attribues props stands for properties

```js
import React from 'react'

export const Login = () => {
  return <div>Please Login to contine</div>
}
```

```js
export type ProfileProps = {
  name: string,
}

export const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile component Name is {name}</div>
}
```

```js
import { Login } from './Login'
import { ProfileProps } from './Profile'
type PrivateProps = {
  isLoggedIn: boolean
  component: React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, component : Component}: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="ayhan" />
  } else {
    return <Login />
  }
}

```

```js
import React from 'react'
import { Login } from './components/auth/Login'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'

export default function App() {
  return (
    <div>
      <Private isLoggedIn={true} component={Profile} />
    </div>
  )
}
```

### Generic Props

```js
import React from 'react'
import { List } from './components/generics/List'

export default function App() {
  return (
    <div>
      <List
        styles={styles}
        items={[
          {
            id: 1,
            first: 'ayhan',
            last: 'Dasyuvarlar',
          },
          {
            id: 2,
            first: 'ayhan',
            last: 'Dasyuvarlar',
          },
          {
            id: 3,
            first: 'ayhan',
            last: 'Dasyuvarlar',
          },
        ]}
        onClick={(item) => {
          console.log(item)
        }}
      />
    </div>
  )
}

const styles = {
  border: '1px solid',
  width: '200px',
  height: '50px',
}
```

```js
type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
  styles : React.CSSProperties
}

export const List = <T extends { id: number; first: string; last: string }>({
  items,
  onClick,
  styles
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => onClick(item)}
            style={styles}
          >
            firstName : {item.first} <br />
            lastName : {item.last}
          </div>
        )
      })}
    </div>
  )
}

```

### Restericting Props

```js
import React from 'react'
import { RandomNumber } from './components/restricting/RandomNumber'

export default function App() {
  return (
    <div>
      <RandomNumber value={-1} isNegative />
    </div>
  )
}
```

```js
import React from 'react'

type RandomNumberType = {
  value: number
}
type PositiveNumber = RandomNumberType & {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}
type NegativeNummber = RandomNumberType & {
  isNegative: boolean
  isPositive?: never
  isZero?: never
}
type ZeroNumber = RandomNumberType & {
  isZero: boolean
  isNegative?: never
  isPositive?: never
}
type RandomNumberProps = PositiveNumber | NegativeNummber | ZeroNumber
export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps): JSX.Element => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'}
      {isZero && 'zero'}
    </div>
  )
}

```

### Template Literals and Exclude

```js
import React from 'react'
import { Toast } from './components/templateliterals/Toast'

export default function App() {
  return (
    <div>
      <Toast position="center - bottom" />
    </div>
  )
}
```

```js
type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
  position:Exclude<`${HorizontalPosition} - ${VerticalPosition}` , 'center-center' | 'center'>
}

export const Toast = ({ position }: ToastProps) => {
  return (
    <div>
      <div>Toast Notification Position :  {position}</div>
    </div>
  )
}

```
