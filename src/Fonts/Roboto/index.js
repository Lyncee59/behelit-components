import { injectGlobal } from 'styled-components'

import RobotoBlack from './Roboto-Black.ttf'
import RobotoBlackItalic from './Roboto-BlackItalic.ttf'
import RobotoBold from './Roboto-Bold.ttf'
import RobotoBoldItalic from './Roboto-BoldItalic.ttf'
import RobotoItalic from './Roboto-Italic.ttf'
import RobotoLight from './Roboto-Light.ttf'
import RobotoLightItalic from './Roboto-LightItalic.ttf'
import RobotoMedium from './Roboto-Medium.ttf'
import RobotoMediumItalic from './Roboto-MediumItalic.ttf'
import RobotoRegular from './Roboto-Regular.ttf'
import RobotoThin from './Roboto-Thin.ttf'
import RobotoThinItalic from './Roboto-ThinItalic.ttf'

const FontFace = (name, ttf, weight, italic) => {
  return (`
    @font-face {
      font-family: '${name}';
      src: url('${ttf}') format('truetype');
      font-weight: ${weight};
      font-style: normal;
      font-stretch: normal;
      font-style: ${italic ? 'italic' : 'normal'};
    }
  `)
}

// Fonts management
injectGlobal`
  ${FontFace('Roboto', RobotoThin, 100, false)}
  ${FontFace('Roboto', RobotoThinItalic, 100, true)}
  ${FontFace('Roboto', RobotoLight, 300, false)}
  ${FontFace('Roboto', RobotoLightItalic, 300, true)}
  ${FontFace('Roboto', RobotoRegular, 400, false)}
  ${FontFace('Roboto', RobotoItalic, 400, true)}
  ${FontFace('Roboto', RobotoMedium, 500, false)}
  ${FontFace('Roboto', RobotoMediumItalic, 500, true)}
  ${FontFace('Roboto', RobotoBold, 700, false)}
  ${FontFace('Roboto', RobotoBoldItalic, 700, true)}
  ${FontFace('Roboto', RobotoBlack, 900, false)}
  ${FontFace('Roboto', RobotoBlackItalic, 900, true)}
`
