import React from 'react'
import PropTypes from 'prop-types'
import { FasTimes } from '../Icons'

const ModalToggler = ({ ...props }) => <FasTimes selectable size="28px" {...props} />

ModalToggler.propTypes = {
  selectable: PropTypes.bool
}

ModalToggler.defaultProps = {
  selectable: true
}

export default ModalToggler
