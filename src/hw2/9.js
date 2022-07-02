import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const arr = ['a', 'b', 'c', 'd', 'e']
    return (
      <ul>
        {arr.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    )
  }
}

export default App
