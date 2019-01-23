import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, theme } from '../Tools/interpolation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${prop('height')};
  width: ${prop('width')};
  min-width: ${prop('width')};
  box-shadow: 0 0 1.5rem 0.4rem ${theme('panelShadowColor')};
  background-color: ${theme('panelBackgroundColor')};
`

const Panel = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

Panel.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.string
}

Panel.defaultProps = {
  height: 'auto',
  width: '100%'
}

export default Panel
