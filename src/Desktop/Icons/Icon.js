import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'
import '../Fonts/Fontawesome'

const Icon = styled.i`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  cursor: ${props => props.cursor === 1 ? 'pointer' : 'inherit'};
  transition: 0.3s;

  &:hover { 
    color: ${props => props.cursor === 1 && props.color !== 'inherit' ? lighten(0.15, props.color) : props.color};
  }
`

const Fontawesome = props => {
  const { name, cursor, ...rest } = props
  return <Icon className={`fa fa-${name}`} cursor={cursor ? 1 : 0} {...rest} />
}

Fontawesome.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  weight: PropTypes.oneOf([100, 300, 400, 500, 700, 900]),
  size: PropTypes.string,
  cursor: PropTypes.bool
}

Fontawesome.defaultProps = {
  color: 'inherit',
  weight: 400,
  size: '48px',
  cursor: false
}

export default Fontawesome
