import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten, darken } from 'polished'

const TextInput = styled.input.attrs({ type: props => props.type })`
  display: block;
  width: ${props => props.fullwidth ? '100%' : props.width};
  height: ${props => props.height};
  padding: 6px 12px;
  box-sizing: border-box;
  font-family: 'Roboto', sans serif;
  font-size: 14px;
  font-weight: 300;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  background-image: none;
  outline-width: 0;
  user-select: text;
  border: 1px solid  ${props => props.borderColor};
  &::placeholder {
    color: ${props => lighten(0.2, props.color)};
    opacity: 0.4;
  }
  &:disabled {
    color: ${props => darken(0.1, props.color)};
    background: ${props => darken(0.1, props.backgroundColor)};
    cursor: not-allowed;
  }
`

TextInput.propTypes = {
  type: PropTypes.oneOf(['text', 'date', 'number']),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  fullwidth: PropTypes.bool,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.string
}

TextInput.defaultProps = {
  type: 'text',
  color: '#545456',
  backgroundColor: '#FFFFFF',
  borderColor: '#CCCCCC',
  fullwidth: true,
  width: '200px',
  disabled: false,
  height: '40px'
}

export default TextInput
