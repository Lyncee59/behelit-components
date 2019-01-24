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
  brandNameColor: palette['red10'],
  buttonBackgroundColor: palette['red10'],
  buttonColor: palette['white'],
  buttonHoverColor: darken(0.05, palette['red10']),
  inputColor: palette['gray8'],
  iconColor: palette['red10'],
  iconHoverColor: darken(0.05, palette['red10']),
  inputBackgroundColor: palette['white'],
  inputBorderColor: palette['gray2'],
  inputPlaceholderColor: palette['gray3'],
  linkColor: palette['red10'],
  linkHoverColor: palette['red7'],
  listItemColor: palette['red10'],
  loaderColor: palette['red10'],
  modalBackgroundColor: palette['gray5'],
  modalBorderColor: palette['gray3'],
  modalForegroundColor: palette['white'],
  navbarBrandZIndex: 100,
  navbarDropdownContentBackgroundColor: palette['white'],
  navbarDropdownContentShadowColor: palette['gray3'],
  navbarDropdownContentShadowColor2: palette['gray3'],
  navbarDropdownHeaderColor: palette['red10'],
  navbarDropdownItem: palette['red10'],
  navbarDropdownItemMobile: palette['white'],
  navbarMenuBackgroundColor: palette['red10'],
  navbarMenuZIndex: 50,
  navbarDropdownContentBorderColor: palette['white'],
  navbarTogglerColor: palette['white'],
  navbarTogglerZIndex: 100,
  panelBackgroundColor: palette['white'],
  panelShadowColor: palette['gray2'],
  sectionBackgroundColor: palette['gray2'],
  textColor: palette['gray8']
}

export default theme
/* eslint-enable sort-keys */
