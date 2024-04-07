import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {Button, Link} from 'react-aria-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      <div className="activeButton">
        <Button className="btn-primary" onClick={() => setCount((count) => count + 1)}>
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
