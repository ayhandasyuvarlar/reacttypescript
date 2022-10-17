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
