import React from 'react'
import { List } from './components/generics/List'

export default function App() {
  return (
    <div>
      <List
        styles={styles}
        items={[
          {
            id: 1,
            first: 'ayhan',
            last: 'Dasyuvarlar',
          },
          {
            id: 2,
            first: 'ayhan',
            last: 'Dasyuvarlar',
          },
          {
            id: 3,
            first: 'ayhan',
            last: 'Dasyuvarlar',
          },
        ]}
        onClick={(item) => {
          console.log(item)
        }}
      />
    </div>
  )
}

const styles = {
  border: '1px solid',
  width: '200px',
  height: '50px',
}
