import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.width};
  padding: 1rem;
  box-sizing: border-box;
`

const DataCell = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
  </Wrapper>
)

DataCell.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired
}

DataCell.defaultProps = {
  width: 'auto'
}

export default DataCell
