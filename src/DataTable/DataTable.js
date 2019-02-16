import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '../Tools/interpolation'

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-width: 1200px;
  padding: 1rem;
  box-sizing: border-box;
  background: ${theme('dataTableBackgroundColor')};
  border: 1px solid ${theme('dataTableBorderColor')};
  border-radius: 5px;

  & > :not(:first-child) {
    border-top: 1px dashed ${theme('dataTableBorderColor')}
  }
`

const DataTable = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <Container>
      {children}
    </Container>
  </Wrapper>
)

DataTable.propTypes = {
  children: PropTypes.node.isRequired
}

export default DataTable
