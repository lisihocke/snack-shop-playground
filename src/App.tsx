import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from './components/Link'
import { Button } from './components/Button'
import { MenuExample } from './components/MenuExample'
import { SelectExample } from './components/SelectExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="activeButton">
        <Button variant="primary" onClick={() => setCount((count) => count + 1)}>
          primary count is {count}
        </Button>
      </div>
      <div className="activeButton">
        <Button variant="secondary" onClick={() => setCount((count) => count + 1)}>
          secondary count is {count}
        </Button>
      </div>
      <div className="activeButton">
        <Button variant="destructive" onClick={() => setCount((count) => count + 1)}>
          destructive count is {count}
        </Button>
      </div>
      <div className="activeButton">
        <Button variant="icon" onClick={() => setCount((count) => count + 1)}>
          icon count is {count}
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
      <MenuExample></MenuExample>
      <SelectExample></SelectExample>
    </>
  )
}

export default App
