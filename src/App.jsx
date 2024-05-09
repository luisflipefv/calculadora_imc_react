import { useState } from 'react'
import './App.css'
import Calculadora from './Components/Calculadora'
import Tabela from './Components/Tabela/tabela'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculadora />
      <Tabela />
    </>
  )
}

export default App
