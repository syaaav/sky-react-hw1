import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const show = true
    return <div>{show ? 'текст 1' : 'текст 2'}</div>
  }
}

export default App
