import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { theme } from '../Tools/interpolation'

const themeColorTemplate = css`
  fill: ${theme('iconColor')};
  cursor: ${(props) => props.selectable === 1 ? 'pointer' : 'default'};

  &:hover {
    fill: ${(props) => props.selectable === 1 ? theme('iconHoverColor') : theme('iconColor')};
  }
`

const svgColorTemplate = css`
  cursor: ${(props) => props.selectable === 1 ? 'pointer' : 'default'};
`

export default (Svg, name, keepSvgColor = false) => {
  const template = keepSvgColor ? svgColorTemplate : themeColorTemplate
  const Icon = styled(Svg)`
    ${template};
  `

  const WithStyle = ({ selectable, size, ...rest }) => (
    <Icon {...rest} height={size} selectable={selectable === true ? 1 : 0} width={size} />
  )

  WithStyle.propTypes = {
    selectable: PropTypes.bool,
    size: PropTypes.string
  }

  WithStyle.defaultProps = {
    selectable: false,
    size: '44px'
  }

  WithStyle.displayName = name

  return WithStyle
}
