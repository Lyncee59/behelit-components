import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, screenSize } from '../Tools/interpolation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${prop('height')};
  margin: 0 auto;

  @media (min-width: ${screenSize('lg')}) {
    width: 75rem;
  }
`

const Container = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

Container.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string
}

Container.defaultProps = {
  height: 'auto'
}

export default Container
