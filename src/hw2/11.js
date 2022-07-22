import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  // eslint-disable-next-line class-methods-use-this
  getNum1() {
    return 1
  }

  // eslint-disable-next-line class-methods-use-this
  getNum2() {
    return 2
  }

  render() {
    return <div>текст {this.getNum1() + this.getNum2()}</div>
  }
}

export default App
