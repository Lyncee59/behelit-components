import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

const Icon = styled.i`
  font-size: ${props => props.size}!important;
  font-weight: ${props => props.weight}!important;
  color: ${props => props.color}!important;
  cursor: ${props => props.cursor === 1 ? 'pointer' : 'default'};
  transition: 0.3s;

  &:hover { color: ${props => props.hover ? lighten(0.15, props.color) : props.color}; }
`

const Fontawesome = props => {
  const { name, cursor, ...rest } = props
  return <Icon className={`fa fa-${name}`} cursor={cursor ? 1 : 0} {...rest} />
}

Fontawesome.propTypes = {
  color: PropTypes.string,
  weight: PropTypes.oneOf([100, 300, 400, 500, 700, 900]),
  size: PropTypes.string,
  cursor: PropTypes.bool,
  hover: PropTypes.bool
}

Fontawesome.defaultProps = {
  color: '#990000',
  weight: 400,
  size: '16px',
  cursor: false,
  hover: false
}

export default Fontawesome
