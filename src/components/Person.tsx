import { personType } from "../types/Person.types";


export default function Person(props: personType) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}
