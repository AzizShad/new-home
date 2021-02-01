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

const Button = (props) => {
  const addClassIfDisabled = () => {
    return props.enabled ? '' : 'disabled';
  }

  const addClassIfNeedsRequirements = () => {
    return props.hasRequirements ? '' : 'needsRequirements';
  }

  const clickEvent = () => {
    if (props.enabled && props.hasRequirements) {
      props.onClick();
    }
  }

  return (
    <div
      onClick={clickEvent}
      className={`button loadingButton ${addClassIfDisabled()} ${addClassIfNeedsRequirements()}`}
    >
      <div>
        {props.title}
      </div>
      <div className={`subtitle`}>
        {props.modifiers}
      </div>
      <div className={`subtitle requirements`}>
        {props.requirements}
      </div>
      <LoadingDiv
        timeout={props.timeout}
        enabled={props.enabled}
      ></LoadingDiv>
    </div>
  )
};

const TabPanel = (props) => {
  return (
    <div className="tabPanel">
      {props.children}
    </div>
  )
}

const Tab = (props) => {
  return (
    <button
      className={`${props.active ? 'active' : ''}`}
      onClick={props.clickEvent}
    >
      {props.description}
    </button >
  )
}

export {
  Button,
  TabPanel,
  Tab
}