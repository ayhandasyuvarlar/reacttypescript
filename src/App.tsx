
import {Text} from './components/polymorphic/Text'

function App() {
  return (
    <div>
      <Text as={'h1'} size="lg">
        sadsad
      </Text>
      <Text as={'label'} size="md">
        sadsad
      </Text>
      <Text as={'p'}   size="sm" color="secondary">
        sadsad
      </Text>
    </div>
  )
}

export default App
