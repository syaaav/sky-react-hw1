import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const str = 'block'
    return <div className={str}>текст</div>
  }
}

export default App
