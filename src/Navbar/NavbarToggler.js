import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasTimes, FasBars } from '../Icons'
import { screenSize, theme } from '../Tools/interpolation'

const TogglerExpand = styled(FasTimes)`
  fill: ${theme('navbarTogglerColor')};
  z-index: ${theme('navbarTogglerZIndex')};

  &:hover {
    fill: ${theme('navbarTogglerColor')};
  }

  @media (min-width: ${screenSize('sm')}) {
    display: none;
  }
`

const TogglerCollapse = styled(FasBars)`
  fill: ${theme('navbarTogglerColor')};

  &:hover {
    fill: ${theme('navbarTogglerColor')};
  }

  @media (min-width: ${screenSize('sm')}) {
    display: none;
  }
`

const NavbarToggler = ({ toggled, ...rest }) => toggled
  ? <TogglerExpand selectable size="20px" {...rest} />
  : <TogglerCollapse selectable size="20px" {...rest} />

NavbarToggler.propTypes = {
  selectable: PropTypes.bool,
  toggled: PropTypes.bool
}

NavbarToggler.defaultProps = {
  selectable: false,
  toggled: false
}

export default NavbarToggler
