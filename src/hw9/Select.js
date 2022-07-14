import { useState } from 'react'

export default function Select() {
  const [city, setCity] = useState('Tula')

  return (
    <div>
      <select
        value={city}
        onChange={(e) => {
          setCity(e.target.value)
        }}
      >
        <option value="Moscow">Moscow</option>
        <option value="Sochi">Sochi</option>
        <option value="Tula">Tula</option>
      </select>
      <div>Едем в город {city}</div>
    </div>
  )
}
