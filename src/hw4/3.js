import React from 'react'

export default class PomodoroTracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 0,
      seconds: 0,
      isCounting: false,
    }
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.handleWorkTime = this.handleWorkTime.bind(this)
    this.handleShortBreak = this.handleShortBreak.bind(this)
    this.handleLongBreak = this.handleLongBreak.bind(this)
  }

  componentDidUpdate() {
    if (this.state.isCounting) {
      const interval = setInterval(() => {
        clearInterval(interval)

        if (this.state.seconds === 0) {
          if (this.state.minutes !== 0) {
            this.setState((prevState) => ({ minutes: prevState.minutes - 1 }))
            this.setState(() => ({ seconds: 59 }))
          } else if (this.state.minutes === 0 && this.state.seconds === 0) {
            this.setState((prevState) => ({
              isCounting: !prevState.isCounting,
            }))
          } else {
            this.setState(() => ({ seconds: 59 }))
          }
        } else {
          this.setState((prevState) => ({ seconds: prevState.seconds - 1 }))
        }
      }, 1000)
    } else {
      clearInterval(this.interval)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleWorkTime() {
    this.setState((prevState) => ({
      isCounting: !prevState.isCounting,
    }))
    this.setState(() => ({ minutes: 30 }))
    this.componentDidUpdate()
  }

  handleShortBreak() {
    this.setState((prevState) => ({
      isCounting: !prevState.isCounting,
    }))
    this.setState(() => ({ minutes: 7 }))
    this.componentDidUpdate()
  }

  handleLongBreak() {
    this.setState((prevState) => ({
      isCounting: !prevState.isCounting,
    }))
    this.setState(() => ({ minutes: 15 }))
    this.componentDidUpdate()
  }

  render() {
    const timerMinutes =
      this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes
    const timerSeconds =
      this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds

    return (
      <div className="pomodoro">
        <div className="message">
          {this.state.isCounting ? (
            <div>Timer is going!</div>
          ) : (
            <div>{`Let's go!`}</div>
          )}
        </div>
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
        <button type="button" onClick={this.handleWorkTime}>
          Start Working
        </button>
        <button type="button" onClick={this.handleShortBreak}>
          Short Break
        </button>
        <button type="button" onClick={this.handleLongBreak}>
          Long Break
        </button>
      </div>
    )
  }
}
