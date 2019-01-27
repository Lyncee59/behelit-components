import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop } from '../Tools/interpolation'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${prop('width')};

  & *:not(:last-child) {
    margin-right: 0.4rem;
  }

  & > :first-child {
    border-top-right-radius: initial;
    border-bottom-right-radius: initial;
  }

  & > :last-child {
    border-top-left-radius: initial;
    border-bottom-left-radius: initial;
  }

  & > :not(:first-child):not(:last-child) {
    border-top-right-radius: initial;
    border-bottom-right-radius: initial;
    border-top-left-radius: initial;
    border-bottom-left-radius: initial;
  }
`

const ButtonGroup = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

ButtonGroup.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string
}

ButtonGroup.defaultProps = {
  width: '100%'
}

export default ButtonGroup
