import './NumberGenerator.css'
import PropTypes from 'prop-types'

export default function ColorNumbers(item) {
  const simpleNums = [2, 3, 5, 7]
  const isEven = (number) => number % 2 === 0
  const isOdd = (number) =>
    number === 1 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0

  if (
    simpleNums.includes(item.number) ||
    (!isOdd(item.number) && !isEven(item.number))
  ) {
    return <div className="red">{item.number}</div>
  }
  if (isEven(item.number)) {
    return <div className="green">{item.number}</div>
  }
  if (isOdd(item.number)) {
    return <div className="yellow">{item.number}</div>
  }
}

ColorNumbers.propTypes = {
  item: PropTypes.shape({
    number: PropTypes.number,
  }).isRequired,
}
