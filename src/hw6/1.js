/* eslint-disable no-console */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import MinMax from './MinMax'
import booksStub from './BooksStub'

export default function BookCart() {
  const [books, setBooks] = useState(booksStub())

  const setQuatinty = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  const handleDelete = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id))
  }

  const totalAmount = books.reduce(function (sum, item) {
    return sum + item.price * item.quantity
  }, 0)

  return (
    <div>
      <h1>books list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1} </td>
              <td>{book.title} </td>
              <td>{book.price} </td>
              <td>
                <MinMax
                  max={book.rest}
                  current={book.quantity}
                  onChangeQuantity={(quantity) =>
                    setQuatinty(book.id, quantity)
                  }
                />
              </td>
              <td>{book.price * book.quantity} </td>
              <td>
                <button type="button" onClick={(id) => handleDelete(book.id)}>
                  {' '}
                  X{' '}
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <h3>Sum:</h3>
            </td>
            <td>{totalAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
