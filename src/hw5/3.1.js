import { useState } from 'react'

function MinMax(props) {
  const { min, max } = props
  const [currentCount, setCurrentCount] = useState(min)

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
      <span> {currentCount} </span>
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
