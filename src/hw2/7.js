import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const divStyle = {
      color: 'green',
      border: '3px solid black',
      borderRadius: '30px',
    }
    return <div style={divStyle}>текст</div>
  }
}

export default App
