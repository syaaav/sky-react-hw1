import PropTypes from 'prop-types'
import './NumberGenerator.css'
import ColorNumbers from './ColorNumber'

function CreateRow(rowLength) {
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

export default function NumberGenerator() {
  return (
    <div>
      <div className="row">
        <CreateRow min={0} max={7} />
      </div>
      <div className="row">
        <CreateRow min={8} max={15} />
      </div>
      <div className="row">
        <CreateRow min={16} max={23} />
      </div>
      <div className="row">
        <CreateRow min={24} max={31} />
      </div>
    </div>
  )
}

CreateRow.propTypes = {
  rowLength: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
}
