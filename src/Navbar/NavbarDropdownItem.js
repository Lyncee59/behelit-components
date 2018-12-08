import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme, screenSize } from '../Tools/interpolation'

const Wrapper = styled.a`
  font-family: ${theme('fontPrimary')};
  font-size: 1rem;
  color: ${theme('navbarDropdownItemMobile')};
  min-height: 1.5rem;
  margin-bottom: 1.5rem;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;

  &:hover { 
    text-decoration: underline;
  }

  @media(min-width: ${screenSize('sm')}) {
    color: ${theme('navbarDropdownItem')};
  }
`

const NavbarDropdownItem = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

NavbarDropdownItem.propTypes = {
  children: PropTypes.node
}

export default NavbarDropdownItem
