import { useState } from 'react'

export default function useInputRequired(type, currentValue, required) {
  const [value, setValue] = useState(currentValue)
  const [placeholder, setPlaceholder] = useState('')

  return {
    type,
    value,
    onBlur: (event) => {
      if (!event.target.value && required) setPlaceholder('Required field')
      else setPlaceholder('')
    },
    placeholder,
    onChange: (event) => setValue(event.target.value),
  }
}
