import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, theme } from '../Tools/interpolation'

const Wrapper = styled.button.attrs({
  type: prop('type')
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  line-height: 2.5rem;
  width: ${prop('width')};
  padding: 0 1rem;
  box-sizing: border-box;
  color: ${theme('buttonColor')};
  background-color: ${theme('buttonBackgroundColor')};
  border: none;
  border-radius: 0.25rem;
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
  outline: none;
  transition: all 0.3s ease 0s;
  opacity: ${(props) => props.disabled ? 0.5 : 1};
  font-family: ${theme('fontPrimary')};
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.disabled ? theme('buttonBackgroundColor') : theme('buttonHoverColor')};
    transform: ${(props) => props.bounced ? 'scale(0.95)' : 'none'};
  }
`
const Button = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Button.propTypes = {
  bounced: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  width: PropTypes.string
}

Button.defaultProps = {
  bounced: false,
  disabled: false,
  type: 'button',
  width: '100%'
}

export default Button
