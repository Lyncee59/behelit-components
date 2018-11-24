import palette from './palette'

const theme = {
  /* eslint-disable sort-keys */
  fontPrimary: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;",
  palette,
  screenSizes: {
    sm: '48rem',
    md: '62rem',
    lg: '75rem'
  },
  buttonBackgroundColor: palette.orient,
  buttonColor: palette.white,
  buttonHoverColor: palette.ocean
  /* eslint-enable sort-keys */
}

export default theme
