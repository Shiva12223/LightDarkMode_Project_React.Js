// Write your code her

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: false}

  buttonText = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  getButtonText = () => {
    const {lightMode} = this.state

    return lightMode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const buttonText = this.getButtonText()
    const {lightMode} = this.state
    return (
      <div className="bg-container">
        <div className={lightMode ? 'light-mode' : 'dark-mode'}>
          <h1 className="heading">Click To Change Mode</h1>
          <div>
            <button type="button" onClick={this.buttonText} className="btn">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
