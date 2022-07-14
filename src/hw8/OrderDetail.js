import PropTypes from 'prop-types'
import MinMax from './MinMax'
import './order.css'

export default function OrderDetail(props) {
  const { id, title, price, quantity, rest } = props.book

  return (
    <div>
      <div className="order_card" key={id}>
        <div className="order_card_title">
          <h3>{title}</h3>
        </div>
        <div className="order_card_price">Price: {price}</div>
        <div className="order_card_quantity">Detail current: {quantity}</div>
        <div>
          <MinMax
            id={id}
            max={rest}
            current={quantity}
            setQuantity={props.setQuantity}
          />
        </div>
      </div>
    </div>
  )
}

OrderDetail.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    rest: PropTypes.number,
  }).isRequired,
  setQuantity: PropTypes.func.isRequired,
}
