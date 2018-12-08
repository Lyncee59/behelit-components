import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import defaultTheme from './theme'

const CustomThemeProvider = (props) => (
  <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
)

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object.isRequired
}

CustomThemeProvider.defaultProps = {
  theme: defaultTheme
}

export default CustomThemeProvider
