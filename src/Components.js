import React from 'react'
import './Components.css'

class Button extends React.Component {
  constructor(data) {
    super()
  }

  addClassIfDisabled = () => {
    return this.props.enabled ? '' : 'disabled';
  }

  clickEvent = () => {
    if (this.props.enabled) {
      console.log(this.props)
      this.props.onClick();
    }
  }

  render() {
    return (
      <div>
        <button
          className={`button loadingButton ${this.addClassIfDisabled()}`}
          onClick={this.clickEvent}
        >
          {this.props.name}
        </button>
        <div
          className="loadingButtonAfter"
          style={{ transition: `width ${this.props.timeout}s linear, opacity 0.5s ease 1s` }}
        ></div>
      </div>
    )
  }
}

export {
  Button
}