import { useState } from 'react'
import booksStub from '../hw6/BooksStub'
import OrderDetail from './OrderDetail'
import './order.css'

export default function Order() {
  const [books, setBooks] = useState(booksStub())

  const setQuatinty = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  const totalQuantity = books.reduce((sum, item) => sum + item.quantity, 0)

  const totalPrice = books.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="content">
      <h1 className="title">Your order</h1>
      <div className="order">
        {books.map((book) => (
          <OrderDetail key={book.id} book={book} setQuantity={setQuatinty} />
        ))}
      </div>
      <div className="totalQuantity">
        <h3>Total Quantity: {totalQuantity} штук</h3>
      </div>
      <div className="totalPrice">
        <h3>Total Price: {totalPrice} рублей</h3>
      </div>
    </div>
  )
}
