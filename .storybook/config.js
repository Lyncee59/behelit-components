import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { DefaultPalette, ThemeProvider } from '../src'

const req = require.context('../src', true, /stories\.js$/)

addDecorator((story, context) =>
  withInfo({
    text: 'Documentation',
    inline: true,
    header: true,
  })(story)(context),
)

const colors = Object.keys(DefaultPalette).map((x) => ({
  name: x,
  value: DefaultPalette[x],
  default: x === 'white',
}))

addDecorator(withBackgrounds(colors))

addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)