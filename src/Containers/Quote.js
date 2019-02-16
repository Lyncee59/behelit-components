import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FasQuoteLeft, FasQuoteRight } from '../Icons'
import { theme } from '../Tools/interpolation'

const Wrapper = styled.div`
  position: relative;
  padding: 2rem;
  box-sizing: border-box;
  background-color: ${theme('quoteBackgroundColor')};
  border: 1px solid ${theme('quoteBorderColor')};
  border-radius: 5px;
`
const LeftQuote = styled(FasQuoteLeft)`
  position: absolute;
  top: 10px;
  left: 10px;
  fill: ${theme('quoteIconColor')};
`
const RightQuote = styled(FasQuoteRight)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  fill: ${theme('quoteIconColor')};
`

const Quote = ({ children }) => (
  <Wrapper>
    <LeftQuote size="14px" />
    {children}
    <RightQuote size="14px" />
  </Wrapper>
)

Quote.propTypes = {
  children: PropTypes.node.isRequired
}

export default Quote
