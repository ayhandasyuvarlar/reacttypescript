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
      <Input value='' HandleChange={(event)=>console.log(event) }/>
    </div>
  )
}
