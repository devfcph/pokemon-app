import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonList from './components/containers/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h4>Pokemon fantástico </h4>
      <hr />
      <PokemonList></PokemonList>

    </>
  )
}

export default App
