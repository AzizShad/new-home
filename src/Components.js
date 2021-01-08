import React, { useState } from 'react'
import './Components.css'

class Button extends React.Component {
  constructor(data) {
    super()
    this.state = {
      enabled: true
    }
  }

  render() {
    let classNames = `Button ${this.state.enabled ? 'Enabled' : 'Disabled'}`;
    return (
      <div className={classNames}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </div>
    )
  }
}

function ResourceButton(props) {
  const resource = props.resource;
  const [value, setValue] = useState(resource.amount)
  
  const clickHandler = () => {
    resource.add(1);
    setValue(resource.amount);
  }

  return (
    <div
      onClick={clickHandler}
    >
      <Button
        name={`${resource.desc}: ${value}`}
      >
      </Button>
    </div>
  )
}

export {
  Button,
  ResourceButton
}