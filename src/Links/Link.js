import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, theme } from '../Tools/interpolation'

const getTextTransform = (props) => {
  if (props.capitalize) {
    return 'capitalize'
  } else if (props.uppercase) {
    return 'uppercase'
  } else {
    return 'none'
  }
}

const Wrapper = styled.a`
  font-family: ${theme('fontPrimary')};
  font-weight: ${prop('weight')};
  font-size: ${prop('size')};
  text-transform: ${getTextTransform};
  font-style: ${(props) => props.italic ? 'italic' : 'normal'};
  color: ${theme('linkColor')};
  opacity: ${prop('opacity')};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${theme('linkHoverColor')};
  }
`

const Link = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

Link.propTypes = {
  capitalize: PropTypes.bool,
  children: PropTypes.node,
  italic: PropTypes.bool,
  opacity: PropTypes.number,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700])
}

Link.defaultProps = {
  capitalize: false,
  italic: false,
  opacity: 1,
  size: '1rem',
  uppercase: false,
  weight: 400
}

export default Link
