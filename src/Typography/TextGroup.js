import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop } from '../Tools/interpolation'

const Wrapper = styled.div`
  text-align: ${prop('align')};

  & > * {
    display: ${(props) => props.inline ? 'inline' : 'block'};
    margin-right: ${(props) => props.inline ? '0.4rem' : '0'};
  }
`

const TextGroup = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

TextGroup.propTypes = {
  align: PropTypes.oneOf(['justify', 'left', 'right', 'center']),
  children: PropTypes.node,
  inline: PropTypes.bool
}

TextGroup.defaultProps = {
  align: 'justify',
  inline: true
}

export default TextGroup
