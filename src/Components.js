import React from 'react'
import './Components.css'

class Button extends React.Component {
  constructor(data) {
    super()
    this.state = {
      enabled: true
    }
    // this.clckAction = this.clckAction.bind(this)
  }

  onClick() {
    this.clckAction()
  }

  render() {
    let classNames = `Button ${this.state.enabled ? 'Enabled' : 'Disabled'}`;
    return (
      <div className={classNames}>
        {this.props.name}
      </div>
    )
  }
}

class ResourceButton extends React.Component {
  //create click action that adds resource to global state
  constructor(data) {
    super()
    this.state = {
      enabled: true
    }
  }

  onClick() {
    this.clckAction()
  }

  render() {
    return (
      <Button name={this.props.name}>
      </Button>
    )
  }
}

export {
  Button,
  ResourceButton
}