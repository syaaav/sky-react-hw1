import React from 'react'

const interval = 100

export default class ReacTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      isCounting: false,
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.handleStart(), 1000 / interval)
    this.setState((prevState) => ({
      isCounting: !prevState.isCounting,
    }))
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  handleStart() {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  handleStop() {
    clearInterval(this.timerId)
    this.setState((prevState) => ({
      isCounting: !prevState.isCounting,
    }))
  }

  handleReset() {
    this.setState(() => ({ count: 0 }))
  }

  render() {
    return (
      <div className="ReacTimer">
        <h1>React Timer</h1>
        <h3>
          <span>
            {`${Math.round(this.state.count / interval / 60 / 60)}`} :{' '}
          </span>
          <span>{`${Math.round(this.state.count / interval / 60)}`} : </span>
          <span>{`${Math.round(this.state.count / interval)}`} . </span>
          <span>{`${this.state.count % interval}`}</span>
        </h3>
        {this.state.isCounting ? (
          <button type="button" onClick={this.componentDidMount}>
            Start
          </button>
        ) : (
          <button type="button" onClick={this.handleStop}>
            Stop
          </button>
        )}
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    )
  }
}
