import React from 'react'

class MinMax extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curCount: props.min,
      minCount: props.min,
      maxCount: props.max,
    }
  }

  plus = () => {
    this.setState((prevState) => ({ curCount: prevState.curCount + 1 }))
  }

  minus = () => {
    this.setState((prevState) => ({ curCount: prevState.curCount - 1 }))
  }

  render() {
    const currentCount = this.state.curCount
    return (
      <div>
        <button
          type="button"
          disabled={currentCount === this.state.minCount}
          onClick={this.minus}
        >
          {' '}
          уменьшить{' '}
        </button>
        <span> {this.state.curCount} </span>
        <button
          type="button"
          disabled={currentCount === this.state.maxCount}
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
