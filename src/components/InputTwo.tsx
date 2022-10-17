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
