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
