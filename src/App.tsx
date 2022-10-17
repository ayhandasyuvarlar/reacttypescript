import { Greet } from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import { Status } from './components/Status'

function App() {
  return (
    <div>
      <Status status="loading" />
      <Heading>Oscar goes to leonardo dicpario</Heading>
      <Oscar>
        <Heading>hello</Heading>
      </Oscar>
      <Greet name="Ayhan"  isLoggedIn={true} />
    </div>
  )
}

export default App
