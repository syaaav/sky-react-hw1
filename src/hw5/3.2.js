import { useState } from 'react'

function MinMax(props) {
  const { min, max } = props
  const [currentCount, setCurrentCount] = useState(0)

  const handleChange = (event) => {
    setCurrentCount(Number(event.target.value))
  }

  return (
    <div>
      <button
        type="button"
        disabled={currentCount === min}
        onClick={() => setCurrentCount(currentCount - 1)}
      >
        {' '}
        уменьшить{' '}
      </button>
      <input
        type="number"
        pattern="/^\d+$/"
        value={currentCount}
        onChange={handleChange}
      />
      <button
        type="button"
        disabled={currentCount === max}
        onClick={() => setCurrentCount(currentCount + 1)}
      >
        {' '}
        увеличить{' '}
      </button>
    </div>
  )
}

export default MinMax
