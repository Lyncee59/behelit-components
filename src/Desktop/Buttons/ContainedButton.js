import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'

const ContainedButton = styled.button.attrs({ type: props => props.type })`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props => props.fullwidth ?'100%' : props.width};
  padding: 10px 15px;
  box-sizing: border-box;
  user-select: none;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  letter-spacing: normal;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  line-height: 1;
  text-transform: ${props => props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none'};
  font-family: 'Montserrat', Helvetica, sans-serif;
  font-size: 14px;
  font-weight: ${props => props.bold ? '700' : '300'};
  color: ${props => props.primaryColor};
  background-color: ${props => props.secondaryColor};
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.secondaryColor};
  border-radius: 3px;
  box-sizing: border-box;
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    background-color: ${props => props.disabled ? 'none' : darken(0.1, props.secondaryColor)};
    border-color: ${props => props.disabled ? 'none' : darken(0.1, props.secondaryColor)};
  }
  &:focus { outline:0; }
 `

 ContainedButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  borderColor: PropTypes.string,
  fullwidth: PropTypes.bool,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  bold: PropTypes.bool,
  uppercase: PropTypes.bool,
  capitalize: PropTypes.bool
}

ContainedButton.defaultProps = {
  type: 'button',
  primaryColor: '#FFFFFF',
  secondaryColor: '#990000',
  fullwidth: false,
  width: 'auto',
  disabled: false,
  bold: false,
  uppercase: false,
  capitalize: false
}

export default ContainedButton