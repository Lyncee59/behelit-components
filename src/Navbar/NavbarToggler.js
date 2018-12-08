import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasTimes, FasBars } from '../Icons'
import { screenSize, theme } from '../Tools/interpolation'

const TogglerExpand = styled(FasTimes).attrs({
  selectable: true,
  size: '20px'
})`
  fill: ${theme('navbarTogglerColor')};
  z-index: ${theme('navbarTogglerZIndex')};

  &:hover {
    fill: ${theme('navbarTogglerColor')};
  }

  @media (min-width: ${screenSize('sm')}) {
    display: none;
  }
`

const TogglerCollapse = styled(FasBars).attrs({
  selectable: true,
  size: '25px'
})`
  fill: ${theme('navbarTogglerColor')} !important;

  &:hover {
    fill: ${theme('navbarTogglerColor')} !important;
  }

  @media (min-width: ${screenSize('sm')}) {
    display: none;
  }
`

const NavbarToggler = ({ toggled, ...rest }) => toggled
  ? <TogglerExpand {...rest} />
  : <TogglerCollapse {...rest} />

NavbarToggler.propTypes = {
  toggled: PropTypes.bool
}

NavbarToggler.defaultProps = {
  toggled: false
}

export default NavbarToggler
