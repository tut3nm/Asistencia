import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <div className='container'>

      <h1>Iniciar Sesión</h1>
      
      <div className='cont-input'>
        
        <div>
          <p>Ingresar Usuario</p>
          <input type="text" className='input'/>
        </div>

        <div>
          <p>Ingresar Contraseña</p>
          <input type="text" className='input'/>
        </div>
        
        <button>Iniciar Sesión</button>
      </div>

    </div>
  )
}

export default App