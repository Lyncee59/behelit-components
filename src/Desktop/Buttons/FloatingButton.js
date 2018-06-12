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
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border-radius: 50%;
  border-width: 2px solid ${props => props.backgroundColor};
  opacity: ${props => props.disabled ? 0.5 : 1};
  &:hover {
    border-color: ${props => props.disabled ? 'none' : lighten(0.1, props.backgroundColor)};
    background-color: ${props => props.disabled ? 'none' : lighten(0.1, props.backgroundColor)};
  }
  &:focus { outline:0; }
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
      <Icon name={props.name} color={props.color} size={fontSize} />
      {props.children}
    </Wrapper>
  )
}

IconButton.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'submit']),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool
}

IconButton.defaultProps = {
  name: 'plus',
  size: 'small',
  type: 'button',
  color: '#FFFFFF',
  backgroundColor: '#990000',
  disabled: false
}

export default IconButton
