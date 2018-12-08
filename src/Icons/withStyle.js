import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { theme } from '../Tools/interpolation'

const themeColorTemplate = css`
  fill: ${theme('iconColor')};
  cursor: ${(props) => props.selectable ? 'pointer' : 'default'};

  &:hover {
    fill: ${(props) => props.selectable ? theme('iconHoverColor') : theme('iconColor')};
  }
`

const svgColorTemplate = css`
  cursor: ${(props) => props.selectable ? 'pointer' : 'default'};
`

export default (Svg, name, keepSvgColor = false) => {
  const template = keepSvgColor ? svgColorTemplate : themeColorTemplate
  const Icon = styled(Svg)`
    ${template};
  `

  const WithStyle = ({ selectable, size, ...rest }) => (
    <Icon {...rest} height={size} selectable={selectable} width={size} />
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
