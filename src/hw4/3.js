import React from 'react'

export default class PomodoroTracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 0,
      seconds: 0,
      isCounting: false,
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleWorkTime = this.handleWorkTime.bind(this)
    this.handleShortBreak = this.handleShortBreak.bind(this)
    this.handleLongBreak = this.handleLongBreak.bind(this)
    this.handleStartTimer = this.handleStartTimer.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.handleStartTimer(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleWorkTime() {
    this.setState(() => ({ minutes: 30, seconds: 0 }))
    this.setState(() => ({ isCounting: true }))
  }

  handleShortBreak() {
    this.setState(() => ({ minutes: 1, seconds: 0 }))
    this.setState(() => ({ isCounting: true }))
  }

  handleLongBreak() {
    this.setState(() => ({ minutes: 15, seconds: 0 }))
    this.setState(() => ({ isCounting: true }))
  }

  handleStartTimer() {
    if (this.state.isCounting) {
      const interval = setInterval(() => {
        clearInterval(interval)

        if (this.state.seconds === 0) {
          if (this.state.minutes !== 0) {
            this.setState((prevState) => ({ minutes: prevState.minutes - 1 }))
            this.setState(() => ({ seconds: 59 }))
          }
        } else {
          this.setState((prevState) => ({ seconds: prevState.seconds - 1 }))
        }

        if (this.state.minutes === 0 && this.state.seconds === 0) {
          this.setState(() => ({ isCounting: false }))
        }
      }, 1000)
    } else {
      clearInterval(this.interval)
    }
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
