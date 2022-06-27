import { useState } from 'react'

function App() {
  const [isPress, setIsPress] = useState(true)

  const handleToggle = () => {
    setIsPress(!isPress)
  }

  return (
    <div>
      <div>{isPress ? <p>Текст</p> : ''}</div>
      <button type="button" onClick={handleToggle}>
        {isPress ? 'Скрыть' : 'Показать'}
      </button>
    </div>
  )
}

export default App
