import React from 'react'
import './Components.css'

class Button extends React.Component {
  constructor(data) {
    super();
    this.afterElement = React.createRef();
  }

  addClassIfDisabled = () => {
    return this.props.enabled ? '' : 'disabled';
  }

  addClassIfEnabled = () => {
    return this.props.enabled ? 'enabled' : '';
  }

  clickEvent = () => {
    if (this.props.enabled) {
      console.log(this.afterElement);
      this.props.onClick();
    }
  }

  render() {
    return (
      <div
        onClick={this.clickEvent}
        className={`button loadingButton ${this.addClassIfDisabled()}`}
      >
        <span>
          {this.props.name}
        </span>
        <div
          className={`loadingButtonAfter ${this.addClassIfEnabled()}`}
          ref={this.afterElement}
          style={{ transition: `width ${this.props.timeout}s linear, opacity ${this.props.timeout}s ease 1s` }}
        ></div>
      </div>
    )
  }
}

export {
  Button
}