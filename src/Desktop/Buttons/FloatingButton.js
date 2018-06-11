import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'

const FloatingButton = styled.button.attrs({ type: props => props.type })`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border-radius: 3px;
  border-width: 2px solid ${props => props.borderColor};
  opacity: ${props => props.disabled ? 0.5 : 1};
  &:hover {
    border-color: ${props => props.disabled ? 'none' : darken(0.1, props.borderColor)};
    background-color: ${props => props.disabled ? 'none' : darken(0.1, props.backgroundColor)};
  }
  &:focus { outline:0; }
 `

 FloatingButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  bold: PropTypes.bool,
  uppercase: PropTypes.bool,
  capitalize: PropTypes.bool
}

FloatingButton.defaultProps = {
  type: 'button',
  color: '#FFFFFF',
  backgroundColor: '#990000',
  borderColor: '#990000',
  width: '100%',
  disabled: false,
  bold: false,
  uppercase: false,
  capitalize: false
}

export default FloatingButton