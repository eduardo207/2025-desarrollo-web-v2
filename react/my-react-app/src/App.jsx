import { useState } from 'react'
import './App.css'
import Producto from './components/Producto.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Producto titulo='Rosa' precio='150' descripcion='Rosa del dia de la madre'/>
    </>
  )
}

export default App
