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
