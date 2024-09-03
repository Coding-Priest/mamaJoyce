import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import BuyNow from './Components/BuyNow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BuyNow />
      </div>
    </>
  )
}

export default App
