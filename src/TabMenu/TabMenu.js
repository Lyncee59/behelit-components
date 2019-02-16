import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop } from '../Tools/interpolation'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${prop('width')};
  margin-bottom: 0.5rem;
`

const TabMenu = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
)

TabMenu.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
}

TabMenu.defaultProps = {
  width: '100%'
}

export default TabMenu
