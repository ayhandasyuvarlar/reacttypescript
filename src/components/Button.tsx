import React from 'react'

type Buttonprops = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement> , id:number) => void
}

export default function Button(props: Buttonprops) {
  return (
    <div>
      <button onClick={event  => props.handleClick(event , 1)}>Click</button>
    </div>
  )
}
