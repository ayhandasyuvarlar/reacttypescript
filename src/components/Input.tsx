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
