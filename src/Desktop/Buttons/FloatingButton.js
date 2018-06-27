import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'
import Icon from '../Icons/Icon'

const Wrapper = styled.button.attrs({ type: props => props.type }) `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props => props.containerSize};
  height: ${props => props.containerSize};
  transition: all 0.2s ease-in-out;
  background-color: ${props => props.theme.buttons[props.nature].color2};
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.theme.buttons[props.nature].color2};
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  &:hover {
    border-color: ${props => props.disabled ? 'none' : lighten(0.1, props.theme.buttons[props.nature].color2)};
    background-color: ${props => props.disabled ? 'none' : lighten(0.1, props.theme.buttons[props.nature].color2)};
  }
  &:focus { outline:0; }
  & i {
    color: ${props => props.theme.buttons[props.nature].color1};
    &:hover { color: ${props => props.theme.buttons[props.nature].color1}; }
  }
`

const selectSize = size => {
  switch(size) {
    case 'small': return { fontSize: '20px', containerSize: '40px' }
    case 'medium': return { fontSize: '32px', containerSize: '75px' }
    case 'large': return { fontSize: '50px', containerSize: '100px' }
  }
}

const IconButton = props => {
  const { fontSize, containerSize } = selectSize(props.size)

  return (
    <Wrapper containerSize={containerSize} {...props}>
      <Icon name={props.name} size={fontSize} />
      {props.children}
    </Wrapper>
  )
}

IconButton.propTypes = {
  name: PropTypes.string,
  nature: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary', 'octonary', 'nonary', 'denary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool
}

IconButton.defaultProps = {
  name: 'plus',
  nature: 'primary',
  size: 'small',
  type: 'button',
  disabled: false
}

export default IconButton
