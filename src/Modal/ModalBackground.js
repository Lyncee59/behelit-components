import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../Tools/interpolation'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme('modalBackgroundColor')};
  transform: translateZ(0);
  z-index: ${theme('modalZIndex')};
`

const ModalBackground = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

ModalBackground.propTypes = {
  children: PropTypes.node
}

export default ModalBackground
