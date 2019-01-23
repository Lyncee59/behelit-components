import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../Tools/interpolation'

const Wrapper = styled.div`
  position: relative;
  z-index: ${theme('navbarBrandZIndex')};
`

const NavbarBrand = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

NavbarBrand.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string.isRequired
}

NavbarBrand.defaultProps = {
  height: '60px'
}

export default NavbarBrand
