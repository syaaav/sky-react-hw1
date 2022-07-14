import React from 'react'

class MinMax extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curCount: {},
      minCount: props.min,
      maxCount: props.max,
    }
  }

  handleChange(event) {
    this.setState({ curCount: parseInt(event.target.value, 10) })
  }

  plus = () => {
    this.setState((prevState) => ({ curCount: prevState.curCount + 1 }))
  }

  minus = () => {
    this.setState((prevState) => ({ curCount: prevState.curCount - 1 }))
  }

  render() {
    return (
      <div>
        <button
          type="button"
          disabled={this.state.curCount <= this.state.minCount}
          onClick={this.minus}
        >
          {' '}
          уменьшить{' '}
        </button>
        <input
          type="number"
          pattern="/^\d+$/"
          value={this.state.curCount}
          onChange={this.handleChange.bind(this)}
        />
        <button
          type="button"
          disabled={this.state.curCount >= this.state.maxCount}
          onClick={this.plus}
        >
          {' '}
          увеличить{' '}
        </button>
      </div>
    )
  }
}

export default MinMax
