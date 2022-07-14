import './NumberGenerator.css'
import PropTypes from 'prop-types'

export default function ColorNumbers(item) {
  if (item.number !== 2 && item.number % 2 === 0) {
    return <div className="green">{item.number}</div>
  }
  if (
    item.number === 2 ||
    item.number === 3 ||
    item.number === 5 ||
    item.number === 7 ||
    (item.number !== 1 &&
      item.number % 3 !== 0 &&
      item.number % 5 !== 0 &&
      item.number % 7 !== 0)
  ) {
    return <div className="red">{item.number}</div>
  }
  return <div className="yellow">{item.number}</div>
}

ColorNumbers.propTypes = {
  item: PropTypes.shape({
    number: PropTypes.number,
  }).isRequired,
}
