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

const Wrapper = styled.span`
  font-family: ${theme('fontPrimary')};
  font-weight: ${prop('weight')};
  font-size: ${prop('size')};
  text-transform: ${getTextTransform};
  font-style: ${(props) => props.italic ? 'italic' : 'normal'};
  color: ${theme('textColor')};
  opacity: ${prop('opacity')};
`

const Text = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

Text.propTypes = {
  capitalize: PropTypes.bool,
  children: PropTypes.node,
  italic: PropTypes.bool,
  opacity: PropTypes.number,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700])
}

Text.defaultProps = {
  capitalize: false,
  italic: false,
  opacity: 1,
  size: '1rem',
  uppercase: false,
  weight: 400
}

export default Text
