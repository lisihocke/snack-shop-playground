import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button, Link} from 'react-aria-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="activeButton">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <div className="disabledButton">
        <Button isDisabled>Disabled button</Button>
      </div>
      <div className="linkButton">
        <Link className="react-aria-Button" href="https://www.lisihocke.com/" target="_blank">
          lisihocke.com
        </Link>
      </div>
    </>
  )
}

export default App
