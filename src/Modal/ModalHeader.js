import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../Tools/interpolation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid ${theme('modalBorderColor')};
`

const ModalHeader = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

ModalHeader.propTypes = {
  children: PropTypes.node
}

export default ModalHeader
