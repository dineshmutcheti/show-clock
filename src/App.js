import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  onToggleClock = () => {
    this.setState(prevState => {
      const {showClock} = prevState // access the showClock from the previous state
      return {
        showClock: !showClock, // it will show in the reverse
      }
    })
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock />} // if the showclock is true then the clock component will be render and it will be displayed  if the show clock will false the clock component will be not be render the clock component will not display
      </div> //if showClock is true the component will display else it will not display
    )
  }
}

export default App
