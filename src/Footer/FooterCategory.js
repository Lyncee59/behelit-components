import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '../Tools/interpolation'

const Wrapper = styled.h5`
  color: ${theme('footerCategoryColor')};
  font-family: ${theme('fontPrimary')};
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`

const FooterCategory = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

FooterCategory.propTypes = {
  children: PropTypes.node
}

export default FooterCategory
