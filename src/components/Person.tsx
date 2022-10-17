type personType = {
  name: {
    first: string
    last: string
  }
}

export default function Person(props: personType) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}
