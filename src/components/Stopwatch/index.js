// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isStopwatchRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  startTimer = () => {
    const {isStopwatchRunning} = this.state

    if (!isStopwatchRunning) {
      this.setState({isStopwatchRunning: true})

      this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    }
  }

  stopTimer = () => {
    const {isStopwatchRunning} = this.state
    if (isStopwatchRunning) {
      this.setState({isStopwatchRunning: false})
      this.clearTimerInterval()
    }
  }

  resetTimer = () => {
    this.clearTimerInterval()
    this.setState({timeElapsedInSeconds: 0})
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="stop-watch-bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="timer-card">
          <div className="align-items-in-row">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-icon"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="timer">{this.getElapsedSecondsInTimeFormat()}</h1>
          <div className="align-items-in-row">
            <button
              className="button start-btn"
              type="button"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              className="button stop-btn"
              type="button"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              className="button reset-btn"
              type="button"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
