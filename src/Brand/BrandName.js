/* eslint:disable */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text } from '../Typography'
import { theme } from '../Tools/interpolation'

const Wrapper = styled(Text).attrs({ weight: 700 })`
  color: ${theme('brandNameColor')};
`

const BrandName = (props) => (
  <Wrapper {...props}>
    Behelit
  </Wrapper>
)

BrandName.propTypes = {
  size: PropTypes.string
}

BrandName.defaultProps = {
  size: '30px'
}

export default BrandName
