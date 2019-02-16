import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text } from '../Typography'
import { palette, theme } from '../Tools/interpolation' 

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  font-family: ${theme('fontPrimary')};
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.selected ? props.theme['tabMenuItemSelectedColor'] : props.theme['tabMenuItemColor']};
  background: ${(props) => props.selected ? props.theme['tabMenuItemSelectedBackgroundColor'] : props.theme['tabMenuItemBackgroundColor']};
  border: 1px solid ${(props) => props.selected ? props.theme['tabMenuItemSelectedBorderColor'] : props.theme['tabMenuItemBorderColor']};
  cursor: pointer;
`

const TabMenuItem= ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
)

TabMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
}

TabMenuItem.defaultProps = {
  selected: false
}

export default TabMenuItem
