import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { screenSize, theme } from '../Tools/interpolation'

const Wrapper = styled.span`
  font-family: ${theme('fontPrimary')};
  font-size: 1rem;
  font-weight: 600;
  color: ${theme('navbarDropdownHeaderColor')};
  cursor: pointer;
  display: none;

  @media (min-width: ${screenSize('sm')}) {
    display: block;
  }
`

const NavbarDropdownHeader = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarDropdownHeader.propTypes = {
  children: PropTypes.node
}

export default NavbarDropdownHeader
