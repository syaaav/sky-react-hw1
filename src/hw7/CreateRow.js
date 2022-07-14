import PropTypes from 'prop-types'
import ColorNumbers from './ColorNumber'

export default function CreateRow(rowLength) {
  const first = rowLength.min
  const last = rowLength.max

  const numbers = []
  for (let i = first; i <= last; i += 1) {
    numbers.push(i)
  }

  return numbers.map((number) => (
    <div>
      <ColorNumbers number={number} />
    </div>
  ))
}

CreateRow.propTypes = {
  rowLength: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
}
