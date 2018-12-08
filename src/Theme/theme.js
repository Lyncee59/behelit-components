/* eslint-disable sort-keys */
import { darken } from 'polished'
import palette from './palette'

const theme = {
  palette,
  fontPrimary: "'Roboto', sans-serif",
  screenSizes: {
    sm: '48rem',
    md: '62rem',
    lg: '75rem'
  },
  brandNameColor: palette['crimson'],
  buttonBackgroundColor: palette['crimson'],
  buttonColor: palette['white'],
  buttonHoverColor: darken(0.05, palette['crimson']),
  inputColor: palette['black80'],
  iconColor: palette['crimson'],
  iconHoverColor: darken(0.05, palette['crimson']),
  inputBackgroundColor: palette['white'],
  inputBorderColor: palette['lightgray'],
  inputPlaceholderColor: palette['black40'],
  linkColor: palette['crimson'],
  linkHoverColor: darken(0.05, palette['crimson']),
  loaderColor: palette['crimson'],
  modalBackgroundColor: palette['black70'],
  modalBorderColor: palette['black30'],
  modalForegroundColor: palette['white'],
  navbarBrandZIndex: 100,
  navbarDropdownContentBackgroundColor: palette['white'],
  navbarDropdownContentShadowColor: palette['black30'],
  navbarDropdownContentShadowColor2: palette['black30'],
  navbarDropdownHeaderColor: palette['crimson'],
  navbarDropdownItem: palette['crimson'],
  navbarDropdownItemMobile: palette['white'],
  navbarMenuBackgroundColor: palette['crimson'],
  navbarMenuZIndex: 50,
  navbarDropdownContentBorderColor: palette['white'],
  navbarTogglerColor: palette['white'],
  navbarTogglerZIndex: 100,
  panelBackgroundColor: palette['white'],
  panelShadowColor: palette['black10'],
  sectionBackgroundColor: palette['silver'],
  textColor: palette['black80']
}

export default theme
/* eslint-enable sort-keys */
