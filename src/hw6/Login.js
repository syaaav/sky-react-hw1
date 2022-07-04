import { useState } from 'react'
import PropTypes from 'prop-types'

export default function useInputRequired(type, currentValue, required) {
  const [value, setValue] = useState(currentValue)
  const [placeholder, setError] = useState('')

  return {
    type,
    value,
    onBlur: (event) => {
      if (!event.target.value && required) setError('Required field')
      else setError('')
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
