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
