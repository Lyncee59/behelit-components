import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, theme } from '../Tools/interpolation'

const Wrapper = styled.textarea.attrs({
  name: prop('name')
})`
  display: block;
  width: ${prop('width')};
  height: ${prop('height')};
  padding: 0.7rem 1.4rem;
  box-sizing: border-box;
  font-family: ${theme('fontPrimary')};
  font-size: 1rem;
  color: ${theme('inputColor')};
  border-width: 1px;
  border-color: ${theme('inputBorderColor')};
  border-style: solid;
  border-radius: 0.125rem;
  background-color: ${theme('inputBackgroundColor')};
  background-image: none;
  outline-width: 0;
  user-select: text;
  resize: none;

  &:disabled {
    color: ${theme('inputColor')};
    background: ${theme('inputBackgroundColor')};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme('inputPlaceholderColor')};
    font-size: 0.875rem;
  }
`

const TextArea = ({ ...props }) => {
  return <Wrapper {...props} />
}

TextArea.propTypes = {
  disabled: PropTypes.bool,
  height: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string
}

TextArea.defaultProps = {
  disabled: false,
  height: '100px',
  width: '100%'
}

export default TextArea
