import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FasTimes } from '../Icons'

import { theme } from '../Tools/interpolation'

const TogglerIcon = styled(FasTimes)`
  fill: ${theme('modalTogglerColor')};
  &:hover { fill: ${theme('modalTogglerHoverColor')}; }
`

const ModalToggler = ({ ...props }) => <TogglerIcon selectable size="28px" {...props} />

ModalToggler.propTypes = {
  selectable: PropTypes.bool
}

ModalToggler.defaultProps = {
  selectable: true
}

export default ModalToggler
