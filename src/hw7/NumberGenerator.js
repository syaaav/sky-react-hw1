import PropTypes from 'prop-types'
import './NumberGenerator.css'
import CreateRow from './CreateRow'

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
