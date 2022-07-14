import PropTypes from 'prop-types'

export default function MinMax({ min = 1, max, current, onChange }) {
  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num))
    onChange(validNum)
  }

  function parseCurrent(e) {
    const num = parseInt(e.target.value, 10)
    applyCurrent(Number.isNaN(num) ? min : num)
  }

  const inc = () => applyCurrent(Number(current + 1))
  const dec = () => applyCurrent(Number(current - 1))

  return (
    <div>
      <button type="button" onClick={dec}>
        -
      </button>
      <input type="text" value={current} onChange={parseCurrent} />
      <button type="button" onClick={inc}>
        +
      </button>
    </div>
  )
}

MinMax.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

MinMax.defaultProps = {
  min: 1,
}
