import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'
import Icon from '../Icons/Icon'

const Wrapper = styled.button.attrs({ type: props => props.type })`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props => props.fullwidth ? '100%' : props.width};
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
  border-radius: 3px;
  border-width: 2px solid ${props => props.theme.buttons[props.nature].color2};
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  &:hover {
    border-color: ${props => props.disabled ? 'none' : lighten(0.1, props.theme.buttons[props.nature].color2)};
    background-color: ${props => props.disabled ? 'none' : lighten(0.1, props.theme.buttons[props.nature].color2)};
  }
  &:focus { outline:0; }
  & > :first-child { margin-right: 10px; }
`

const IconButton = props => (
  <Wrapper {...props}>
    <Icon name={props.name} color={props.color} size='20px' />
    {props.children}
  </Wrapper>
)

IconButton.propTypes = {
  name: PropTypes.string,
  nature: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary', 'octonary', 'nonary', 'denary']),
  type: PropTypes.oneOf(['button', 'submit']),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fullwidth: PropTypes.bool,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  bold: PropTypes.bool,
  uppercase: PropTypes.bool,
  capitalize: PropTypes.bool
}

IconButton.defaultProps = {
  name: 'plus',
  nature: 'primary',
  type: 'button',
  color: '#FFFFFF',
  backgroundColor: '#990000',
  fullwidth: false,
  width: 'auto',
  disabled: false,
  bold: false,
  uppercase: false,
  capitalize: false
}

export default IconButton
