import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const text1 = <p>текст1</p>
    const text2 = <p>текст2</p>
    return (
      <div>
        {text1}
        <p>!!!</p>
        {text2}
      </div>
    )
  }
}

export default App
