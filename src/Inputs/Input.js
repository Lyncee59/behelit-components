import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, theme } from '../Tools/interpolation'

const Wrapper = styled.input`
  display: block;
  width: ${prop('width')};
  height: 2.7rem;
  padding: 0 1.4rem;
  box-sizing: border-box;
  font-family: ${theme('fontPrimary')};
  font-size: 1rem;
  color: ${theme('inputColor')};
  border-width: 1px;
  border-color: ${theme('inputBorderColor')};
  border-style: solid;
  border-radius: 0.125rem;
  background: ${theme('inputBackgroundColor')};
  background-image: none;
  outline-width: 0;
  user-select: text;

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

const Input = ({ ...props }) => <Wrapper {...props} />

Input.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['date', 'number', 'password', 'search', 'text']),
  value: PropTypes.string,
  width: PropTypes.string
}

Input.defaultProps = {
  disabled: false,
  type: 'text',
  width: '100%'
}

export default Input
