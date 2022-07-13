/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import useInputRequired from './Login'

export default function LoginPass() {
  const [message, setMessage] = useState('')

  function setErrorMessage(e) {
    setMessage(e)
  }

  const login = useInputRequired('email', '', true, setErrorMessage)
  const password = useInputRequired('password', '', true, setErrorMessage)

  return (
    <div>
      <form>
        <label>
          Login:
          <input {...login} />
        </label>
        <label>
          Password:
          <input {...password} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
      <div>{message}</div>
    </div>
  )
}
