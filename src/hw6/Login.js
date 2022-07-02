import { useState } from 'react'

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
