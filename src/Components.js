import React from 'react'
import './Components.css'
import styled from 'styled-components';

const LoadingDiv = styled.div`
  content: "";
  display: block;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 1;
  ${({ enabled, timeout }) => {
    return (
      enabled ?
        `
          background-color: rgba(var(--default-highlight-color-s), 0.2);
          width: 0%;
          transition: 0s;
        `
        :
        `
          background-color: rgba(var(--default-highlight-color-s), 0.15);
          width: 100%;
          transition: width ${timeout}s linear, opacity ${timeout}s ease 1s 
        `
    )
  }}
`

class Button extends React.Component {
  constructor(data) {
    super();
  }

  addClassIfDisabled = () => {
    return this.props.enabled ? '' : 'disabled';
  }

  addClassIfNeedsRequirements = () => {
    return this.props.hasRequirements ? '' : 'needsRequirements';
  }

  clickEvent = () => {
    if (this.props.enabled) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div
        onClick={this.clickEvent}
        className={`button loadingButton ${this.addClassIfDisabled()} ${this.addClassIfNeedsRequirements()}`}
      >
        <div>
          {this.props.title}
        </div>
        <div className={`subtitle`}>
          {this.props.subtitle}
        </div>
        <LoadingDiv
          timeout={this.props.timeout}
          enabled={this.props.enabled}
        ></LoadingDiv>
      </div>
    )
  }
}

export {
  Button
}