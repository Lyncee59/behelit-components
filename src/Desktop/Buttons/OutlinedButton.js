import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

const OutlinedButton = styled.button.attrs({ type: props => props.type })`
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
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: ${props => props.bold ? '700' : '300'};
  color: ${props => props.theme.buttons[props.nature].color1};
  background-color: ${props => props.theme.buttons[props.nature].color2};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.buttons[props.nature].color2};
  border-radius: 3px;
  box-sizing: border-box;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  &:hover {
    background-color: ${props => props.disabled ? 'none' : lighten(0.1, props.theme.buttons[props.nature].color2)};
    border-color: ${props => props.disabled ? 'none' : lighten(0.1, props.theme.buttons[props.nature].color2)};
  }
  &:focus { outline:0; }
 `

 OutlinedButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  nature: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary', 'octonary', 'nonary', 'denary']),
  width: PropTypes.bool,
  fullwidth: PropTypes.bool,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  bold: PropTypes.bool,
  uppercase: PropTypes.bool,
  capitalize: PropTypes.bool
}

OutlinedButton.defaultProps = {
  type: 'button',
  nature: 'primary',
  fullwidth: false,
  width: 'auto',
  disabled: false,
  bold: false,
  uppercase: false,
  capitalize: false
}

export default OutlinedButton
