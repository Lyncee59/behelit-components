import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { theme } from '../Tools/interpolation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: ${theme('dataRowBackgroundColor')};
  cursor: ${(props) => props.disableHighlight ? 'default' : 'pointer'};

  &:hover { 
    background: ${(props) => props.disableHighlight ? theme('dataRowBackgroundColor') : theme('dataRowHighlightBackgroundColor')};
  }
`

const DataRow = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
)

DataRow.propTypes = {
  children: PropTypes.node.isRequired,
  disableHighlight: PropTypes.bool
}

DataRow.defaultProps = {
  disableHighlight: false
}

export default DataRow
