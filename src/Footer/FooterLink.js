import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from '../Links/Link'

const Wrapper = styled(Link)`
  position: relative;
  white-space: nowrap;
`

const FooterLink = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

FooterLink.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  weight: PropTypes.number
}

FooterLink.defaultProps = {
  size: '1rem',
  weight: 500
}

export default FooterLink
