import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  // eslint-disable-next-line class-methods-use-this
  getText() {
    return <p>текст</p>
  }

  render() {
    const text = this.getText()
    return <div>{text}</div>
  }
}

export default App
