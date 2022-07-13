/* eslint-disable no-debugger */
/* eslint-disable no-useless-escape */
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function useInputRequired(
  type,
  currentValue,
  required,
  setErrorMessage
) {
  const [value, setValue] = useState(currentValue)
  const [placeholder, setError] = useState('')
  const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/

  return {
    type,
    value,
    onBlur: (event) => {
      if (!event.target.value && required) setError('Required field')
      else setError('')
      if (event.target.type === 'email' && !filter.test(event.target.value)) {
        setErrorMessage('Enter correct email')
      }
      if (event.target.type === 'password' && event.target.value.length < 6) {
        setErrorMessage('Your password must be at least 6 characters')
      }
    },
    placeholder,
    onChange: (event) => setValue(event.target.value),
  }
}

useInputRequired.propTypes = {
  type: PropTypes.string.isRequired,
  currentValue: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
}
