/* eslint-disable no-extra-boolean-cast */
import React from 'react'

const interval = 100

export default class ReacTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
<<<<<<< HEAD
=======
      timerId: true,
>>>>>>> 4f71a610a4b2fe61cd8016e71662213c668cb499
    }
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.handleStart(), 1000 / interval)
<<<<<<< HEAD
    this.state.timerIdBoolean = !Boolean(this.timerId)
=======
    this.setState((prevState) => ({ timerId: !prevState.timerId }))
>>>>>>> 4f71a610a4b2fe61cd8016e71662213c668cb499
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  handleStart() {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  handleStop() {
    clearInterval(this.timerId)
<<<<<<< HEAD
    this.setState((prevState) => ({
      timerIdBoolean: !prevState.timerIdBoolean,
    }))
=======
    this.setState((prevState) => ({ timerId: !prevState.timerId }))
>>>>>>> 4f71a610a4b2fe61cd8016e71662213c668cb499
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
<<<<<<< HEAD
        {this.state.timerIdBoolean ? (
=======
        {!this.state.timerId ? (
>>>>>>> 4f71a610a4b2fe61cd8016e71662213c668cb499
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
