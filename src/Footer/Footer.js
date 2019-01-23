import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { screenSize } from '../Tools/interpolation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1.25rem 2rem;
  box-sizing: border-box;

  @media (min-width: ${screenSize('sm')}) {
    padding: 1.25rem 3rem;
  }
`

const Footer = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

Footer.propTypes = {
  children: PropTypes.node
}

export default Footer
