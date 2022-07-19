/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
import React from 'react'

const interval = 100

export default class ReacTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      timerId: null,
    }
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  componentDidMount() {
    this.handleStart()
  }

  componentWillUnmount() {
    this.handleStop()
  }

  handleStart() {
    this.setState(() => ({
      timerId: setInterval(
        () => this.setState((prevState) => ({ count: prevState.count + 1 })),
        1000 / interval
      ),
    }))
  }

  handleStop() {
    clearInterval(this.state.timerId)
    this.setState((prevState) => ({ timerId: null }))
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
        {!Boolean(this.state.timerId) ? (
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
