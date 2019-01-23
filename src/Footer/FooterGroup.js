import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { screenSize } from '../Tools/interpolation'

const Wrapper = styled.div`
  flex: 0 1 auto;
  width: 12rem;
  margin-bottom: 4rem;
  margin-right: 2rem;
  line-height: 2.5rem;

  @media (max-width: ${screenSize('sm')}) {
    margin-bottom: 4rem;
  }
`

const FooterRow = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

FooterRow.propTypes = {
  children: PropTypes.node
}

export default FooterRow
