import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const List = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

List.propTypes = {
  children: PropTypes.node
}

export default List
