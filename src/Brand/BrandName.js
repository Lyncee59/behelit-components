/* eslint:disable */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text } from '../Typography'
import { theme } from '../Tools/interpolation'

const Wrapper = styled(Text)`
  color: ${theme('brandNameColor')};
`

const BrandName = (props) => <Wrapper {...props}>Behelit</Wrapper>

BrandName.propTypes = {
  size: PropTypes.string,
  weight: PropTypes.number
}

BrandName.defaultProps = {
  size: '30px',
  weight: 700
}

export default BrandName
