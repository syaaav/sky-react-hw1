import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const attr = 'block'
    return <div id={attr}>текст</div>
  }
}

export default App
