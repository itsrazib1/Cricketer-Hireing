import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/header'
import Body from './component/body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  )
}

export default App
