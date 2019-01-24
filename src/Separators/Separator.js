import React from 'react'
import styled from 'styled-components'

import { theme } from '../Tools/interpolation'

const Wrapper = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme('separatorColor')};
`

const Separator = (props) => <Wrapper {...props} />

export default Separator
