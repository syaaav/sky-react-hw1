/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import useInputRequired from './Login'

export default function LoginPass() {
  const login = useInputRequired('text', '', true)
  const password = useInputRequired('password', '', true)

  function handleSubmit() {
    console.log('Submit')
  }

  return (
    <div>
      <form onSubmit={handleSubmit()}>
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
    </div>
  )
}
