import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  margin-bottom: 1.25rem;
  line-height: 1.4;
  overflow-wrap: break-word;
`

const FooterElement = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterElement.propTypes = {
  children: PropTypes.node
}

export default FooterElement
