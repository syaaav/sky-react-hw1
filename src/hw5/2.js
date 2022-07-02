import { useState } from 'react'
import './2.css'

function App() {
  const [isPress, setIsPress] = useState(true)

  const handleToggle = () => {
    setIsPress(!isPress)
  }

  return (
    <div>
      <button type="button" className="blueSqr">
        синий квадрат
      </button>
      {isPress ? (
        <button type="button" className="greenSqr" onClick={handleToggle}>
          зелёный квадрат
        </button>
      ) : (
        <button type="button" className="redSqr" onClick={handleToggle}>
          красный квадрат
        </button>
      )}
    </div>
  )
}

export default App
